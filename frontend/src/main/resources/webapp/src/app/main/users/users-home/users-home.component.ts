import { Component, OnInit, Output } from '@angular/core';
import { AppComponent } from 'app/app.component';
import { UserService } from 'app/main/services/user.service';

@Component({
  selector: 'app-users-home',
  templateUrl: './users-home.component.html',
  styleUrls: ['./users-home.component.scss']
})
export class UsersHomeComponent implements OnInit {

  userData: any;
  user_user: string;
  userName: string;


  @Output()
  appComponent = new AppComponent();

  constructor(
    protected userService: UserService
  ) { }

  ngOnInit() {
    this.userService.getUserData()
    .subscribe(
      res => {this.userData = res && res['data'] && res['data'][0] ? res['data'][0] :  [];
            console.log(this.userData);
      var userUser = "user_";
      this.user_user = this.userData[userUser];
      console.log(this.user_user);
      var name = "name";
      this.userName = this.userData[name]; 
      console.log(this.userName);     
    }
    )
  }

}
