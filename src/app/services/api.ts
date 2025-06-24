import { Injectable, Inject, inject } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class Api {

  constructor() { }
  private httpClient = inject(HttpClient)
  private apiUrl = 'https://api.chucknorris.io/jokes/random';

  getApiList(){
    return this.httpClient.get(this.apiUrl);
  }
}
