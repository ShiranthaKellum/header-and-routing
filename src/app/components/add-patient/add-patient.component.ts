import { Component } from '@angular/core';
import { PatientService } from '../../services/patient.service';
import { Patient } from '../../model/patient';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css'],
})
export class AddPatientComponent {
  constructor(private patientService: PatientService) {}
  submitted: boolean = false;
  patient: Patient = {
    name: '',
    age: '',
    gender: '',
    country: '',
    height: '',
    weight: '',
    heartRate: '',
    bloodPressure: '',
    sugar: '',
    allergies: '',
    symptoms: '',
    diseases: '',
    treatments: '',
    medicines: '',
    history: '',
    observations: '',
  };
  addPatient(): void {
    const data = {
      name: this.patient.name,
      age: this.patient.age,
      gender: this.patient.gender,
      country: this.patient.country,
      height: this.patient.height,
      weight: this.patient.weight,
      heartRate: this.patient.heartRate,
      bloodPressure: this.patient.bloodPressure,
      sugar: this.patient.sugar,
      allergies: this.patient.allergies,
      symptoms: this.patient.symptoms,
      diseases: this.patient.diseases,
      treatments: this.patient.treatments,
      medicines: this.patient.medicines,
      history: this.patient.history,
      observations: this.patient.observations
    }
    this.patientService.create(data).subscribe({
      next: res => {
        console.log("Submission responce: ", res);
        this.submitted = true;
      },
      error: e => console.log("Submission error: ", e)
    })
  }
}
