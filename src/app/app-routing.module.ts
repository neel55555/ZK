import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserLogComponent} from './user-log/user-log.component';
import { UserComponent } from './user/user.component';
import { SingleUserComponent } from './single-user/single-user.component';
import { ReportComponent } from './report/report.component';
import { DeviceComponent } from './device/device.component';

const routes: Routes = [
  {path: 'user-log', component: UserLogComponent},
  {path: 'user', component: UserComponent},
  {path: 'user/:badgenumber', component: SingleUserComponent},
  {path: 'report', component: ReportComponent},
  {path: 'device', component: DeviceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
