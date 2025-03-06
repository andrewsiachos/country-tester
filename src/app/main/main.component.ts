import { Component, inject, input, OnInit, signal } from '@angular/core';
import { CountriesService } from '../countries.service';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DecimalPipe } from '@angular/common';
import jsonData  from '../shared/data.json';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  imports: [FormsModule, DecimalPipe],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit{
  private httpClient = inject(HttpClient);
  private router = inject(Router);
  jsonCountries = jsonData;
  selectOptions: string[] = ['All', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

  countries:any = [];

  filteredCountries:any;

  inputValue: string = '';
  
  constructor(private countriesService: CountriesService){}

  get themeSetter(){
    return this.countriesService.lightTheme;
  }

  ngOnInit() {
    this.countries = this.jsonCountries;
    this.filteredCountries = this.countries;
  }

  handleInput(){
    const capitalizedInput = this.inputValue.charAt(0).toUpperCase() + this.inputValue.slice(1);
    console.log(capitalizedInput);
    
    if(capitalizedInput == 'All'){
      this.filteredCountries = this.countries;
    }else{
      this.filteredCountries = this.filteredCountries.filter((x:any)=>{
        return x.name == capitalizedInput;
      });
    }
      
    this.inputValue = '';
  }

  onSelectRegion(event:any){
    const selectedRegion = event.target.value;

    if(selectedRegion == 'All'){
      this.filteredCountries = this.countries;
    }else{
      this.filteredCountries = this.countries;
      this.filteredCountries = this.filteredCountries.filter((x:any)=>{
        return x.region == selectedRegion;
      });
    }
    console.log(selectedRegion);
  }

  countryClick(countryName: string){
    this.countriesService.selectedCountryName(countryName);
    this.router.navigate(['/country']);
  }
}
