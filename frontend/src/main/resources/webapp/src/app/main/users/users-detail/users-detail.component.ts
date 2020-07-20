import { Component, OnInit, Output } from '@angular/core';
import { UserService } from 'app/main/services/user.service';
import { AppComponent } from 'app/app.component';

@Component({
  selector: 'app-users-detail',
  templateUrl: './users-detail.component.html',
  styleUrls: ['./users-detail.component.scss']
})
export class UsersDetailComponent implements OnInit {

  userData: any;
  user_user: string;
  userName: string;
  userSurname: string;
  userMail: string;

  @Output()
  appComponent = new AppComponent();

  constructor(
    protected userService: UserService
  ) { }

  ngOnInit() {
    this.userService.getUserData()
      .subscribe(
        res => {
          this.userData = res && res['data'] && res['data'][0] ? res['data'][0] : [];
          console.log(this.userData);          
          this.user_user = this.userData['user_'];
          console.log(this.user_user);          
          this.userName = this.userData['name'];
          console.log(this.userName);          
          this.userSurname = this.userData['surname'];          
          this.userMail = this.userData['email'];
        }
      );
  }
}
