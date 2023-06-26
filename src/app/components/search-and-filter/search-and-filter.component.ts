import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { Category } from 'src/app/interfaces/category';
import { StoreService } from 'src/app/services/store-api/store.service';

@Component({
  selector: 'app-search-and-filter',
  templateUrl: './search-and-filter.component.html',
  styleUrls: ['./search-and-filter.component.css']
})
export class SearchAndFilterComponent implements OnInit{

  //icons 
  search = faSearch;

  //objects
  categories: any[] = [];
  subscription!: Subscription;

  constructor(private _storeService: StoreService, router: Router){}

  ngOnInit(){
    this.subscription = this._storeService
    .getAllCategories()
    .subscribe((data:any[]) => {
      this.categories = data;
      console.log(this.categories)
    });
  }
}
