import { Component, inject, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { CountryModel } from '../shared/country.model';
import { CountriesService } from '../countries.service';
import { Router } from '@angular/router';
import { DecimalPipe } from '@angular/common';
@Component({
  selector: 'app-country-details',
  imports: [DecimalPipe],
  templateUrl: './country-details.component.html',
  styleUrl: './country-details.component.scss'
})
export class CountryDetailsComponent implements OnInit{
  currentCountry!: CountryModel;
  private router = inject(Router);

  constructor(private location: Location, private countriesService: CountriesService){}
  
  get themeSetter(){
    return this.countriesService.lightTheme;
  }

  ngOnInit(){
    this.currentCountry = this.countriesService.selectedCountry;
  }

  goBack(){
    this.location.back();
  }

  onBorderClick(borderName: string){
    console.log(borderName);
  }
}
