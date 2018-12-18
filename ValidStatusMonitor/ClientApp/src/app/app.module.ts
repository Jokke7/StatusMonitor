import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { StatusMonitorService } from './services/statusmonitor.service';
import { ShowStatusesComponent } from './installationstatuses/showstatuses.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    ShowStatusesComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'show-statuses', component: ShowStatusesComponent },
      { path: 'update-statuses', component: ShowStatusesComponent },
      { path: '**', redirectTo: 'home' }
    ])
  ],
  providers: [ StatusMonitorService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
