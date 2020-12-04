
import { Injectable } from 'typescript-nodejs-ioc';

@Injectable('timeService')
export class TimeService {
  public getCurrentDate(): Date {
    return new Date(Date.now());
  }
}
