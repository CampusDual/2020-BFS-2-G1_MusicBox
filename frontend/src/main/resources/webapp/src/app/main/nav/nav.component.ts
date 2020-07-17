import { Component, OnInit, Output } from '@angular/core';
import { AppComponent } from 'app/app.component';
import { UserService } from '../services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  userData: any;
  user_user: string;
  profileRoute: string;
  playListRoute: string;

  @Output()
  appComponent = new AppComponent();
  
  constructor(
    private route: ActivatedRoute,
    protected userService: UserService
  ) { }

  ngOnInit() {
    this.userService.getUserData()
    .subscribe(
      res => {this.userData = res && res['data'] && res['data'][0] ? res['data'][0] :  [];
            console.log(this.userData);
            var user = "user_";
            this.user_user = this.userData[user];
            console.log(this.user_user);
            this.profileRoute = '/main/users/user';
            this.playListRoute = '/main/lists/list';
    }
    )
  }

}
