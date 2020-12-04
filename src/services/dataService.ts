import { Injectable } from 'typescript-nodejs-ioc';

export interface User {
  firstName: string;
  lastName: string;
}

@Injectable('dataService')
export class DataService {
  public getAllUsers(): User[] {
    const users = [
      {
        firstName: 'Rosie',
        lastName: 'Smith'
      },
      {
        firstName: 'Sam',
        lastName: 'Smith'
      },
      {
        firstName: 'Ashley',
        lastName: 'Smith'
      }
    ];
    return users;
  }
}