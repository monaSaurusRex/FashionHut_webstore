import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

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
  getSearchQuery() {
    return this.searchQuery$.value;
  }
}
