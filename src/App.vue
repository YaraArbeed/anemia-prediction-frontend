<template>
  <div class="min-h-screen bg-gradient-to-br from-[#0a0a0f] via-[#1a1a24] to-[#0a0a0f]">
    <!-- Background decorative elements -->
    <div class="fixed inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div class="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
      <div class="absolute top-1/2 left-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
    </div>

    <!-- Main content -->
    <div class="relative z-10">
      <!-- Header -->
      <header class="border-b border-[#2d2d3d] backdrop-blur-sm bg-[#0a0a0f]/50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-2xl">
                🩸
              </div>
              <div>
                <h1 class="text-xl font-bold text-white">Anemia AI Predictor</h1>
                <p class="text-sm text-[#a1a1b5]">Advanced Medical Analysis</p>
              </div>
            </div>
            <div class="flex items-center gap-2 text-xs text-[#6b6b80]">
              <div class="w-2 h-2 rounded-full bg-success animate-pulse"></div>
              <span>System Online</span>
            </div>
          </div>
        </div>
      </header>

      <!-- Main Section -->
      <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="grid lg:grid-cols-2 gap-8 items-start">
          <!-- Left: Info Section -->
          <div class="space-y-6">
            <div>
              <div class="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium mb-4">
                AI-Powered Analysis
              </div>
              <h2 class="text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight text-balance">
                Predict Anemia with Advanced Blood Analysis
              </h2>
              <p class="text-lg text-[#a1a1b5] leading-relaxed">
                Enter your blood test parameters below for instant AI-powered anemia prediction. Our advanced machine learning model analyzes key indicators to provide accurate results.
              </p>
            </div>

            <!-- Info Cards -->
            <div class="grid sm:grid-cols-2 gap-4">
              <div class="bg-[#1a1a24] border border-[#2d2d3d] rounded-xl p-5 hover:border-[#3d3d4d] transition-colors">
                <div class="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-xl mb-3">
                  🔬
                </div>
                <h3 class="font-semibold text-white mb-1">Clinical Accuracy</h3>
                <p class="text-sm text-[#a1a1b5]">Trained on extensive medical datasets for reliable predictions</p>
              </div>
              <div class="bg-[#1a1a24] border border-[#2d2d3d] rounded-xl p-5 hover:border-[#3d3d4d] transition-colors">
                <div class="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center text-xl mb-3">
                  ⚡
                </div>
                <h3 class="font-semibold text-white mb-1">Instant Results</h3>
                <p class="text-sm text-[#a1a1b5]">Get your analysis in seconds with our optimized ML model</p>
              </div>
            </div>

            <!-- Parameters Info -->
            <div class="bg-[#1a1a24] border border-[#2d2d3d] rounded-xl p-6">
              <h3 class="font-semibold text-white mb-4 flex items-center gap-2">
                <span class="text-lg">📋</span>
                Blood Parameters
              </h3>
              <div class="space-y-3 text-sm">
                <div class="flex justify-between items-center">
                  <span class="text-[#a1a1b5]">Hemoglobin (Hb)</span>
                  <span class="text-[#6b6b80]">g/dL</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-[#a1a1b5]">Mean Corpuscular Hemoglobin (MCH)</span>
                  <span class="text-[#6b6b80]">pg</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-[#a1a1b5]">MCH Concentration (MCHC)</span>
                  <span class="text-[#6b6b80]">g/dL</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-[#a1a1b5]">Mean Corpuscular Volume (MCV)</span>
                  <span class="text-[#6b6b80]">fL</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Right: Form Section -->
          <div class="lg:sticky lg:top-8">
            <PredictionForm />
          </div>
        </div>
      </main>

      <!-- Footer -->
      <footer class="border-t border-[#2d2d3d] mt-20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p class="text-center text-sm text-[#6b6b80]">
            ⚠️ This tool is for educational purposes only. Always consult a healthcare professional for medical advice.
          </p>
        </div>
      </footer>
    </div>
  </div>
</template>

<script setup>
import PredictionForm from './components/PredictionForm.vue'
</script>
