import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserService } from '../users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css'],
})
export class InactiveUsersComponent {
  constructor(private usersService: UserService) {}
  onSetToActive(id: number) {
    this.usersService.onSetToActive(id);
  }
}
