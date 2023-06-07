import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productFilter',
})
export class FilterPipe implements PipeTransform {
  transform(products: any[], searchText: string): any[] {
    if (!products) {
      return [];
    }
    if (!searchText) {
      return products;
    }

    searchText = searchText.toLocaleLowerCase();

    return products.filter((result) => {
      return result.toLocaleLowerCase().includes(searchText);
    });
  }
}
