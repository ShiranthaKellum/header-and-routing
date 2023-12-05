import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { PatientService } from 'src/app/services/patientService/patient.service';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-get-all-patients',
  templateUrl: './get-all-patients.component.html',
  styleUrls: ['./get-all-patients.component.css']
})
export class GetAllPatientsComponent implements OnInit {
  // icons
  faCircleInfo = faCircleInfo;

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
