import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from 'shared/services/user.service';
import { Subscription } from 'rxjs/Subscription';
import { User } from 'shared/models/user';
import { DataTableResource } from 'angular-4-data-table';
import {Router} from "@angular/router"

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, OnDestroy {
  users: User[];
  subscription: Subscription;
  tableResource: DataTableResource<User>;
  items: User[] = [];
  itemCount: number;

  constructor(private userService: UserService, private router: Router) {
    this.subscription = this.userService.getAll()
      .subscribe(user => {
        this.users = user
        console.log(this.users);
        this.initializeTable(user);
      });
  }

  private initializeTable(users: User[]) {
    this.tableResource = new DataTableResource(users);
        this.tableResource.query({ offset: 0 })
          .then(items => this.items = items);
        this.tableResource.count()
          .then(count => this.itemCount = count);
  }

  reloadItems(params) {
    if (!this.tableResource) return;

    this.tableResource.query(params)
      .then(items => this.items = items);
  }

  filter(query: string) {
    let filteredUsers = (query) ? 
      this.users.filter(u => u.email.toLowerCase().includes(query.toLowerCase())) :
      this.users;

    this.initializeTable(filteredUsers);
  }

  changeRole(user) {
    this.userService.updateRole(user);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  ngOnInit() {
  }

}
