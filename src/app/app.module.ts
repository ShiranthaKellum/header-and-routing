import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddPatientComponent } from './components/add-patient/add-patient.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { GetAllPatientsComponent } from './components/get-all-patients/get-all-patients.component';
import { PatientProfileComponent } from './components/patient-profile/patient-profile.component';
import { EditPatientComponent } from './components/edit-patient/edit-patient.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AssignRoleComponent } from './components/assign-role/assign-role.component';

@NgModule({
  declarations: [
    AppComponent,
    AddPatientComponent,
    RegisterComponent,
    LoginComponent,
    LogoutComponent,
    GetAllPatientsComponent,
    PatientProfileComponent,
    EditPatientComponent,
    AdminDashboardComponent,
    AssignRoleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
