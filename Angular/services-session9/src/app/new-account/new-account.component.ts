import { Component, EventEmitter, Output } from '@angular/core';
import { AccountService } from '../account.service';
import { LoggingServices } from '../logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  //PROVIDE THIS SERVICE
  providers: [LoggingServices],
})
export class NewAccountComponent {
  @Output() accountAdded = new EventEmitter<{ name: string; status: string }>();

  constructor(
    private loggingService: LoggingServices,
    private accountService: AccountService
  ) {
    //subscribe to the eventListener of service
    this.accountService.statusChanged.subscribe((status: string) =>
      alert('New status: ' + status)
    );
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAccount(accountName, accountStatus);
    /** 
	 **Wrong way to access the service  
		const service = new LoggingServices();
		service.logStatusChange(accountStatus); 
	*/

    /**
     **REMOVED ---> BECAUSE WE INJECTED THIS IN ACCOUNT SERVICES
     */
    // this.loggingService.logStatusChange(accountStatus);
  }
}
