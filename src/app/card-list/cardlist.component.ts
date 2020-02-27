import { Component } from '@angular/core';
import {DataService} from '../dataservice/dataservice';
import { environment} from '../../environments/environment'
@Component({
  selector: 'card-list',
  templateUrl: './cardlist.component.html',
  styleUrls: [ './cardlist.component.css' ]
})
export class CardListComponent  {
  private url: string = environment.baseUrl;
  numberOfProfiles: number = 0;
  cardList = '';
  constructor(private _dataService: DataService) {
    
  }

  getProfiles() {
      this._dataService.getData(this.url+this.numberOfProfiles).subscribe((response: any) => {
        this.cardList = response.results;
      }, (error) => {})
  }
 
}
