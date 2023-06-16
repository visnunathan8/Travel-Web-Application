import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AdminComponent } from './admin/admin.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { routes } from './app-routing.module';
import { AuthGuard } from './auth.guard';
import { HeaderdeptComponent } from './headerdept/headerdept.component';
import { AdminheaderComponent } from './adminheader/adminheader.component';
import { SplitpipePipe } from './splitpipe.pipe';
import { SignupComponent } from './signup/signup.component';
import { CustomerComponent } from './customer/customer.component';
import { TravelagentComponent } from './travelagent/travelagent.component';
import { FlightsComponent } from './flights/flights.component';
import { HotelComponent } from './hotels/hotels.component';
import { ActivitiesComponent } from './activities/activities.component';
import { TravelagentDashboardComponent } from './travelagent-dashboard/travelagent-dashboard.component';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { CustomerHeaderComponent } from './customer-header/customer-header.component';
import { BookingPackageComponent } from './booking-package/booking-package.component';
import { CustomPackageComponent } from './custom-package/custom-package.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    LogoutComponent,
    AdminComponent,
    HeaderdeptComponent,
    AdminheaderComponent,
    SplitpipePipe,
    SignupComponent,
    CustomerComponent,
    TravelagentComponent,
    FlightsComponent,
    HotelComponent,
    ActivitiesComponent,
    TravelagentDashboardComponent,
    CustomerDashboardComponent,
    CustomerHeaderComponent,
    BookingPackageComponent,
    CustomPackageComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
