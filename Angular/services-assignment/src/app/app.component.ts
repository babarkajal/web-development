import { Component } from '@angular/core';
import { UserService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  activeUsers: string[] = [];
  inactiveUsers: string[] = [];
  actionCount: number = 0;
  constructor(private usersService: UserService) {}

  ngOnInit() {
    this.activeUsers = this.usersService.activeUsers;
    this.inactiveUsers = this.usersService.inactiveUsers;
    this.actionCount = this.usersService.actionCount;
  }
  ngDoCheck() {
    this.actionCount = this.usersService.actionCount;
  }
}
