import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse } from '@angular/common/http';
import { environment } from "../../../environments/environment";
import { AcquaintanceViewModel } from "../models/acquaintance-view-model";
import { Observable } from "rxjs/Observable";

@Injectable()
export class AcquaintanceService {
    constructor(private http: HttpClient) { }
    private acquaintanceEndpoint = environment.apiEndpoint + '/Acquaintance';

    getAcquaintance(): Observable<AcquaintanceViewModel> {
        return this.http.get<AcquaintanceViewModel>(this.acquaintanceEndpoint + '/GetAcquaintance');
    }

    getEnvironmentalVariable() {
        return this.http.get(environment.apiEndpoint + '/GetEnvironment', {responseType: 'text'});
    }
}