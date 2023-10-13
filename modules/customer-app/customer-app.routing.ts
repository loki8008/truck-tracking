import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'src/app/shared/components/login/login.component';
import { RegistrationComponent } from 'src/app/shared/components/registration/registration.component';
import { AddComponent } from './add/add.component';
import { CustomerAppComponent } from './customer-app.component';
import { EditComponent } from './edit/edit.component';
import { FreightComponent } from './freight/freight.component';
import { PlanComponent } from './plan/plan.component';
import { TransportComponent } from './transport/transport.component';
import { SenttransportComponent } from './senttransport/senttransport.component';
import { AllocateComponent } from './allocate/allocate.component';
import { PendingComponent } from './pending/pending.component';
import { ForgotpassComponent } from 'src/app/shared/components/forgotpass/forgotpass.component';
import { AuthGuard } from 'src/app/shared/services/guards/auth-guard.service';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path:'', component: HomeComponent},
  { path: 'register', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forgotpass', component: ForgotpassComponent },
  { path: 'customer-app', component: CustomerAppComponent,children:[
    { path: 'plan', component: PlanComponent },
    { path: 'add', component: AddComponent },
    { path: 'edit', component: EditComponent },
    { path: 'transport', component:TransportComponent },
    { path: 'senttransport', component:SenttransportComponent },
    { path: 'allocate', component: AllocateComponent },
    { path: 'freight', component: FreightComponent },
    { path: 'pending', component: PendingComponent },
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerAppRoutingModule {}
