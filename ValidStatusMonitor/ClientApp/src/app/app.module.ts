import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PlotlyModule } from 'angular-plotly.js';
import { MessageService } from 'primeng/api';
import { InplaceModule } from 'primeng/inplace';
import { DropdownModule } from 'primeng/dropdown';
import { ToastModule } from 'primeng/toast';
import { InputSwitchModule } from 'primeng/inputswitch';
import { DialogModule } from 'primeng/dialog';

import { AppComponent } from './app.component';
import { StatusMonitorService } from './services/statusmonitor.service';
import { ShowStatusesComponent } from './installationstatuses/showstatuses.component';
//import { CustomerAssetsComponent } from './customerassets/customerassets.component';
import { CcrCardComponent } from './ccr-card/ccr-card.component';
import { HeaderComponent } from './header/header.component';
import { MsgboardComponent } from './msgboard/msgboard.component';
import { InstallationDetailsPageComponent } from './installation-details-page/installation-details-page.component';
import { TestPlotComponent } from './test-plot/test-plot.component';
import { AddInstallationPanelComponent } from './add-installation-panel/add-installation-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowStatusesComponent,
    CcrCardComponent,
    HeaderComponent,
    MsgboardComponent,
    InstallationDetailsPageComponent,
    TestPlotComponent,
    AddInstallationPanelComponent

  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    PlotlyModule,
    InplaceModule,
    DropdownModule,
    ToastModule,
    InputSwitchModule,
    DialogModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'show-statuses', pathMatch: 'full' },
      //{ path: 'home', component: HomeComponent },
      { path: 'show-statuses', component: ShowStatusesComponent },
      { path: 'update-statuses', component: ShowStatusesComponent },
      { path: 'installation-details/:cust/:statusid', component: InstallationDetailsPageComponent },
      //{ path: 'customer-assets', component: CustomerAssetsComponent },
      { path: '**', redirectTo: 'show-statuses' }
    ])
  ],
  
  providers: [StatusMonitorService, MessageService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
