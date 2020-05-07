import { Injectable } from "@angular/core";
import { AuthenticationService } from 'src/app/user/authentication.service';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor{
    constructor(private authService: AuthenticationService){}
    
    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
      ): Observable<HttpEvent<any>> {
        if (this.authService.token.length) {
          const clonedRequest = req.clone({
            headers: req.headers.set(
              'Authorization',
              `Bearer ${this.authService.token}`
            ),
          });
          return next.handle(clonedRequest);
        }
        return next.handle(req);
      }
}