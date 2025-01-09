'use server'

// Google Maps API
import { Client } from '@googlemaps/google-maps-services-js'

// Initialize client
const client = new Client()

// Autocomplete function
const autocomplete = async (input: string) => {
  try {
    const response = await client.placeAutocomplete({
      params: {
        input,
        key: process.env.GOOGLE_MAPS_API_KEY || ''
      },
      timeout: 1000
    })
    // Return predictions
    if (response.data && response.data.predictions)
      return response.data.predictions
    console.warn('No predictions for input:', input)
    return []
  } catch (err) {
    // Log errors
    console.error('Autocomplete error:', err)
    return []
  }
}

export default autocomplete
