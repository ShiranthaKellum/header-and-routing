import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { faPenToSquare,  } from '@fortawesome/free-regular-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-patient-profile',
  templateUrl: './patient-profile.component.html',
  styleUrls: ['./patient-profile.component.css']
})
export class PatientProfileComponent implements OnInit{
  // icons
  faPenToSquare = faPenToSquare;
  faArrowLeft = faArrowLeft;

  id: string = '';
  patientData: any;
  allergies: any[] = [];
  symptoms: any[] = [];
  diseases: any[] = [];
  treatments: any[] = [];
  medicines: any[] = [];
  history: any[] = [];
  observations: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}
    
  ngOnInit(): void {
    this.route.params.subscribe(
      params => {
        this.id = params["id"];
        this.patientData = history.state.patientData;
      }
    ); 

    this.allergies = this.getDataIntoAnArray(this.patientData.allergies);
    this.symptoms = this.getDataIntoAnArray(this.patientData.symptoms);
    this.diseases = this.getDataIntoAnArray(this.patientData.diseases);
    this.treatments = this.getDataIntoAnArray(this.patientData.treatments);
    this.medicines = this.getDataIntoAnArray(this.patientData.medicines);
    this.history = this.getDataIntoAnArray(this.patientData.history);
    this.observations = this.getDataIntoAnArray(this.patientData.observations);
  }

  getDataIntoAnArray(input: string): any {
    return input.split(',').map(item => item.trim());
  }

  sendToEdit(patient: any, patientId: string): any {
    const patientDataToEdit: NavigationExtras = {
      state: {
        patientData: patient
      }
    }
    this.router.navigate([
      "edit-patient", 
      patientId
    ],
    patientDataToEdit
    );
  }
}
