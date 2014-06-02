// form validation rules via Regulate.js

Regulate('form', [
  {
    name: 'zoneCaptain',
    min_length: 2,
    display_as: 'Zone Captain',
    display_error: '#zoneCaptain-error'
  },
  {
    name: 'partner',
    min_length: 2,
    display_as: 'Partner',
    display_error: '#partner-error'
  },
  {
    name: 'zone',
    min_length: 2,
    display_as: 'Zone',
    display_error: '#zone-error'
  },
  {
    name: 'volunteers',
    display_as: 'Volunteers',
    display_error: '#volunteers-error'
  },
  {
    name: 'poundsCollected',
    display_as: 'Pounds Collected',
    display_error: '#poundsCollected-error'
  },
  {
    name: 'milesCleaned',
    display_as: 'Miles Cleaned',
    display_error: '#milesCleaned-error'
  }
]);
