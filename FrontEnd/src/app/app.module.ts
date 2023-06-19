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
import { ListAllBookingPackageComponent } from './list-all-booking-package/list-all-booking-package.component';
import { MainAdminHeaderComponent } from './main-admin-header/main-admin-header.component';
import { TravelAgentAdminViewComponent } from './travel-agent-admin-view/travel-agent-admin-view.component';
import { NotificationComponent } from './notification/notification.component';
import { ReportsComponent } from './reports/reports.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle'
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { MatTabsModule } from '@angular/material/tabs';
import * as CanvasJSAngularChart from '../assets/canvasjs.angular.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { BookingReportComponent } from './booking-report/booking-report.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';


var CanvasJSChart = CanvasJSAngularChart.CanvasJSChart;

@NgModule({
  declarations: [
    CanvasJSChart,
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
    ListAllBookingPackageComponent,
    MainAdminHeaderComponent,
    TravelAgentAdminViewComponent,
    NotificationComponent,
    ReportsComponent,
    BookingReportComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    FormsModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    NgxChartsModule,
    MatTabsModule,
    MatButtonToggleModule,
    MatFormFieldModule,
    MatSelectModule,
    MatToolbarModule,
    CommonModule,
    MatInputModule,
    MatExpansionModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
