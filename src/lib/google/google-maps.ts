'use server'

// googlemaps/google-maps-services-js
import { Client } from '@googlemaps/google-maps-services-js'

// Initialize the Google Maps JavaScript API client
const client = new Client()

// Function to perform a place autocomplete request to the Google Maps API
const autocomplete = async (input: string) => {
  try {
    const response = await client.placeAutocomplete({
      params: {
        input,
        key: process.env.GOOGLE_MAPS_API_KEY || ''
      },
      timeout: 1000
    })
    // Return the autocomplete predictions
    if (response.data && response.data.predictions)
      return response.data.predictions
    console.warn('No predictions found for input: ', input)
    return []
  } catch (err) {
    // Log any error that occurs during the autocomplete request
    console.error('Error performing autocomplete request: ', err)
    return []
  }
}

export default autocomplete
