<script setup lang="ts">
import { onMounted, ref } from 'vue'
import ScheduleCarousel from './ScheduleCarousel.vue'
import { Icon } from '@iconify/vue'
import { useAuthStore } from '@/stores/auth.ts'
import { storeToRefs } from 'pinia'
import NewAppointmentModal from '@/components/appointments/NewAppointmentModal.vue'
import Modal from '@/components/layouts/Modal.vue'
import Button from '@/components/forms/Button.vue'
import RegisterForm from '@/components/auth/RegisterForm.vue'
import AuthForm from '@/components/auth/AuthForm.vue'

const authStore = useAuthStore()
const { isAuthenticated } = storeToRefs(authStore)
const doctor = ref<object>({})
const newAppointment = ref<null | object>({})
const openModal = ref<boolean>(false)
const formCreate = ref<boolean>(false)

interface Props {
  id: number
  name: string
  specialty: string
  address: string
  schedules: Record<string, { id: number; time: string }[]>
  // formato:
  // {
  //   "2025-09-29": [{ id: 1, time: "15:00" }, { id: 2, time: "16:00" }],
  //   "2025-09-30": [...]
  // }
}

const props = defineProps<Props>()

onMounted(() => {
  doctor.value = {
    id: props.id,
    name: props.name,
    specialty: props.specialty,
    full_address: props.address,
  }
})

/*const emit = defineEmits<{
  (e: 'newAppointment', appointment: object)
}>()*/

function dataAppointment(appointment: object) {
  newAppointment.value = { ...appointment }
  showModal()
}

function showModal() {
  openModal.value = true
}

function closeModal() {
  openModal.value = false
}
</script>

<template>
  <div class="flex flex-col md:flex-row bg-grayScale-0 rounded shadow w-full">
    <div class="container flex flex-col md:flex-row py-4 w-full gap-6 items-center">
      <!-- Dados do médico -->
      <div class="flex-1 order-1">
        <div class="flex flex-col space-y-2">
          <h2>{{ name }}</h2>
          <p class="font-sans font-semibold text-pd text-grayScale-3">
            {{ specialty }}
          </p>
          <p class="font-sans text-sm text-grayScale-3 flex items-center gap-2">
            <Icon icon="mdi:map-marker" class="w-4 h-4 text-grayScale-2" />
            {{ address }}
          </p>
        </div>
      </div>

      <div class="flex-1 order-2">
        <ScheduleCarousel
          :doctor="doctor"
          :schedules="schedules"
          @new-appointment="dataAppointment"
        />
      </div>
    </div>
  </div>

  <NewAppointmentModal
    v-if="isAuthenticated"
    :key="newAppointment?.doctor_schedule_id || 'empty'"
    :appointment="newAppointment"
    :show="openModal"
  />

  <Modal
    v-else
    :show="openModal"
    :title="formCreate ? 'Crie sua conta' : 'Entre na sua conta'"
    @close="closeModal"
  >
    <RegisterForm v-if="formCreate" />
    <AuthForm v-else />

    <p
      v-if="formCreate"
      class="flex justify-center items-center space-x-2 text-grayScale-3 pt-6 text-center border-t border-t-grayScale-1"
    >
      <span>Já tem uma conta?</span>
      <Button variant="secondary" @click="formCreate = false"> Entrar na conta</Button>
    </p>
    <p
      v-else
      class="flex justify-center items-center space-x-2 text-grayScale-3 pt-6 text-center border-t border-t-grayScale-1"
    >
      <span>Não tem uma conta?</span>
      <Button variant="secondary" @click="formCreate = true"> Criar uma conta</Button>
    </p>
  </Modal>
</template>
