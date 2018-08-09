import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product} from '../models/product';
import {Observable} from 'rxjs';
import {catchError, map} from 'rxjs/internal/operators';
import {BaseService} from '../http/base.service';
import {ArrayResponse} from '../http/interfaces/array-response';
import {Response} from '../http/interfaces/response';
import {MatSnackBar} from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class ProductService extends BaseService {

  constructor(private http: HttpClient,
              public snackBarService: MatSnackBar) {
    super(snackBarService);
  }

  listProducts(): Observable<ArrayResponse<Product>> {
    return this.http.get<ArrayResponse<Product>>(`${this.apiUrl}/paginated/items?format=json&category=3944_96469&brand=Apple&apiKey=${this.apiKey}`).pipe(
      map((data: ArrayResponse<Product>) => data),
      catchError(this.handleError<ArrayResponse<Product>>('listAllProducts'))
    );
  }

  search(term: String): Observable<ArrayResponse<Product>> {
    return this.http.get<ArrayResponse<Product>>(`${this.apiUrl}/search?query=${term}&format=json&apiKey=${this.apiKey}`).pipe(
      map((data: ArrayResponse<Product>) => data),
      catchError(this.handleError<ArrayResponse<Product>>('searchProducts'))
    );
  }

  get(id: Number): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/items/${id}?format=json&apiKey=${this.apiKey}`).pipe(
      map((data: Product) => data),
      catchError(this.handleError<Product>('getProduct'))
    );
  }
}
