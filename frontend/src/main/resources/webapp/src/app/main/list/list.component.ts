import { Component, OnInit, Output } from "@angular/core";
import { ListService } from "../services/list.service";
import { ActivatedRoute } from "@angular/router";
import { SongService } from "../services/song.service";
import { AppComponent } from "app/app.component";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"],
})
export class ListComponent implements OnInit {
  listRoute: any;
  listId: number;
  listData: any;
  songs: any;
  discData: any;
  discImageRoute: string;
  discId: number;
  

  @Output()
  appComponent = new AppComponent();
  
  constructor(
    private route: ActivatedRoute,
    protected listService: ListService,
    protected songService: SongService
  ) { }

  ngOnInit() 
  {this.listRoute = this.route.params.subscribe
    (params => 
      {this.listId = +params['LISTID'];
      console.log(this.listId);
      this.listService.getList(this.listId).subscribe
      (res => 
        {this.listData =
          res && res['data'] && res['data'][0] ? res['data'][0] : [];
          console.log(this.listData);          
        this.listService.getSongsOfList(this.listId).subscribe
        (res => {this.songs = res && res['data'] && res['data'] ? res['data'] : [];
          console.log(this.songs); 
          this.songService.getAllDataSong(this.songs[0]["id_song"]).subscribe
          (res => 
            {this.discData = res && res['data'] && res['data'][0] ? res['data'][0] : [];
              console.log(this.discData["id_disc"]);
              this.discImageRoute = this.appComponent.imageDiscRoute;            
            }
          )        
          } 
        )
      });
    }
    )
  }
}
