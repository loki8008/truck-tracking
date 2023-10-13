import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerAppComponent } from './customer-app.component';
import { CustomerAppRoutingModule } from './customer-app.routing';


import { TransportComponent } from './transport/transport.component';
import { FreightComponent } from './freight/freight.component';
import { PlanComponent } from './plan/plan.component';
import { PendingComponent } from './pending/pending.component';
import { SenttransportComponent } from './senttransport/senttransport.component';
import { AllocateComponent } from './allocate/allocate.component';
import { LiveComponent } from './live/live.component';
import { DocumentComponent } from './document/document.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import {RegistrationComponent} from 'src/app/shared/components/registration/registration.component';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoginComponent } from 'src/app/shared/components/login/login.component';
import { ForgotpassComponent } from 'src/app/shared/components/forgotpass/forgotpass.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  imports: [CommonModule, CustomerAppRoutingModule,SharedModule],

  declarations: [
    CustomerAppComponent, TransportComponent, FreightComponent, PlanComponent, PendingComponent, SenttransportComponent, AllocateComponent, LiveComponent, DocumentComponent, AddComponent, EditComponent, DialogBoxComponent,
    RegistrationComponent,LoginComponent, ForgotpassComponent, HomeComponent
  ],

})
export class CustomerAppModule {}
