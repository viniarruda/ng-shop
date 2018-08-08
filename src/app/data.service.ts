import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get('http://api.walmartlabs.com/v1/paginated/items?format=json&category=5438&brand=Wrangler&apiKey=8x83x2azqeaqvq7pzaqmvgg5');
  }
}

