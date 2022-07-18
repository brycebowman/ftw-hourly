/*
 * Marketplace specific configuration.
 *
 * Every filter needs to have following keys:
 * - id:     Unique id of the filter.
 * - label:  The default label of the filter.
 * - type:   String that represents one of the existing filter components:
 *           BookingDateRangeFilter, KeywordFilter, PriceFilter,
 *           SelectSingleFilter, SelectMultipleFilter.
 * - group:  Is this 'primary' or 'secondary' filter?
 *           Primary filters are visible on desktop layout by default.
 *           Secondary filters are behind "More filters" button.
 *           Read more from src/containers/SearchPage/README.md
 * - queryParamNames: Describes parameters to be used with queries
 *                    (e.g. 'price' or 'pub_amenities'). Most of these are
 *                    the same between webapp URLs and API query params.
 *                    You can't change 'dates', 'price', or 'keywords'
 *                    since those filters are fixed to a specific attribute.
 * - config: Extra configuration that the filter component needs.
 *
 * Note 1: Labels could be tied to translation file
 *         by importing FormattedMessage:
 *         <FormattedMessage id="some.translation.key.here" />
 *
 * Note 2: If you need to add new custom filter components,
 *         you need to take those into use in:
 *         src/containers/SearchPage/FilterComponent.js
 *
 * Note 3: If you just want to create more enum filters
 *         (i.e. SelectSingleFilter, SelectMultipleFilter),
 *         you can just add more configurations with those filter types
 *         and tie them with correct extended data key
 *         (i.e. pub_<key> or meta_<key>).
 */

export const filters = [
  {
    id: 'yogaStyles',
    label: 'Restaurant',
    type: 'SelectMultipleFilter',
    group: 'primary',
    queryParamNames: ['pub_yogaStyles'],
    config: {
      // Optional modes: 'has_all', 'has_any'
      // https://www.sharetribe.com/api-reference/marketplace.html#extended-data-filtering
      searchMode: 'has_any',

      // "key" is the option you see in Flex Console.
      // "label" is set here for this web app's UI only.
      // Note: label is not added through the translation files
      // to make filter customizations a bit easier.
      options: [
        { key: 'american', label: 'American' },
        { key: 'bakery', label: 'Bakery' },
        { key: 'bar', label: 'Bar' },
        { key: 'chinese', label: 'Chinese' },
        { key: 'coffee', label: 'Coffee Shop' },
        { key: 'indian', label: 'Indian' },
        { key: 'italian', label: 'Italian' },
        { key: 'japanese', label: 'Japanese' },
        { key: 'mexican', label: 'Mexican' },
        { key: 'pizza', label: 'Pizza' },
        { key: 'thai', label: 'Thai' },
        { key: 'catering', label: 'Catering' },
        { key: 'festival', label: 'Fair Concession' },
        { key: 'fast-food-burgers', label: 'Fast Food: Burgers' },
        { key: 'fast-food-chinese', label: 'Fast Food: Chinese' },
        { key: 'fast-food-mexican', label: 'Fast Food: Mexican' },
        { key: 'fast-food-sandwiches', label: 'Fast Food: Sandwiches' },
        { key: 'other-not-listed', label: 'Other: Not Listed' },
      ],
    },
  },

  {
    id: 'skills',
    label: 'Roles',
    type: 'SelectMultipleFilter',
    group: 'primary',
    queryParamNames: ['pub_skills'],
    config: {
      // Optional modes: 'has_all', 'has_any'
      // https://www.sharetribe.com/api-reference/marketplace.html#extended-data-filtering
      searchMode: 'has_any',
      twoColumns: true,

      // "key" is the option you see in Flex Console.
      // "label" is set here for this web app's UI only.
      // Note: label is not added through the translation files
      // to make filter customizations a bit easier.
      options: [
        { key: 'barista', label: 'Barista' },
        { key: 'bartender', label: 'Bartender' },
        { key: 'cashier', label: 'Cashier' },
        { key: 'chef-head', label: 'Chef: Head' },
        { key: 'chef-sushi', label: 'Chef: Sushi' },
        { key: 'chef-sous', label: 'Chef: Sous' },
        { key: 'crewmember', label: 'Crew Member' },
        { key: 'cookfry', label: 'Cook: Fry' },
        { key: 'cookgrill', label: 'Cook: Grill' },
        { key: 'cookline', label: 'Cook: Line' },
        { key: 'cookprep', label: 'Cook: Prep' },
        { key: 'cookother', label: 'Cook: Other' },
        { key: 'dishwasher', label: 'Dishwasher' },
        { key: 'driver', label: 'Driver' },
        { key: 'drive-thru', label: 'Drive-Thru' },
        { key: 'greeter', label: 'Greeter/Host' },
        { key: 'sandwiches', label: 'Sandwich Artist' },
        { key: 'manager', label: 'Supervisor or Manager' },
        { key: 'server', label: 'Server' },
        { key: 'takeout', label: 'Take-Out' },
      ],
    },
  },
  {
    id: 'yearsexp',
    label: 'Experience',
    type: 'SelectSingleFilter',
    group: 'primary',
    queryParamNames: ['pub_yearsexp'],
    config: {
      // Optional modes: 'has_all', 'has_any'
      // https://www.sharetribe.com/api-reference/marketplace.html#extended-data-filtering
      searchMode: 'has_any',

      // "key" is the option you see in Flex Console.
      // "label" is set here for this web app's UI only.
      // Note: label is not added through the translation files
      // to make filter customizations a bit easier.
      options: [
        { key: 'None', label: 'No Experience' },
        { key: '3-6Months', label: '3 to 6 Months' },
        { key: '6-12Months', label: '6 to 12 Months' },
        { key: '1-2Years', label: '1 to 2 Years' },
        { key: '3Years', label: '3 Years or More' },
      ],
    },
  },
  {
    id: 'willingToTravel',
    label: 'Distance',
    type: 'Hidden',
    group: 'hidden',
    queryParamNames: ['pub_willingToTravel'],
    config: {
      // Optional modes: 'has_all', 'has_any'
      // https://www.sharetribe.com/api-reference/marketplace.html#extended-data-filtering
      searchMode: 'has_any',

      // "key" is the option you see in Flex Console.
      // "label" is set here for this web app's UI only.
      // Note: label is not added through the translation files
      // to make filter customizations a bit easier.
      options: [
        { key: 'miles2', label: 'I am willing to travel 2 miles from the below location:' },
        { key: 'miles5', label: 'I am willing to travel 5 miles from the below location:' },
        { key: 'miles10', label: 'I am willing to travel 10 miles from the below location:' },
        { key: 'miles20', label: 'I am willing to travel 20 miles from the below location:' },
        { key: 'miles30', label: 'I am willing to travel 30 miles from the below location:' },
      ],
    },
  },
    {
  id: 'price',
  label: 'Hourly Rate',
  type: 'PriceFilter',
  group: 'secondary',
  // Note: PriceFilter is fixed filter,
  // you can't change "queryParamNames: ['price'],"
  queryParamNames: ['price'],
  // Price filter configuration
  // Note: unlike most prices this is not handled in subunits
  config: {
    min: 15,
    max: 50,
    step: 5,
  },
},
  {
    id: 'language',
    label: 'Languages',
    type: 'SelectMultipleFilter',
    group: 'secondary',
    queryParamNames: ['pub_language'],
    config: {
      // Optional modes: 'has_all', 'has_any'
      // https://www.sharetribe.com/api-reference/marketplace.html#extended-data-filtering
      searchMode: 'has_any',

      // "key" is the option you see in Flex Console.
      // "label" is set here for this web app's UI only.
      // Note: label is not added through the translation files
      // to make filter customizations a bit easier.
      options: [
        { key: 'english', label: 'English' },
        { key: 'chinese', label: 'Chinese' },
        { key: 'french', label: 'French' },
        { key: 'german', label: 'German' },
        { key: 'italian', label: 'Italian' },
        { key: 'russian', label: 'Russian' },
        { key: 'spanish', label: 'Spanish' },
        { key: 'thai', label: 'Thai' },
        { key: 'vietnamese', label: 'Vietnamese' },
        { key: 'other', label: 'Other' },
      ],
    },
  },
    {
      id: 'keyword',
      label: 'Keyword',
      type: 'KeywordFilter',
      group: 'primary',
      // Note: KeywordFilter is fixed filter,
      // you can't change "queryParamNames: ['keywords'],"
    queryParamNames: ['keywords'],
    // NOTE: If you are ordering search results by distance
    // the keyword search can't be used at the same time.
    // You can turn on/off ordering by distance from config.js file.
      config: {},
    },
  {
    id: 'dates-length',
    label: 'Availability',
    type: 'BookingDateRangeFilter',
    group: 'secondary',
    // Note: BookingDateRangeFilter is fixed filter,
    // you can't change "queryParamNames: ['dates'],"
    queryParamNames: ['dates', 'minDuration'],
    config: {
      // A global time zone to use in availability searches. As listings
      // can be in various time zones, we must decide what time zone we
      // use in search when looking for available listings within a
      // certain time interval.
      //
      // If you have all/most listings in a certain time zone, change this
      // config value to that.
      //
      // See: https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
      searchTimeZone: 'Etc/UTC',

      // Options for the minimum duration of the booking
      options: [
        { key: '0', label: 'Any length' },
        { key: '60', label: '1 hour', shortLabel: '1h' },
        { key: '120', label: '2 hours', shortLabel: '2h' },
        ],
    },
  },
  {
    id: 'certificate',
    label: 'Workers Open to Long-Term Job Offers',
    type: 'Hide',
    group: 'secondary',
    queryParamNames: ['pub_certificate'],
      config: {
      // "key" is the option you see in Flex Console.
      // "label" is set here for the UI only.
      // Note: label is not added through the translation files
      // to make filter customizations a bit easier.
      hideFromFilters: 'true',
      options: [
        {
          key: 'short-term-only',
          label: 'No',
          hideFromFilters: 'true',
          hideFromListingInfo: 'true',
        },
        {
          key: 'short-or-long-term',
          label: 'Yes',
          hideFromFilters: 'true',
          hideFromListingInfo: 'true',
        },
      ],
    },
  },
];

export const sortConfig = {
  // Enable/disable the sorting control in the SearchPage
  active: true,

  // Note: queryParamName 'sort' is fixed,
  // you can't change it since Flex API expects it to be named as 'sort'
  queryParamName: 'sort',

  // Internal key for the relevance option, see notes below.
  relevanceKey: 'relevance',

  // Keyword filter is sorting the results already by relevance.
  // If keyword filter is active, we need to disable sorting.
  conflictingFilters: ['keyword'],

  options: [
    { key: 'createdAt', label: 'Newest' },
    { key: '-createdAt', label: 'Oldest' },
    { key: '-price', label: 'Lowest price' },
    { key: 'price', label: 'Highest price' },

    // The relevance is only used for keyword search, but the
    // parameter isn't sent to the Marketplace API. The key is purely
    // for handling the internal state of the sorting dropdown.
    { key: 'relevance', label: 'Relevance', longLabel: 'Relevance (Keyword search)' },
  ],
};
