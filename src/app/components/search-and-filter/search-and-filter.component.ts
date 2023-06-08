import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { Category } from 'src/app/interfaces/category';
import { FakestoreService } from 'src/app/services/fakestoreapi/fakestore.service';

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

  constructor(private _fakeStoreService: FakestoreService, router: Router){}

  ngOnInit(){
    this.subscription = this._fakeStoreService
    .getAllCategories()
    .subscribe((data:any[]) => {
      this.categories = data;
      console.log(this.categories)
    });
  }
}
