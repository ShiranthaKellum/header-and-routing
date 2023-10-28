import { Component, OnInit } from '@angular/core';
import { PatientService } from 'src/app/services/patientService/patient.service';

@Component({
  selector: 'app-get-all-patients',
  templateUrl: './get-all-patients.component.html',
  styleUrls: ['./get-all-patients.component.css']
})
export class GetAllPatientsComponent implements OnInit {
  constructor(private patientService: PatientService) {}

  responseData: any[] = [];

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.patientService.getAllPatients().subscribe(
      data => {
        this.responseData = data;
      }
    )
  }

}
