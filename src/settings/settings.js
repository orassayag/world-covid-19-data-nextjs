import { ComponentModeEnum, EnvironmentModeEnum } from '../core/enums';

const settings = {
  // ===SYSTEM=== //
  // DEVELOPMENT | PRODUCTION. The environment mode of the application.
  ENVIRONMENT_MODE: EnvironmentModeEnum.DEVELOPMENT,
  // APP | ICONS | IMAGES | TEST. Display the data, a list of icons,
  // only a list of names and flags, or the test component.
  COMPONENT_MODE: ComponentModeEnum.APP,
  // ===FLAG=== //
  IS_COUNTRIES_LOG: false, // true | false. Display console log for each country update.
  // ===API URL=== //
  POP1_API_URL: 'https://worldpopulationreview.com',
  POP2_API_URL: 'https://en.wikipedia.org/w/api.php?origin=*&format=json&action=parse&page=List_of_countries_and_dependencies_by_population&prop=text&formatversion=2',
  CAC_API_URL: 'https://corona-api.com/countries',
  CLN_API_URL: 'https://corona.lmao.ninja/v2/countries?sort=country',
  COA_API_URL: 'https://api.covid19api.com/summary',
  CVA_API_URL: 'https://coronavirus-19-api.herokuapp.com/countries',
  CVS_API_URL: 'https://corona-virus-stats.herokuapp.com/api/v1/cases/countries-search?limit=300',
  GOO_API_URL: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQuDj0R6K85sdtI8I-Tc7RCx8CnIxKUQue0TCUdrFOKDw9G3JRtGhl64laDd3apApEvIJTdPFJ9fEUL/pubhtml?gid=0&single=true',
  WIK_API_URL: 'https://en.wikipedia.org/w/api.php?origin=*&format=json&action=parse&page=Template:COVID-19_pandemic_data&prop=text&formatversion=2',
  WOD_API_URL: 'https://docs.google.com/spreadsheets/d/1VqOo7mE8O9HTPAgzUOCoevgmAtQZuS_458GEhWX5UwA/edit#gid=449840684',
  // ===OTHER URL=== //
  GOOGLE_MAPS_BASE_URL: 'https://www.google.com/maps/place/',
  WIKIPEDIA_BASE_URL: 'https://en.wikipedia.org/wiki/',
  // ===TIME=== //
  // Number. Milliseconds. The delay time between fetching different sources data in live mode.
  LIVE_DELAY_BETWEEN_SOURCES_FETCH: 30000,
  // Number. Milliseconds. The delay time between fetches different sources data in local mode.
  LOCAL_DELAY_BETWEEN_SOURCES_FETCH: 5000,
  FETCH_DATA_TIMEOUT: 30000, // Number. Milliseconds. The timeout to fetch data via axios.
  // ===COUNTER=== //
  // Number. The number of updates to reach until it tries to fetch data from an error source.
  TRY_RECOVER_SOURCES_UPDATES_COUNT: 150,
  // Number. The maximum number of statistics updates on the list to display.
  MAXIMUM_STATISTICS_ITEMS: 1000,
  // ===LOCAL=== //
  // Number. Determine the percentage of true/false chances to simulate the process of updating
  // covid data. Example: 0.8 - true 80%/false 20%.
  SIMULATE_LOCAL_UPDATE_PERCENTAGE: 0.9,
  // Number. Determine the maximum number of countries to update per round.
  SIMULATE_LOCAL_MAXIMUM_COUNTRIES_PER_ROUND: 5,
  // Number. Determine the maximum number of each value to be random.
  // Example: 323 cases, 12 deaths, 899 recovers.
  SIMULATE_LOCAL_MAXIMUM_NUMBER_PER_VALUE: 1000,
  // Number. Determine the number of milliseconds to simulate ajax call to the source to
  // fetch the data.
  SIMULATE_LOCAL_MILLISECONDS_DELAY_PER_ROUND: 1000,
};

export default settings;
