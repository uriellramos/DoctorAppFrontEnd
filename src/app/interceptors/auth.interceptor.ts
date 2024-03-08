import { Injectable } from '@angular/core';
import { HttpInterceptorFn, HttpRequest,HttpHandler,HttpEvent,HttpInterceptor } from '@angular/common/http';
import { Observable} from 'rxjs'
import { CookieService } from 'ngx-cookie-service';
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private cookieServe:CookieService) {}
  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const authRequest = req.clone({
      setHeaders:{
        'Authorization': this.cookieServe.get('Authorization')
      }
    });
    return next.handle(authRequest);
  }

}
