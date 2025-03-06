import { Injectable, signal } from '@angular/core';
import { CountryModel } from './shared/country.model';
import jsonData from './shared/data.json';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  selectedCountry!: CountryModel;
  constructor() { }

  lightTheme:boolean = true;

  changeTheme(){
    this.lightTheme = !this.lightTheme;
  }

  selectedCountryName(name: string){
    const found = jsonData.find((element)=>{
      return element.name == name;
    });
    const newBorders: string[] = [];

    if(found?.borders){
      for(let x of found.borders){
        for(let y of jsonData){
          if(x == y.alpha3Code){
            newBorders.push(y.name);
          }
        }
      }
    }

    if(found){
      this.selectedCountry = {
        name: found.name,
        flag: found.flags.png,
        population: found.population,
        region: found.region,
        subRegion: found.subregion,
        capital: found.capital,
        topLevelDomain: found.topLevelDomain[0],
        currencies: found.currencies,
        languages: found.languages,
        borders: newBorders,
        nativeName: found.nativeName,
      }
    }

        
    }
    
  }
