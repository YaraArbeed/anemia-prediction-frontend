<template>
  <main class="container">
    <h1>Anemia Prediction</h1>
    <PredictionForm />
  </main>
</template>

<script>
import PredictionForm from './components/PredictionForm.vue'

export default {
  components: { PredictionForm }
}
</script>

<style>
/* quick styles */
.container {
  max-width: 640px;
  margin: 40px auto;
  padding: 20px;
  font-family: Arial, Helvetica, sans-serif;
}
h1 { text-align: center; margin-bottom: 20px; }
</style>
