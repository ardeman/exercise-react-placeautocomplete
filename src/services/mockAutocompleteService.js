const mockSuggestions = [
  'New York, USA',
  'Los Angeles, USA',
  'San Francisco, USA',
  'London, UK',
  'Paris, France',
  // Add more mock suggestions as needed
];

export const fetchMockAutocompleteSuggestions = async (input) => {
  // Simulate an API call delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  // Filter suggestions based on input
  const filteredSuggestions = mockSuggestions.filter((suggestion) =>
    suggestion.toLowerCase().includes(input.toLowerCase())
  );

  return filteredSuggestions;
};
