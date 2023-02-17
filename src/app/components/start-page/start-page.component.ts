import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { PlaceService } from "../../services/place.service";

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css', '../app.component.css']
})
export class StartPageComponent implements OnInit {
  button_state: string = "new game";
  check_window_size(): boolean {
    return window.innerWidth >= 1111;

  }
  constructor(private router: Router, private route: ActivatedRoute, private placeService: PlaceService) {}

  ngOnInit(): void {
    // @ts-ignore
    document.getElementById('body').style.background = 'transparent';
    this.placeService.place = 0;
    if (this.placeService.not_finished == 0)
      this.placeService.not_finished = 1;
  }

  go(): void {
    var to_go = 0;
    for (let i = 0; i <= 11; i++)
      if (!this.placeService.used[i]) {
        to_go = i;
        break;
      }
    this.router.navigate([this.placeService.levels[to_go]]);
  }

  go_from_start(): void {
    this.placeService.not_finished = 1;
    for (let i = 1; i < 11; i++) {
      this.placeService.used[i] = false;
    }
    this.router.navigate(['task1']);
  }
}
