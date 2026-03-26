import { HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { delay, of } from 'rxjs';
import { MOCK_HOME_SCHEDULE } from './mock-home.data';

export const mockApiInterceptor: HttpInterceptorFn = (req, next) => {
  if (req.method === 'GET' && req.url.endsWith('/api/home-schedule')) {
    return of(
      new HttpResponse({
        status: 200,
        body: MOCK_HOME_SCHEDULE,
      }),
    ).pipe(delay(300));
  }

  return next(req);
};
