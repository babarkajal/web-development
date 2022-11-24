import { EventEmitter, Injectable } from '@angular/core';
import { LoggingServices } from './logging.service';

@Injectable()
export class AccountService {
  accounts = [
    {
      name: 'Master Account',
      status: 'active',
    },
    {
      name: 'TestAccount',
      status: 'inactive',
    },
    {
      name: 'Hidden Account',
      status: 'unknown',
    },
  ];

  statusChanged = new EventEmitter<string>();

  constructor(private loggedService: LoggingServices) {}

  addAccount(accountName: string, status: string) {
    this.accounts.unshift({ name: accountName, status });
    this.loggedService.logStatusChange(status);
  }

  updateAccount(id: number, newStatus: string) {
    this.accounts[id].status = newStatus;
    this.loggedService.logStatusChange(newStatus);
  }
}
