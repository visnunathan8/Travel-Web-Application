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
import { ListAllBookingPackageComponent } from './list-all-booking-package/list-all-booking-package.component';
import { MainAdminHeaderComponent } from './main-admin-header/main-admin-header.component';
import { TravelAgentAdminViewComponent } from './travel-agent-admin-view/travel-agent-admin-view.component';
import { ReportsComponent } from './reports/reports.component';
import { BookingReportComponent } from './booking-report/booking-report.component';


export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'customer', component: CustomerDashboardComponent},
    { path: 'travelagent', component: TravelagentComponent},
    { path: 'listall', component:ListAllBookingPackageComponent},
    {
      path: 'travelAgentAdminView',
      component: TravelAgentAdminViewComponent
    },
    {
      path: 'bookingreport',
      component: BookingReportComponent
    },
    {
      path: 'login',
      component: LoginComponent,
    },
    {
     path: 'reports',
     component: ReportsComponent,
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
