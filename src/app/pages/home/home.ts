import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { FlightCard } from '../../components/flight-card/flight-card';
import { HomeApiService } from './home-api.service';

@Component({
  selector: 'app-home',
  imports: [AsyncPipe, FlightCard],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  private readonly homeApiService = inject(HomeApiService);

  readonly tabs = ['Schedule', 'Chats', 'Passengers'];
  readonly selectedTab = 'Schedule';
  readonly homeSchedule$ = this.homeApiService.getHomeSchedule();
}
