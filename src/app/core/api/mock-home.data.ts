import { HomeScheduleResponse } from '../../pages/home/home.models';

export const MOCK_HOME_SCHEDULE: HomeScheduleResponse = {
  activeFlight: {
    id: 'KL1233',
    route: 'AMS to LHR',
    flightNumber: 'KL1233',
    aircraft: '737-900',
    departureTime: '10:45',
    arrivalTime: '12:50',
  },
  activeDetails: {
    hotelName: 'Sheraton Hotel London',
    weatherSummary: 'H:8° - L:15°',
  },
  upcomingSections: [
    {
      flights: [
        {
          id: 'KL1234',
          route: 'DUB to AMS',
          flightNumber: 'KL1234',
          aircraft: '737-900',
          departureTime: '14:45',
          arrivalTime: '16:55',
        },
      ],
    },
    {
      dateLabel: 'Sunday, 17 Sep',
      flights: [
        {
          id: 'KL1235',
          route: 'AMS to LCY',
          flightNumber: 'KL1235',
          aircraft: '737-700',
          departureTime: '14:45',
          arrivalTime: '16:55',
        },
      ],
    },
    {
      dateLabel: 'Sunday, 18 Sep',
      flights: [
        {
          id: 'KL1235',
          route: 'AMS to LHR',
          flightNumber: 'KL1236',
          aircraft: '737-700',
          departureTime: '14:45',
          arrivalTime: '16:55',
        },
      ],
    },
  ],
};
