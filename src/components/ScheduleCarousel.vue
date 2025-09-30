<script setup lang="ts">
import { ref, computed } from 'vue'
import { Icon } from '@iconify/vue'
import Button from '@/components/forms/Button.vue'

interface Schedule {
  id: number
  time: string
}

interface Doctor {
  id: number
  name: string
  specialty: string
  full_address: string
}

interface Props {
  schedules: Record<string, Schedule[]>
  // Exemplo:
  // {
  //   "2025-09-29": [{ id: 1, time: "15:00" }, { id: 2, time: "16:00" }],
  //   "2025-09-30": []
  // }
  daysToShow?: number // quantidade total de dias no carrossel (ex: 14)
  doctor: Record<string, Doctor>
}

const props = withDefaults(defineProps<Props>(), {
  daysToShow: 14, // padrão: gerar 2 semanas a partir de amanhã
})

const currentIndex = ref(0)

// gera a lista de dias a partir de amanhã
const generatedDays = computed(() => {
  const tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() + 1)

  const result: { date: string; slots: Schedule[] }[] = []
  for (let i = 0; i < props.daysToShow; i++) {
    const d = new Date(tomorrow) // clona
    d.setDate(tomorrow.getDate() + i)

    const localDate = new Intl.DateTimeFormat('sv-SE', {
      timeZone: 'America/Sao_Paulo',
    }).format(d)
    result.push({
      date: localDate,
      slots: props.schedules[localDate] ?? [],
    })
  }

  return result
})

// divide em blocos de 4
const dayChunks = computed(() => {
  const chunks: (typeof generatedDays.value)[][] = []
  for (let i = 0; i < generatedDays.value.length; i += 4) {
    chunks.push(generatedDays.value.slice(i, i + 4))
  }
  return chunks
})

function prev() {
  if (currentIndex.value > 0) currentIndex.value--
}

function next() {
  if (currentIndex.value < dayChunks.value.length - 1) currentIndex.value++
}

function ucFirst(text) {
  return text.charAt(0).toUpperCase() + text.slice(1)
}

function formatDateLocal(d: Date): string {
  const year = d.getFullYear()
  const month = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

function getDateFromClick(...date) {
  console.log(date, props.doctor)
}
</script>

<template>
  <div class="w-full max-h-52 h-52 overflow-y-auto">
    <!-- Cabeçalho do carrossel -->
    <div class="flex items-center justify-between mb-4">
      <!-- Botão voltar -->
      <button
        @click="prev"
        class="px-2 text-primary-2 disabled:text-grayScale-2 cursor-pointer"
        :disabled="currentIndex === 0"
      >
        <Icon icon="mdi:keyboard-arrow-left" class="w-5 h-5" />
      </button>

      <!-- Dias (grid de 4 colunas) -->
      <div class="grid grid-cols-4 gap-4 flex-1 text-center">
        <div
          v-for="(day, i) in dayChunks[currentIndex]"
          :key="day.date"
          class="flex flex-col items-center"
        >
          <!-- Sigla do dia da semana -->
          <span class="font-sans text-grayScale-4 text-sm">
            {{
              i === 0 && currentIndex === 0
                ? 'Amanhã'
                : ucFirst(
                    new Date(day.date)
                      .toLocaleDateString('pt-BR', { weekday: 'short' })
                      .replace('.', ''),
                  )
            }}
          </span>

          <!-- Data -->
          <span class="font-sans font-semibold text-grayScale-4 text-base">
            {{
              new Date(day.date).toLocaleDateString('pt-BR', {
                day: '2-digit',
                month: '2-digit',
              })
            }}
          </span>
        </div>
      </div>

      <!-- Botão avançar -->
      <button
        @click="next"
        class="px-2 text-primary-2 disabled:text-grayScale-2 cursor-pointer disabled:cursor-auto"
        :disabled="currentIndex === dayChunks.length - 1"
      >
        <Icon icon="mdi:keyboard-arrow-right" class="w-5 h-5" />
      </button>
    </div>

    <!-- Horários -->
    <div class="grid grid-cols-4 gap-4 px-8">
      <div
        v-for="day in dayChunks[currentIndex]"
        :key="day.date + '-slots'"
        class="flex flex-col items-center"
      >
        <div class="flex flex-col gap-2 w-full items-center">
          <template v-if="day.slots.length > 0">
            <Button
              variant="secondary"
              v-for="slot in day.slots"
              :key="slot.id"
              @click="getDateFromClick(day.date, slot.id, slot.time)"
            >
              {{ slot.time }}
            </Button>
          </template>
          <Button v-else variant="secondary" disabled>
            <span class="font-bold px-3">--</span>
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>
