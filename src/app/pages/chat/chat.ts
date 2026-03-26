import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chat',
  imports: [],
  templateUrl: './chat.html',
  styleUrl: './chat.scss',
})
export class Chat {
  private readonly route = inject(ActivatedRoute);
  readonly flightNumber = this.route.snapshot.paramMap.get('flightNumber') ?? '';
}
