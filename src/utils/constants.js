// Define the filename constant
export const dataFileName = 'shireburn-test-data.json';

// Define the dataSource constant
export const dataSource = `data/${dataFileName}`;


// Options for filtering the employees data
export const filterOptions = {
  'all': 'All',
  'employedSoon': 'Employed soon',
  'currentlyEmployed': 'Currently employed',
  'toBeTerminated': 'To be terminated',
  'terminated': 'Terminated',
}

// Message for show when don't have employees data 
export const dataNotFoundMessage = 'Records not found.'

// Messages about the date status
export const dateStatus = {
  futureEmployment: 'employed soon',
  pastEmployment: 'currently employed',
  futureTermination: 'to be terminated',
  pastTermination: 'terminated'
}