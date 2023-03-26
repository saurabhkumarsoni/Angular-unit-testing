import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  message: string[] = [];

  userData: Object = {};

  log(message: string) {
    this.message.push(message);
  }

  clear() {
    this.message = [];
  }

  getUserData(userId: number) {
    if (userId < 10) {
      return (this.userData = {
        department: 'IT',
      });
    } else if (userId >= 10 && userId < 50) {
      return (this.userData = {
        department: 'Java',
      });
    } else if (userId >= 50 && userId < 100) {
      return (this.userData = {
        department: 'UI',
      });
    } else {
      return (this.userData = {
        department: 'Python',
      });
    }
  }



}
