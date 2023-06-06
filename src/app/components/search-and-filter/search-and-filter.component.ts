import { Component, OnInit } from '@angular/core';

import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search-and-filter',
  templateUrl: './search-and-filter.component.html',
  styleUrls: ['./search-and-filter.component.css']
})
export class SearchAndFilterComponent implements OnInit{

  search = faSearch;

  constructor(){}

  ngOnInit(){
      
  }
}
