import { Component, OnInit } from '@angular/core';

import { Icon, IconProp } from '@fortawesome/fontawesome-svg-core';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faShoppingCart, faCartPlus, faTrash, faPlus, faMinus, faStar, faBars, faTimes, faArrowLeft, faSearch, faAngleDown} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'FashionHut';

    // solid icons
    cartIcon = faShoppingCart;
    addToCartIcon = faCartPlus;
    removeIcon = faTrash;
    increaseIcon = faPlus;
    decreaseIcon = faMinus;
    starRatingIcon = faStar;
    barsIcon = faBars;
    closeIcon = faTimes;
    backIcon = faArrowLeft;
    searchIcon = faSearch;
    dropdownIcon = faAngleDown
    //brand icons
    facebookIcon = faFacebookF as IconProp;
    instagramIcon = faInstagram as IconProp;
    twitterIcon = faTwitter as IconProp;


    
    constructor(){}
    ngOnInit() {}
}
