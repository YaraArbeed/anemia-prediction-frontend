// src/services/api.js
const API_BASE = import.meta.env.VITE_API_URL || 'https://anemia-prediction-1-888o.onrender.com'

export async function predictAnemia(payload) {
  // payload example: { Hemoglobin: 12.3, MCH: 29.1, MCHC: 33.4, MCV: 87.5 }
  const url = `${API_BASE}/predict`
  const resp = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  })

  if (!resp.ok) {
    const text = await resp.text()
    throw new Error(`API request failed: ${resp.status} ${text}`)
  }
  return await resp.json()
}
