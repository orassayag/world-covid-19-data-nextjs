# Instructions

## Setup Instructions

1. Open the project in your IDE (VSCode recommended)
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure the application (see Configuration section below)
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Configuration

Open `src/settings/settings.js` and configure the following settings:

### System Configuration

1. **ENVIRONMENT_MODE**: Set the environment mode
   - `DEVELOPMENT`: Use local simulated data for testing
   - `PRODUCTION`: Fetch live data from APIs

2. **COMPONENT_MODE**: Choose what to display
   - `APP`: Main COVID-19 statistics dashboard (default)
   - `ICONS`: Display available icons for development
   - `IMAGES`: Display country flags for development
   - `TEST`: Run test component

### Development Settings

- **IS_COUNTRIES_LOG**: Enable/disable console logging for country updates
  - Set to `true` to see detailed logs
  - Set to `false` for production (default)

### API Configuration

The application fetches data from 8 different sources:
- **POP1_API_URL**: World Population Review
- **POP2_API_URL**: Wikipedia population data
- **CAC_API_URL**: Corona API
- **CLN_API_URL**: Corona Lmao Ninja
- **COA_API_URL**: COVID-19 API
- **CVA_API_URL**: Coronavirus-19 API
- **CVS_API_URL**: Corona Virus Stats
- **GOO_API_URL**: Google Sheets data
- **WIK_API_URL**: Wikipedia COVID-19 data
- **WOD_API_URL**: World Data Sheets

### Timing Configuration

1. **LIVE_DELAY_BETWEEN_SOURCES_FETCH**: Delay between fetches in production mode
   - Default: `30000` (30 seconds)
   - Adjust based on API rate limits

2. **LOCAL_DELAY_BETWEEN_SOURCES_FETCH**: Delay between fetches in development mode
   - Default: `5` seconds
   - Faster for testing

3. **FETCH_DATA_TIMEOUT**: Timeout for API requests
   - Default: `30000` (30 seconds)
   - Increase if APIs are slow

### Recovery & Performance

1. **TRY_RECOVER_SOURCES_UPDATES_COUNT**: Number of updates before retrying failed sources
   - Default: `150` updates
   - Failed sources are automatically retried

2. **MAXIMUM_STATISTICS_ITEMS**: Maximum statistics history items to display
   - Default: `1000` items
   - Prevents memory issues with long-running sessions

### Local Simulation Mode (Development Only)

Configure the simulation behavior when `ENVIRONMENT_MODE` is `DEVELOPMENT`:

1. **SIMULATE_LOCAL_UPDATE_PERCENTAGE**: Probability of country updates
   - Default: `1` (100% - all countries update)
   - Set to `0.8` for 80% update rate

2. **SIMULATE_LOCAL_MAXIMUM_COUNTRIES_PER_ROUND**: Maximum countries updated per round
   - Default: `20` countries

3. **SIMULATE_LOCAL_MAXIMUM_NUMBER_PER_VALUE**: Maximum random value for statistics
   - Default: `1000` (e.g., 323 cases, 12 deaths, 899 recoveries)

4. **SIMULATE_LOCAL_MILLISECONDS_DELAY_PER_ROUND**: Delay to simulate API calls
   - Default: `1000` milliseconds

## Running the Application

### Development Mode

```bash
npm run dev
```

This command:
- Starts the Next.js development server
- Automatically opens `http://localhost:3000` in your browser
- Enables hot-reload for instant updates

### Production Build

```bash
# Build the production bundle
npm run build

# Start the production server
npm start
```

### Linting

```bash
npm run lint
```

Checks for:
- ESLint errors and warnings
- Airbnb style guide violations
- Security issues
- Inline style violations

## Features & Usage

### Main Dashboard

The main dashboard displays:
- **Country Cards**: Show cases, deaths, recoveries for each country
- **Master Card**: Global statistics and controls
- **Color Coding**: Visual indicators for data freshness and updates

### Viewing Modes

Click the view mode button to toggle between:
- **Grid View**: Compact grid of country cards
- **List View**: Detailed list with more information

### Sorting Countries

Sort countries by:
- **Name**: Alphabetical order
- **Cases**: Total confirmed cases
- **Deaths**: Total deaths
- **Recoveries**: Total recoveries
- **Updates**: Most recently updated

### Filtering & Search

- **Search**: Type country name to filter results
- **Visibility Toggle**: Show/hide specific countries
- **Region Filter**: Filter by continent or region

### Statistics Modal

View detailed statistics:
- **Summary**: Aggregated data from all sources
- **Source Details**: Individual source data with timestamps
- **Update History**: Timeline of recent updates
- **Data Quality**: Indicators for data freshness and reliability

### Countries Modal

- Browse all available countries
- Toggle visibility for each country
- View country metadata (population, location)

### Credits Modal

View:
- Data source attributions
- API provider information
- Project credits and acknowledgments

## Troubleshooting

### API Connection Issues

If data doesn't load:
1. Check your internet connection
2. Verify API URLs in settings are accessible
3. Check browser console for CORS errors
4. Some APIs may be temporarily down - the app will retry automatically

### Performance Issues

If the app is slow:
1. Reduce `MAXIMUM_STATISTICS_ITEMS` in settings
2. Hide countries you don't need
3. Increase `LIVE_DELAY_BETWEEN_SOURCES_FETCH`
4. Clear browser cache and refresh

### Development Mode Not Working

If local simulation doesn't work:
1. Verify `ENVIRONMENT_MODE` is set to `DEVELOPMENT`
2. Check `COMPONENT_MODE` is set to `APP`
3. Review simulation settings
4. Check console for errors

## File Structure

```
world-covid-19-data-nextjs/
├── src/
│   ├── components/          # React components
│   │   ├── Boxes/          # Country and master boxes
│   │   ├── Common/         # Shared components
│   │   ├── Modals/         # Modal dialogs
│   │   └── UI/             # UI elements
│   ├── core/
│   │   ├── enums/          # Constants and enumerations
│   │   └── models/         # Data models
│   ├── data/               # Static data (countries, sources, etc.)
│   ├── pages/              # Next.js pages
│   ├── services/           # Business logic and API services
│   ├── settings/           # Configuration
│   ├── store/              # Redux store and slices
│   └── utils/              # Utility functions
├── public/                 # Static assets (icons, flags, etc.)
├── .next/                  # Next.js build output
└── node_modules/           # Dependencies
```

## Notes

- The application requires an internet connection in production mode
- Some COVID-19 APIs may become unavailable over time
- The app automatically handles API failures with fallback mechanisms
- Statistics history is stored in memory and resets on page refresh
- All timestamps are displayed in local timezone

## Author

* **Or Assayag** - *Initial work* - [orassayag](https://github.com/orassayag)
* Or Assayag <orassayag@gmail.com>
* GitHub: https://github.com/orassayag
* StackOverflow: https://stackoverflow.com/users/4442606/or-assayag?tab=profile
* LinkedIn: https://linkedin.com/in/orassayag
