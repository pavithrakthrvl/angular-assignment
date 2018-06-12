import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Restroant } from './restro';
import { RESTAURANT } from './mock-restaurants';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private messageService: MessageService) { }

  getRestaurants(): Observable<Restroant[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('RestaurantService: fetched restaurants');
    return of(RESTAURANT);
  }
  getRestaurant(id: number): Observable<Restroant> {
    this.messageService.add('RestaurantService: fetched Restroant id=${id}');
    return of(RESTAURANT.find(Restroant => Restroant.id === id));
  }
}
