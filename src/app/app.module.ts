import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserLogComponent } from './user-log/user-log.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { UserService } from './user.service';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './user/user.component';
import { SingleUserComponent } from './single-user/single-user.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ReportComponent } from './report/report.component';
import { DeviceComponent } from './device/device.component';
import { GlobalService } from './global.service';

@NgModule({
  declarations: [
    AppComponent,
    UserLogComponent,
    SidebarComponent,
    NavbarComponent,
    FooterComponent,
    UserComponent,
    SingleUserComponent,
    ReportComponent,
    DeviceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BsDatepickerModule.forRoot(),
    FormsModule
  ],
  providers: [UserService, GlobalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
