import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() { 
    const heroes = [
      {id: 20, name: 'Janusz'},
      {id: 21, name: 'Tracz'},
      {id: 22, name: 'Jan'},
      {id: 23, name: 'Maciej'},
      {id: 24, name: 'Andrzej'}
  ];
  
    return {heroes};
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
