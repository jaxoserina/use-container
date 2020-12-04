import { Inject, Injectable } from 'typescript-nodejs-ioc';
import { TimeService } from '../services/timeService';
import { DataService, User } from '../services/dataService';

@Injectable('client')
export class Client{
  @Inject('timeService') private timeService: TimeService;
  @Inject('dataService') private dataService: DataService;

  public currentDate: Date;
  public users: User[];

  constructor() {
    this.currentDate = this.timeService.getCurrentDate(); 
    this.users = this.dataService.getAllUsers();
  }

  // eslint-disable-next-line
  public getClient(id: number): any {
    const name = {
      firstName: 'Ian',
      lastName: 'Smith'
    };
    return name;
  }
}




