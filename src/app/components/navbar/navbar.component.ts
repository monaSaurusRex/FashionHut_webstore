import { Component, OnInit } from '@angular/core';

import { faShoppingCart, faBars, faTimes, faUserAlt, faSearch} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

    cart = faShoppingCart;
    bars = faBars;
    close = faTimes;
    user = faUserAlt;
    search = faSearch;

    constructor(){}

    ngOnInit() {}

}
