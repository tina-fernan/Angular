import { Injectable } from '@angular/core';
import { Purchases, Branch ,Basket} from './types';
 './types';

@Injectable({
  providedIn: 'root'
})
export class MapperService {

  constructor() { }

  mapToBranches(purchases: Purchases): Branch[] {
    const branchNames = Object.keys(purchases);
    return branchNames.map(branchName => {
      const branch: Branch = { name: branchName, baskets: [] };
      const basketNames = Object.keys(purchases[branchName]);
      const baskets: Basket[] = basketNames.map(basketName => {
        return { name: basketName, basketItems: Object.values(purchases[branchName][basketName]) };
      });
      branch.baskets = baskets;
      return branch;
    });
  }
}
