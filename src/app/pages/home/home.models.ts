export interface Flight {
  id: string;
  route: string;
  flightNumber: string;
  aircraft: string;
  departureTime: string;
  arrivalTime: string;
}

export interface ActiveDetails {
  hotelName: string;
  weatherSummary: string;
}

export interface UpcomingSection {
  dateLabel?: string;
  flights: Flight[];
}

export interface HomeScheduleResponse {
  activeFlight: Flight;
  activeDetails: ActiveDetails;
  upcomingSections: UpcomingSection[];
}
