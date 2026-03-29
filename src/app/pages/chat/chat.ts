import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-chat',
  imports: [],
  templateUrl: './chat.html',
  styleUrl: './chat.scss',
})
export class Chat {
  private readonly route = inject(ActivatedRoute);
  private readonly location = inject(Location);
  readonly flightNumber = this.route.snapshot.paramMap.get('flightNumber') ?? '';

  goBack() {
    this.location.back();
  }
}
