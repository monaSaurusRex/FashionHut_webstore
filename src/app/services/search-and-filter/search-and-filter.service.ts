import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchAndFilterService {
  searchQuery$ = new BehaviorSubject<string>('');

  constructor() {}

  // sets the new search query value
  setSearchQuery(searchValue: string) {
    this.searchQuery$.next(searchValue);
  }

  // gets the value of the search query
  getSearchQuery(): Observable<string> {
    return this.searchQuery$;
  }

  getSearchValue(): string {
    const searchQuery = this.searchQuery$.value;
    return searchQuery;
  }

  getFilteredProducts(searchQuery: string){

// filter based on filter by category

// filter based on search query

  }


}
