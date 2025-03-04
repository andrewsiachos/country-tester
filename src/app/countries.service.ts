import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor() { }

  lightTheme:boolean = true;

  changeTheme(){
    this.lightTheme = !this.lightTheme;
  }
  
}
