<script setup lang="ts">
import { ref, defineProps, defineEmits, onMounted, watch, toRefs } from 'vue'
import { useAuthStore } from '@/stores/auth'
import Modal from '@/components/layouts/Modal.vue'
import Button from '@/components/forms/Button.vue'
import { Icon } from '@iconify/vue'
import AppointmentsRepository from '@/repositories/AppointmentsRepository.ts'
import { useRouter } from 'vue-router'

const router = useRouter()

// const authStore = useAuthStore()
const open = ref<boolean>(false)

interface Appointment {
  doctor_id: number
  doctor_schedule_id: number
  schedule: {
    doctorName: string
    doctorSpecialty: string
    doctorFullAddress: string
    date: string
    time: string
  }
}

interface Props {
  appointment: Record<string, Appointment>
  show: boolean
}

const props = withDefaults(defineProps<Props>(), {
  show: false,
})

watch(
  () => props.show,
  (value) => {
    if (value) {
      open.value = value
    }
  },
)

onMounted(() => {
  open.value = props.show
})

async function handleSchedule() {
  try {
    const doctor_id = props.appointment.doctor_id
    const doctor_schedule_id = props.appointment.doctor_schedule_id
    const { data } = await AppointmentsRepository.newAppointments({ doctor_id, doctor_schedule_id })

    console.log(data)

    router.push('/profile')
  } catch (e) {
    console.log(e.response?.data?.message)
  }
  console.log(props.appointment)
}
</script>

<template>
  <Modal :show="open" title="Agendar consulta?" @close="open = false">
    <!-- Inputs -->
    <div class="flex flex-col gap-4 -mt-2">
      <div class="pb-4 flex justify-between items-start space-x-4">
        <div class="flex flex-col space-y-0.5">
          <h2>{{ appointment.schedule.doctorName }}</h2>
          <p class="text-grayScale-3 font-semibold">{{ appointment.schedule.doctorSpecialty }}</p>
          <p class="text-grayScale-3 text-sm flex items-center gap-1">
            <Icon icon="mdi:map-marker" class="w-4 h-4 text-grayScale-2" />
            {{ appointment.schedule.doctorFullAddress }}
          </p>
        </div>
        <div class="text-sm text-grayScale-3">
          Agendada para <br />
          <span class="text-primary-2 font-medium">
            {{ appointment.schedule.date }} às {{ appointment.schedule.time }}
          </span>
        </div>
      </div>
      <Button variant="primary" size="big" @click="handleSchedule">Agendar</Button>
      <Button variant="secondary" size="big" @click="open = false">Cancelar</Button>
    </div>
  </Modal>
</template>

<style scoped></style>
