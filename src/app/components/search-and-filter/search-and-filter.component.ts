import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Observable, Subscription } from 'rxjs';
import { SearchAndFilterService } from 'src/app/services/search-and-filter/search-and-filter.service';
import { StoreService } from 'src/app/services/store-api/store.service';

@Component({
  selector: 'app-search-and-filter',
  templateUrl: './search-and-filter.component.html',
  styleUrls: ['./search-and-filter.component.css']
})
export class SearchAndFilterComponent implements OnInit{

  //icons 
  searchIcon = faSearch;

  //objects
  categories: any[] = [];
  subscription!: Subscription;

  // search parameters
  // searchQuery$: new BehaviorSubject<string>('');
  
  constructor(private _storeService: StoreService, private router: Router, private _searchFilterService: SearchAndFilterService){}

  searchValue : any;

  searchQuery$ : Observable<string> | undefined;

  ngOnInit(){
    this._storeService.getAllCategories().subscribe((categories: any) => {
      // console.log(categories);
      this.categories = categories; //populate products array with data from api service
    });

    this.searchQuery$ = this._searchFilterService.getSearchQuery();

    // this._searchFilterService.getSearchQuery().subscribe((query: string) => {
    //   console.log(query);
    // });

    // this._searchFilterService.setSearchQuery(this.searchValue);

  }

  updateSearchValue(searchValue: string){
    // console.log(searchValue);
    this._searchFilterService.setSearchQuery(this.searchValue);
    this._searchFilterService.getSearchQuery().subscribe((query: string) => {
      console.log(query);
    });
  }
}
