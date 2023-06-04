import { Component, OnInit } from '@angular/core';

import { faShoppingCart, faCartPlus, faTrash, faPlus, faMinus, faStar, faBars, faTimes, faArrowLeft, faSearch} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'FashionHut';

    cart = faShoppingCart;
    addToCart = faCartPlus;
    remove = faTrash;
    increase = faPlus;
    decrease = faMinus;
    starRating = faStar;
    bars = faBars;
    close = faTimes;
    back = faArrowLeft;
    search = faSearch;
    
    constructor(){}
    ngOnInit() {}
}
