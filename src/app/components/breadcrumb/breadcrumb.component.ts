import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

interface Breadcrumb {
  label: string;
  url: string;
}

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {
  breadcrumbs: Breadcrumb[] = [];

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.breadcrumbs = this.generateBreadcrumbs(this.activatedRoute.snapshot.root);
      });
  }

  generateBreadcrumbs(route: ActivatedRouteSnapshot, url: string = '', breadcrumbs: Breadcrumb[] = []): Breadcrumb[] {
    const { children, data, url: routeUrl } = route;
    const newUrl = url + '/' + routeUrl.map(segment => segment.path).join('/');

    if (data && data['breadcrumb']) {
      breadcrumbs.push({
        label: data['breadcrumb'].label,
        url: newUrl
      });
    }

    if (children.length === 0) {
      return breadcrumbs;
    }

    return this.generateBreadcrumbs(children[0], newUrl, breadcrumbs);
  }
}
