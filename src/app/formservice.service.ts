import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormserviceService {

  data = {
    firstName: "Goutham",
    lastName: "Kancherla",
    proType: "student",
    address: "Marathahalli",
    age: 22
  }
  constructor() { }

  getData() {
    return this.data;
  }

  print(data:any): any {
    console.log(data)
  }
}
