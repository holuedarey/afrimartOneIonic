import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../authentication/authentication.service';


@Injectable()
export class BasicAuthInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with basic auth credentials if available
        const currentUser = this.authenticationService.currentUserValue();
        if (currentUser && currentUser.user) {
            request = request.clone({
                setHeaders: { 
                    Authorization: `Basic ${currentUser.token}`
                }
            });
        }
        request = request.clone({
            setHeaders: { 
                channel: `web`
            }
        });
        return next.handle(request);
    }
}