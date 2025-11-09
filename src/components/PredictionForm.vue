<template>
  <div class="bg-[#1a1a24] border border-[#2d2d3d] rounded-2xl p-6 sm:p-8 shadow-2xl">
    <h3 class="text-2xl font-bold text-white mb-6">Enter Test Results</h3>
    
    <form @submit.prevent="handleSubmit" class="space-y-5">
      <!-- Hemoglobin Input -->
      <div class="space-y-2">
        <label class="block text-sm font-medium text-white">
          Hemoglobin (Hb)
          <span class="text-[#6b6b80] font-normal ml-1">g/dL</span>
        </label>
        <input 
          type="number" 
          step="0.01" 
          v-model.number="form.Hemoglobin" 
          required
          placeholder="e.g., 12.5"
          class="w-full px-4 py-3 bg-[#252532] border border-[#2d2d3d] rounded-xl text-white placeholder-[#6b6b80] focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
        />
      </div>

      <!-- MCH Input -->
      <div class="space-y-2">
        <label class="block text-sm font-medium text-white">
          Mean Corpuscular Hemoglobin (MCH)
          <span class="text-[#6b6b80] font-normal ml-1">pg</span>
        </label>
        <input 
          type="number" 
          step="0.01" 
          v-model.number="form.MCH" 
          required
          placeholder="e.g., 29.0"
          class="w-full px-4 py-3 bg-[#252532] border border-[#2d2d3d] rounded-xl text-white placeholder-[#6b6b80] focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
        />
      </div>

      <!-- MCHC Input -->
      <div class="space-y-2">
        <label class="block text-sm font-medium text-white">
          MCH Concentration (MCHC)
          <span class="text-[#6b6b80] font-normal ml-1">g/dL</span>
        </label>
        <input 
          type="number" 
          step="0.01" 
          v-model.number="form.MCHC" 
          required
          placeholder="e.g., 33.5"
          class="w-full px-4 py-3 bg-[#252532] border border-[#2d2d3d] rounded-xl text-white placeholder-[#6b6b80] focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
        />
      </div>

      <!-- MCV Input -->
      <div class="space-y-2">
        <label class="block text-sm font-medium text-white">
          Mean Corpuscular Volume (MCV)
          <span class="text-[#6b6b80] font-normal ml-1">fL</span>
        </label>
        <input 
          type="number" 
          step="0.01" 
          v-model.number="form.MCV" 
          required
          placeholder="e.g., 87.0"
          class="w-full px-4 py-3 bg-[#252532] border border-[#2d2d3d] rounded-xl text-white placeholder-[#6b6b80] focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
        />
      </div>

      <!-- Submit Button -->
      <button 
        type="submit" 
        :disabled="loading"
        class="w-full px-6 py-4 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-xl hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-[#1a1a24] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-lg"
      >
        <span v-if="!loading">Analyze Results</span>
        <span v-else class="flex items-center gap-2">
          <svg class="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Analyzing...
        </span>
      </button>
    </form>

    <!-- Error Message -->
    <div 
      v-if="error" 
      class="mt-6 p-4 bg-error/10 border border-error/30 rounded-xl flex items-start gap-3"
    >
      <span class="text-xl">⚠️</span>
      <div>
        <p class="text-sm font-medium text-error">Analysis Error</p>
        <p class="text-xs text-error/80 mt-1">{{ error }}</p>
      </div>
    </div>

    <!-- Result Display -->
    <div 
      v-if="result" 
      class="mt-6 p-6 rounded-xl border-2 transition-all"
      :class="resultClass"
    >
      <div class="flex items-center gap-3 mb-3">
        <div class="w-12 h-12 rounded-full flex items-center justify-center text-2xl" :class="resultIconBg">
          {{ resultIcon }}
        </div>
        <div>
          <p class="text-sm font-medium" :class="resultTextColor">Prediction Result</p>
          <p class="text-2xl font-bold" :class="resultTextColor">{{ result }}</p>
        </div>
      </div>
      <p class="text-sm" :class="resultTextMuted">
        {{ resultMessage }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { predictAnemia } from '../../api'

const form = ref({
  Hemoglobin: null,
  MCH: null,
  MCHC: null,
  MCV: null
})

const result = ref('')
const error = ref('')
const loading = ref(false)

const resultClass = computed(() => {
  if (!result.value) return ''
  const isAnemic = result.value.toLowerCase().includes('anemic') && !result.value.toLowerCase().includes('normal')
  return isAnemic 
    ? 'bg-error/10 border-error/30' 
    : 'bg-success/10 border-success/30'
})

const resultIcon = computed(() => {
  if (!result.value) return ''
  const isAnemic = result.value.toLowerCase().includes('anemic') && !result.value.toLowerCase().includes('normal')
  return isAnemic ? '⚠️' : '✅'
})

const resultIconBg = computed(() => {
  if (!result.value) return ''
  const isAnemic = result.value.toLowerCase().includes('anemic') && !result.value.toLowerCase().includes('normal')
  return isAnemic ? 'bg-error/20' : 'bg-success/20'
})

const resultTextColor = computed(() => {
  if (!result.value) return ''
  const isAnemic = result.value.toLowerCase().includes('anemic') && !result.value.toLowerCase().includes('normal')
  return isAnemic ? 'text-error' : 'text-success'
})

const resultTextMuted = computed(() => {
  if (!result.value) return ''
  const isAnemic = result.value.toLowerCase().includes('anemic') && !result.value.toLowerCase().includes('normal')
  return isAnemic ? 'text-error/70' : 'text-success/70'
})

const resultMessage = computed(() => {
  if (!result.value) return ''
  const isAnemic = result.value.toLowerCase().includes('anemic') && !result.value.toLowerCase().includes('normal')
  return isAnemic 
    ? 'The analysis indicates potential anemia. Please consult with a healthcare professional for proper diagnosis and treatment.'
    : 'The analysis indicates normal blood parameters. Continue maintaining a healthy lifestyle.'
})

async function handleSubmit() {
  error.value = ''
  result.value = ''
  loading.value = true
  
  try {
    const res = await predictAnemia(form.value)
    result.value = res.prediction || JSON.stringify(res)
  } catch (err) {
    console.error(err)
    error.value = err.message || 'Failed to connect to the prediction service. Please try again.'
  } finally {
    loading.value = false
  }
}
</script>
