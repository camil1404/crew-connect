import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HomeScheduleResponse } from './home.models';

@Injectable({
  providedIn: 'root',
})
export class HomeApiService {
  private readonly http = inject(HttpClient);

  getHomeSchedule(): Observable<HomeScheduleResponse> {
    return this.http.get<HomeScheduleResponse>('/api/home-schedule');
  }
}
