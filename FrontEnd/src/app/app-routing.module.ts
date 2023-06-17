import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './auth.guard';
import { SignupComponent } from './signup/signup.component';
import { CustomerComponent } from './customer/customer.component';
import { TravelagentComponent } from './travelagent/travelagent.component';
import { FlightsComponent } from './flights/flights.component';
import { HotelComponent } from './hotels/hotels.component';
import { ActivitiesComponent } from './activities/activities.component';
import { TravelagentDashboardComponent } from './travelagent-dashboard/travelagent-dashboard.component';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { BookingPackageComponent } from './booking-package/booking-package.component';
import { CustomPackageComponent } from './custom-package/custom-package.component';

export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'customer', component: CustomerDashboardComponent},
    { path: 'travelagent', component: TravelagentComponent},
    {
      path: 'login',
      component: LoginComponent,
      canActivate:[AuthGuard]
   },
    {
      path: 'admin',
      component: AdminComponent
    },
    {
      path: 'flights',
      component: FlightsComponent
    },
    {
      path: 'hotels',
      component: HotelComponent
    },
    {
      path: 'activities',
      component: ActivitiesComponent
    },{
      path: 'travelagentdashboard',
      component: TravelagentDashboardComponent
    }, {
      path: 'customerdashboard',
      component: CustomerDashboardComponent
    }, {
      path: 'bookingPackage',
      component: BookingPackageComponent
    }, {
      path: 'customPackage',
      component: CustomPackageComponent
    }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
