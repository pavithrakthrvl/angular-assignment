import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Restroant } from '../restro';


import { RestaurantService }  from '../restaurant.service';

@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.css']
})
export class RestaurantDetailComponent implements OnInit {
  @Input() restro: Restroant;

  constructor(private route: ActivatedRoute,
    private restaurantService: RestaurantService,
    private location: Location) { }

  ngOnInit() {
    this.getRestaurant();
  }

  getRestaurant(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.restaurantService.getRestaurant(id)
      .subscribe(restro => this.restro = restro);
  }

  goBack(): void {
    this.location.back();
  }
  

}
