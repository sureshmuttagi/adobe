import { Injectable } from '@angular/core';
import { Resolve, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { QueryParamList } from '../models/twittersearch.model';

@Injectable()
export class SearchResolver implements Resolve<any> {
    constructor(
        private activeroute: ActivatedRoute,
        private router: Router
    ) { }

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<any> | Promise<any> | any {
        if (this.activeroute.snapshot.queryParamMap.get('key') === null) {
            return this.router.navigate([], {
                relativeTo: this.activeroute,
                queryParams:
                {
                    'key': 'adobe'
                },
            });
        }

    }
}