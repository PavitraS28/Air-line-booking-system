import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { TDetailsComponent } from './t-details/t-details.component';
import { BookTicketComponent } from './book-ticket/book-ticket.component';


import { BookingListComponent } from './booking-list/booking-list.component';
import { UpdateBookingComponent } from './update-booking/update-booking.component';
import {Loginusercomponent} from './login/login-user.component';
import {HomeComponent} from './home/home.component';
import {HeaderComponent} from './header/header.component';
import {AdminHeaderComponent} from './adminheader/adminheader.component';
  import { from } from 'rxjs';

const routes: Routes = [
  { path: '', redirectTo: 'loginuser', pathMatch: 'full' },
  { path: 'loginuser', component:Loginusercomponent },
  { path: 'header/bookings', component: BookingListComponent },
  { path: 'header/add', component: BookTicketComponent },
  { path: 'update/:id', component: UpdateBookingComponent },
  { path: 'details/:id', component: TDetailsComponent },
  { path: 'header/about', component: HomeComponent },
  {path:'header', component:HeaderComponent},
  {path:'adminheader', component:AdminHeaderComponent},
  { path: 'adminheader/bookings', component: BookingListComponent },
  { path: 'adminheader/add', component: BookTicketComponent },
  { path: 'adminheader/about', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  
exports: [RouterModule]
})
export class AppRoutingModule { }
