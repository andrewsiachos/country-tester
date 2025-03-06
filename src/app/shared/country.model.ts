export type CountryModel = {
    name: string;
    flag: string;
    population: number;
    region: string;
    subRegion: string;
    capital: string | undefined;
    topLevelDomain: string;
    currencies: {name: string}[] | undefined;
    languages: {name: string}[];
    borders: string[] | undefined;
    nativeName: string;
};