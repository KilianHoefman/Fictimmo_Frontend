import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Huis } from './huis.model';
import { Observable } from 'rxjs';
import { HuisDataService } from './huis-data.service';

@Injectable({
    providedIn: 'root'
})
export class HuisResolver implements Resolve<Huis>{
    constructor(private huisDataService: HuisDataService){}

    resolve(route: ActivatedRouteSnapshot, 
            state: RouterStateSnapshot): Observable<Huis> {
        return this.huisDataService.getHuis$(route.params['id']);
    }

}