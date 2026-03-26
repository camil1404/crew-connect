import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Flight } from '../../pages/home/home.models';

@Component({
  selector: 'app-flight-card',
  imports: [RouterLink],
  templateUrl: './flight-card.html',
  styleUrl: './flight-card.scss',
})
export class FlightCard {
  readonly flight = input.required<Flight>();
}
