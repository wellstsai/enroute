import _ from 'lodash';
import AutoCompleteService from './autoCompleteService';

const autoCompleteRequest = async (input) => {
  if (!input) {
    return [];
  }
  const request = { input };
  const autoCompleteService = AutoCompleteService();
  return new Promise(resolve => (
    autoCompleteService.getPlacePredictions(request, (response, status) => {
      if (status !== 'OK') {
        resolve([]);
      }

      resolve(_.map(response, suggestion => suggestion.description));
    })
  ));
};

export default autoCompleteRequest;
