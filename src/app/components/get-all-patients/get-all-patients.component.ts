import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { PatientService } from 'src/app/services/patientService/patient.service';

@Component({
  selector: 'app-get-all-patients',
  templateUrl: './get-all-patients.component.html',
  styleUrls: ['./get-all-patients.component.css']
})
export class GetAllPatientsComponent implements OnInit {
  constructor(
    private patientService: PatientService,
    private router: Router
  ) {}

  responseData: any[] = [];
  patientData: any;

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.patientService.getAllPatients().subscribe(
      data => {
        this.responseData = data;
      }
    );
  }

  navigateToPatientProfile(patientId: string): void {
    let patientData: string[];
    this.patientService.getPatientDetails(patientId).subscribe(
      data => {
        const patientDataToProfile: NavigationExtras = {
          state: {
            patientData: data
          }
        }
        this.router.navigate([
          "patient-profile",
          patientId
        ],
        patientDataToProfile
        );
      }
    );
  }
}
