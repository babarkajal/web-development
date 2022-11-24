import { Component, Input } from '@angular/core';
import { AccountService } from '../account.service';
import { LoggingServices } from '../logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  //PROVIDE THIS SERVICE
  providers: [LoggingServices],
})
export class AccountComponent {
  @Input() account: { name: string; status: string } = { name: '', status: '' };
  @Input() id: number = 0;

  constructor(
    private loggingService: LoggingServices,
    private accountService: AccountService
  ) {}

  onSetTo(status: string) {
    this.accountService.updateAccount(this.id, status);

    //	emit event listener of service
    this.accountService.statusChanged.emit(status);
    //REMOVED ---> BECAUSE WE INJECTED THIS IN ACCOUNT SERVICES
    // this.loggingService.logStatusChange(status);
  }
}
