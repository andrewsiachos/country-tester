import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import * as jsonData from './shared/data.json';
import { CountriesService } from './countries.service';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'countries';
  buttonText = signal<string>('Dark Mode');
  private httpClient = inject(HttpClient);

  filterOptions: string[] = ['All', 'Africa', 'America', 'Asia', 'Europe', 'Oceania'];
  countries:any = [];

  constructor( private countriesService: CountriesService){}

  get themeSetter(){
    return this.countriesService.lightTheme;
  }
  ngOnInit() {
    /*
    this.httpClient.get('https://restcountries.com/v3.1/all').subscribe({
      next: (resData) =>{
        this.countries = resData;
        this.countries.sort((a: any, b: any)=>{
          return a.name.common > b.name.common;
        });
        console.log(this.countries);
      }
    })
      */
  }
  themeChange(){
    if(this.themeSetter){
      this.buttonText.set('Light Mode');
    }else{
      this.buttonText.set('Dark Mode');
    }
    this.countriesService.changeTheme();
  }
}
