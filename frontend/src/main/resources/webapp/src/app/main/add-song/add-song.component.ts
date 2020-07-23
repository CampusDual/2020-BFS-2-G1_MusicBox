import { Component, OnInit, Output } from '@angular/core';
import { AppComponent } from 'app/app.component';
import { ActivatedRoute } from '@angular/router';
import { ListService } from '../services/list.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-add-song',
  templateUrl: './add-song.component.html',
  styleUrls: ['./add-song.component.scss']
})
export class AddSongComponent implements OnInit {

  songData: any;
  songId: number;
  userData: any;
  userLists: string[] = [];
  eventData: any; 
  listId: number;
  listData: any;

  @Output()
  appComponent = new AppComponent();

  constructor(
    private route: ActivatedRoute,
    protected listService: ListService,
    protected userService: UserService
  ) { }

  

  ngOnInit() {
    this.songData = this.route.params
      .subscribe(
        params => {
          this.songId = + params['SONGID'];
          this.listService.getListsOfUser()
            .subscribe(
              res => {
                this.userData = res && res['data'] && res['data'] ? res['data'] : [];
                console.log(this.userData);
              }
            )
        }
      )
  }

  addList(idList: number) {
    console.log(this.songId);
    this.listId = idList;
    console.log(this.listId);
    if (this.listService.insertSong(this.listId, this.songId)
      .subscribe(
        res => {
          res && res['code'] === 0 && res['data'] ? res['data'] : [];
        }
      )) {
      window.alert('Song added ok!');
    } else {
      window.alert("Something's gone wrong. Try again");
    }
  }
}
