import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthenticationService } from '../dataservice/authentication.service';
import { map, take } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
        : Observable<boolean> {
        return this.authenticationService.currentUserValue.pipe
            (take(1),
                map((currentUser: boolean) => {
                    if (!currentUser) {
                        this.router.navigate(['/login']);
                        return false;
                    }
                    return true;
                })
            );
        // if (currentUser) {
        //     // authorised so return true
        //     return true;
        // }

        // // not logged in so redirect to login page with the return url
        // this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        // return false;
    }
}