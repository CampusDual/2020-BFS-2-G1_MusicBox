import { Component, OnInit, Output } from '@angular/core';
import { AppComponent } from 'app/app.component';
import { UserService } from 'app/main/services/user.service';
import { ListService } from 'app/main/services/list.service';

@Component({
  selector: 'app-users-home',
  templateUrl: './users-home.component.html',
  styleUrls: ['./users-home.component.scss']
})
export class UsersHomeComponent implements OnInit {

  userData: any;  
  arrayOfLists: string[] = [];
  user_name: string;  

  @Output()
  appComponent = new AppComponent();

  constructor(
    protected userService: UserService,
    protected listService: ListService
  ) { }

  ngOnInit() {
    this.userService.getUserData()
      .subscribe(
        res => {
          this.userData = res && res['data'] && res['data'][0] ? res['data'][0] : [];
          console.log(this.userData);
          this.user_name = this.userData['user_'];
                   
          this.listService.getListsOfUser()
            .subscribe(
              res => {
                this.arrayOfLists = res && res['data'] && res['data'] ? res['data'] : [];
                console.log(this.arrayOfLists);                  
                }              
            )
        }
      )
  }
}
