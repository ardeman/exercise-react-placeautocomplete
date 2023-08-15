import axios from 'axios';

const AUTOCOMPLETE_API_URL = 'https://maps.googleapis.com/maps/api/place/autocomplete/json';
const API_KEY = 'YOUR_GOOGLE_PLACES_API_KEY';

export const fetchAutocompleteSuggestions = async (input) => {
  try {
    const response = await axios.get(AUTOCOMPLETE_API_URL, {
      params: {
        input,
        key: API_KEY,
      },
    });

    return response.data.predictions;
  } catch (error) {
    console.error('Error fetching autocomplete suggestions:', error);
    return [];
  }
};
