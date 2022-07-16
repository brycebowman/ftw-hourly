import { types as sdkTypes } from './util/sdkLoader';

const { LatLng, LatLngBounds } = sdkTypes;

// An array of locations to show in the LocationAutocompleteInput when
// the input is in focus but the user hasn't typed in any search yet.
//
// Each item in the array should be an object with a unique `id` (String) and a
// `predictionPlace` (util.types.place) properties.
const defaultLocations = [
  {
    id: 'default-san-francisco',
    predictionPlace: {
      address: 'San Francisco, CA',
      bounds: new LatLngBounds(
        new LatLng(37.9464430069081, -122.146995082683),
        new LatLng(37.4944780500533, -122.726910874663)
      ),
    },
  },
  {
    id: 'default-san-diego',
    predictionPlace: {
      address: 'San Diego, CA',
      bounds: new LatLngBounds(
        new LatLng(33.3396430069081, -116.35815082683),
        new LatLng(32.2649780500533, -117.75710874663)
      ),
    },
  },
  {
    id: 'default-miami',
    predictionPlace: {
      address: 'Miami, FL',
      bounds: new LatLngBounds(
        new LatLng(26.4042930069081, -79.665395082683),
        new LatLng(25.1820780500533, -81.150810874663)
      ),
    },
  },
  {
    id: 'default-atlanta',
    predictionPlace: {
      address: 'Atlanta, GA',
      bounds: new LatLngBounds(
        new LatLng(34.0230930069081, -84.126121082683),
        new LatLng(33.5260780500533, -84.61919874663)
      ),
    },
  },

  {
    id: 'default-chicago',
    predictionPlace: {
      address: 'Chicago, IL',
      bounds: new LatLngBounds(
        new LatLng(42.5504430069081, -86.779995082683),
        new LatLng(40.9588780500533, -89.112910874663)
      ),
    },
  },
  {
    id: 'default-minneapolis',
    predictionPlace: {
      address: 'Minneapolis-St.Paul, MN',
      bounds: new LatLngBounds(
        new LatLng(45.3549930069081, -92.712921082683),
        new LatLng(44.4930780500533, -93.85803874663)
      ),
    },
  },
  {
    id: 'default-kansas-city',
    predictionPlace: {
      address: 'Kansas City, MO',
      bounds: new LatLngBounds(
        new LatLng(39.4233930069081, -94.155995082683),
        new LatLng(38.7961780500533, -95.038830874663)
      ),
    },
  },
  {
    id: 'default-st-louis',
    predictionPlace: {
      address: 'St. Louis, MO',
      bounds: new LatLngBounds(
        new LatLng(38.9611930069081, -90.000741082683),
        new LatLng(38.4901380500533, -90.660289874663)
      ),
    },
  },
  {
    id: 'default-portland',
    predictionPlace: {
      address: 'Portland, OR',
      bounds: new LatLngBounds(
        new LatLng(45.8493930069081, -122.109895082683),
        new LatLng(45.2834780500533, -122.99270874663)
      ),
    },
  },
  {
    id: 'default-new-york',
    predictionPlace: {
      address: 'New York City, NY',
      bounds: new LatLngBounds(
        new LatLng(41.25463109, -73.16371027),
        new LatLng(40.00533611, -74.28020782)
      ),
    },
  },
  {
    id: 'default-philadelphia',
    predictionPlace: {
      address: 'Philadelphia, PA',
      bounds: new LatLngBounds(
        new LatLng(40.13763109, -74.91771027),
        new LatLng(39.85533611, -75.32060782)
      ),
    },
  },
  {
    id: 'default-houston',
    predictionPlace: {
      address: 'Houston, TX',
      bounds: new LatLngBounds(
        new LatLng(30.3594430069081, -94.668995082683),
        new LatLng(29.2075780500533, -96.120910874663)
      ),
    },
  },
 ];
export default defaultLocations;
