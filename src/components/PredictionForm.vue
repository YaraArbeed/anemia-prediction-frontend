<template>
  <div class="form-card">
    <form @submit.prevent="submit">
      <label>
        Hemoglobin
        <input type="number" step="any" v-model.number="form.Hemoglobin" required />
      </label>

      <label>
        MCH
        <input type="number" step="any" v-model.number="form.MCH" required />
      </label>

      <label>
        MCHC
        <input type="number" step="any" v-model.number="form.MCHC" required />
      </label>

      <label>
        MCV
        <input type="number" step="any" v-model.number="form.MCV" required />
      </label>

      <button type="submit" :disabled="loading">{{ loading ? 'Predicting...' : 'Predict' }}</button>
    </form>

    <div v-if="error" class="error">{{ error }}</div>
    <div v-if="result" class="result">
      <strong>Result:</strong> {{ result }}
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { predictAnemia } from '../services/api'

export default {
  setup() {
    const form = ref({
      Hemoglobin: null,
      MCH: null,
      MCHC: null,
      MCV: null
    })
    const result = ref('')
    const error = ref('')
    const loading = ref(false)

    async function submit() {
      error.value = ''
      result.value = ''
      loading.value = true
      try {
        // call the service
        const res = await predictAnemia(form.value)
        // res is expected: { prediction: "Anemic" } or { prediction: "Normal" }
        result.value = res.prediction || JSON.stringify(res)
      } catch (err) {
        console.error(err)
        error.value = err.message || 'Request failed'
      } finally {
        loading.value = false
      }
    }

    return { form, submit, result, error, loading }
  }
}
</script>

<style>
.form-card { border: 1px solid #ddd; padding: 16px; border-radius: 8px; }
label { display: block; margin-bottom: 12px; }
input { width: 100%; padding: 8px; box-sizing: border-box; margin-top: 4px; }
button { padding: 10px 16px; cursor: pointer; }
.error { color: red; margin-top: 12px; }
.result { margin-top: 12px; background:#f6f6f6; padding: 10px; border-radius: 6px }
</style>
