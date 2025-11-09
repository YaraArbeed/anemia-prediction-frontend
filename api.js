// src/services/api.js
const API_BASE = import.meta.env.VITE_API_URL || "https://anemia-prediction-1-888o.onrender.com"

/**
 * Predicts anemia based on blood test parameters
 * @param {Object} payload - Blood test values
 * @param {number} payload.Hemoglobin - Hemoglobin level (g/dL)
 * @param {number} payload.MCH - Mean Corpuscular Hemoglobin (pg)
 * @param {number} payload.MCHC - Mean Corpuscular Hemoglobin Concentration (g/dL)
 * @param {number} payload.MCV - Mean Corpuscular Volume (fL)
 * @returns {Promise<Object>} Prediction result
 */
export async function predictAnemia(payload) {
  const url = `${API_BASE}/predict`

  try {
    const resp = await fetch(url, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    })

    if (!resp.ok) {
      const text = await resp.text()
      throw new Error(`API request failed: ${resp.status} ${text}`)
    }

    return await resp.json()
  } catch (error) {
    console.error("[v0] Error predicting anemia:", error)
    if (error.message.includes("fetch")) {
      throw new Error(
        `Unable to connect to API. The server may not allow cross-origin requests. Error: ${error.message}`,
      )
    }
    throw error
  }
}
