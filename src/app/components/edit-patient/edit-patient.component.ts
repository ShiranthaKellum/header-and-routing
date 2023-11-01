import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Patient } from 'src/app/model/patient';
import { PatientService } from 'src/app/services/patientService/patient.service';

@Component({
  selector: 'app-edit-patient',
  templateUrl: './edit-patient.component.html',
  styleUrls: ['./edit-patient.component.css']
})
export class EditPatientComponent implements OnInit {
  id: string = '';
  patientData: any;

  constructor(
    private patientService: PatientService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe(
      () => {
        this.patientData = history.state.patientData;

        this.patient.name = this.patientData.name;     
        this.patient.age = this.patientData.age;     
        this.patient.gender = this.patientData.gender;     
        this.patient.country = this.patientData.country;     
        this.patient.height = this.patientData.height;     
        this.patient.weight = this.patientData.weight;     
        this.patient.heartRate = this.patientData.heartRate;     
        this.patient.bloodPressure = this.patientData.bloodPressure;     
        this.patient.sugarLevel = this.patientData.sugarLevel;     
        this.patient.allergies = this.patientData.allergies;     
        this.patient.symptoms = this.patientData.symptoms;     
        this.patient.diseases = this.patientData.diseases;     
        this.patient.treatments = this.patientData.treatments;     
        this.patient.medicines = this.patientData.medicines;     
        this.patient.history = this.patientData.history;     
        this.patient.observations = this.patientData.observations;     
      }
    );
  }

  updated: boolean = false;
  patient: Patient = {
    name: '',
    age: '',
    gender: '',
    country: '',
    height: '',
    weight: '',
    heartRate: '',
    bloodPressure: '',
    sugarLevel: '',
    allergies: '',
    symptoms: '',
    diseases: '',
    treatments: '',
    medicines: '',
    history: '',
    observations: '',
  };

  updatePatient(): void {
    const data = {
      name: this.patient.name,
      age: this.patient.age,
      gender: this.patient.gender,
      country: this.patient.country,
      height: this.patient.height,
      weight: this.patient.weight,
      heartRate: this.patient.heartRate,
      bloodPressure: this.patient.bloodPressure,
      sugarLevel: this.patient.sugarLevel,
      allergies: this.patient.allergies,
      symptoms: this.patient.symptoms,
      diseases: this.patient.diseases,
      treatments: this.patient.treatments,
      medicines: this.patient.medicines,
      history: this.patient.history,
      observations: this.patient.observations
    };
    this.patientService.updatePatient(this.patientData.id, data).subscribe({
      next: res => {
        console.log("Submission responce: ", res);
        this.updated = true;
      },
      error: e => console.log("Submission error: ", e)
    });
  }
}
