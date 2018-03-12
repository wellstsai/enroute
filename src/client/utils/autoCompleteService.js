let autoCompleteService;

const AutoCompleteService = () => {
  if (!autoCompleteService) {
    autoCompleteService = new window.google.maps.places.AutocompleteService();
  }
  return autoCompleteService;
};

export default AutoCompleteService;
