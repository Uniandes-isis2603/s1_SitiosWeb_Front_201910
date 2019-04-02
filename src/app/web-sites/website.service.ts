import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Website } from './website';
import { Observable } from 'rxjs';
import { AppConstants } from '../appConstants'

const API_URL = AppConstants.baseURL;
const websites = 'websites';

@Injectable({
  providedIn: 'root'
})
export class WebsiteService {

  constructor(private http: HttpClient) {
  }

  getSites() : Observable<Website[]> {
    return this.http.get<Website[]>(API_URL + websites);
  }
}
