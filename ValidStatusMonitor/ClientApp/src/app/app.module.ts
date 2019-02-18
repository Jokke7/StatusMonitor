import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionModule } from 'primeng/primeng';
import { TooltipModule } from 'primeng/tooltip';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StatusMonitorService } from './services/statusmonitor.service';
import { ShowStatusesComponent } from './installationstatuses/showstatuses.component';
import { CustomerAssetsComponent } from './customerassets/customerassets.component';
import { CcrCardComponent } from './ccr-card/ccr-card.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShowStatusesComponent,
    CustomerAssetsComponent,
    CcrCardComponent,
    HeaderComponent

  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    AccordionModule,
    TooltipModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'show-statuses', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'show-statuses', component: ShowStatusesComponent },
      { path: 'update-statuses', component: ShowStatusesComponent },
      //{ path: 'customer-assets', component: CustomerAssetsComponent },
      { path: '**', redirectTo: 'home' }
    ])
  ],
  providers: [ StatusMonitorService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
