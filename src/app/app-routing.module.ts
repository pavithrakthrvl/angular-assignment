import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { RestaurantDetailComponent }  from './restaurant-detail/restaurant-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: RestaurantDetailComponent },
  { path: 'restaurants', component: RestaurantsComponent }  
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
