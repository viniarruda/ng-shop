import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';
import {Subject} from 'rxjs';
import {debounceTime, distinctUntilChanged} from 'rxjs/internal/operators';

@Component({
  selector: 'app-product-search',
  template: `
    <mat-form-field>
      <input #searchField matInput
             placeholder="Search Product"
             (input)="doSearch()"
             (keyup)="doSearch()"
             (click)="doSearch()"
             (blur)="doBlur()">
      <mat-icon matSuffix>search</mat-icon>
    </mat-form-field>
  `,
  styles: [
    'mat-form-field {width: 100%;}'
  ]
})
export class ProductSearchComponent {

  private searchDebounce = 300;
  private searchSubject = new Subject<string>();

  @ViewChild('searchField') searchField: ElementRef;
  @Output() search = this.searchSubject.pipe(distinctUntilChanged(), debounceTime(this.searchDebounce));

  constructor() {
  }

  doSearch() {
    this.searchSubject.next(this.query);
  }

  doBlur() {
    this.searchField.nativeElement.value = '';
  }

  private get query() {
    return this.searchField.nativeElement.value;
  }
}
