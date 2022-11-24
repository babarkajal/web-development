import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserService } from '../users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css'],
})
export class ActiveUsersComponent {
  constructor(private usersService: UserService) {}
  onSetToInactive(id: number) {
    this.usersService.onSetToInactive(id);
  }
}
