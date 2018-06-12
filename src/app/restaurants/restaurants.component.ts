import { Component, OnInit } from '@angular/core';
import { Restroant } from '../restro';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {
 
  restaurants: Restroant[];
  
  constructor(private restaurantService: RestaurantService) { }
  
  ngOnInit() {
    this.getRestaurants();
  }

  getRestaurants(): void {
    this.restaurantService.getRestaurants()
        .subscribe(restaurants => this.restaurants = restaurants);
  }

}
