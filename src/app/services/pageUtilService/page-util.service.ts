import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PageUtilService {

  constructor() { }
  reloadPage(): void {
    window.location.reload();
  }
}
