import { Component, OnInit } from '@angular/core';
import { Restroant } from '../restro';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  restaurants: Restroant[] = [];
  constructor(private heroService: RestaurantService) { }
 
  ngOnInit() {
    this.getRestaurants();
  }
 
  getRestaurants(): void {
    this.heroService.getRestaurants()
      .subscribe(restaurants => this.restaurants = restaurants.slice(0,4));
  }

}
