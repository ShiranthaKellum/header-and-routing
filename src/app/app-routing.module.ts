import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {path: '', component: AddPatientComponent},
  {path: 'addPatient', component: AddPatientComponent},
  {path: 'signup', component: RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
