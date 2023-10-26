import { Component } from '@angular/core';
import { PageUtilService } from 'src/app/services/pageUtilService/page-util.service';
import { StorageService } from 'src/app/services/storageSerice/storage.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {
  constructor(
    private storageSerivce: StorageService,
    private pageUtilService: PageUtilService
  ) {}

  logout(): void {
    this.storageSerivce.logout();
    this.pageUtilService.reloadPage();
  }
}
