import { Client } from './client';
import { TimeService } from '../services/timeService';
import { DataService, User } from '../services/dataService';
import { container } from 'typescript-nodejs-ioc';

describe('Client', () => {
  let client: Client, timeServiceMock: TimeService, dataServiceMock: DataService;
  const mockUsers = [
    {
      firstName: "John",
      lastName: "Smith"
    }, {
      firstName: "Emily",
      lastName: "Smith"
    }
  ];

  beforeEach(() => {
    timeServiceMock = { getCurrentDate: jest.fn() };
    dataServiceMock = { getAllUsers: jest.fn() };
    (timeServiceMock.getCurrentDate as jest.Mock).mockReturnValue('12/08/2020');
    (dataServiceMock.getAllUsers as jest.Mock).mockReturnValue(mockUsers);

    container.provide({
      token: 'timeService',
      useValue: timeServiceMock
    });
    container.provide({
      token: 'dataService',
      useValue: dataServiceMock
    });

    client = new Client();
  });

  it('should fetch the date', () => {
    expect(timeServiceMock.getCurrentDate).toHaveBeenCalledWith();
  });

  it('should set the date', () => {
    expect(client.currentDate).toBe('12/08/2020');
  });

  it('should fetch the users', () => {
    expect(dataServiceMock.getAllUsers).toHaveBeenCalledWith();
  });

  it('should set the users', () => {
    expect(client.users).toEqual(mockUsers);
  });
});
