import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/delay';

@Injectable()
export class MyDataService {
  obj = {
    id: 1,
    prenom: 'marsall',
    nom : 'tuto'
  }

  private baseUrl: string = 'https://newsapi.org/v1/';
  private source: string = 'the-next-web';
  private apiKey: string = 'bf2f78e0f0d04871a82655393de6845d';
  constructor(private http: Http) { }

  getData() {
    const url = `${this.baseUrl}articles?source=${this.source}&sortBy=latest&apiKey=${this.apiKey}`;
    /*
    return this.http.get(url)
      .map((response) => response.json())
      .subscribe(
        (data) => console.log(data),
        (error) => console.log(error)
      )
      */

    return this.http.get(url)
      .map((res) => res.json())
      .subscribe(
        (data) => console.log(data),
        (error) => console.log(error)
      )
  }

   sucess() {
     return 'Service Test OK';
   }
}
