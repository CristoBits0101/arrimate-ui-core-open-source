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
        // Types restricts the autocomplete suggestions to places
        input,
        // ! -> Google Maps api key always exists
        key: process.env.GOOGLE_MAPS_API_KEY!
      }
    })
    // Return the autocomplete predictions
    if (response) return response.data.predictions
  } catch (err) {
    // Log any error that occurs during the autocomplete request
    console.error('Error performing autocomplete request: ', err)
    return null
  }
}

export default autocomplete
