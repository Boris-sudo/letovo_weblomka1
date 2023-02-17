import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {PlaceService} from "../../../services/place.service";

@Component({
  selector: 'app-task10',
  templateUrl: './task10.component.html',
  styleUrls: ['./task10.component.css', '../../app.component.css']
})
export class Task10Component implements OnInit {
  times: number = 0;

  constructor(private router: Router, private route: ActivatedRoute, private placeService : PlaceService) { }

  ngOnInit(): void {
    this.placeService.place = 10;
  }

  checkAnswers(): void {
    // @ts-ignore
    var ans = document.getElementById('answer').value;

    if (ans == 'водопровод') {
      var to_go = 0;
      for (let i = 0; i <= 11; i++)
        if (!this.placeService.used[i]) {
          to_go = i;
          break;
        }
      this.router.navigate([this.placeService.levels[to_go]]);
      if (this.placeService.not_finished == this.placeService.place)
        this.placeService.not_finished++;
      this.placeService.used[this.placeService.place] = true;
    } else if (ans == "хочу третье слово"
      || ans == "можно третье"
      || ans == "можно третье слово"
      || ans == "дай третье"
      || ans == "дай третье слово"
      || ans == "можно мне третье"
      || ans == "можно мне третье слово"
      || ans == "дай пожалуйста третье"
      || ans == "можно пожалуйста третье"
      || ans == "можно пожалуйста третье слово"
      || ans == "дай пожалуйста третье слово"
      || ans == "хочу третье") {
      alert("https://docs.google.com/document/d/1Qs65vOvdZHrdPN9pBqx7WLK2lvGDJC3Ut_YSkWt03KI/edit?usp=sharing");
      // @ts-ignore
      document.getElementById('new-add-a').innerHTML = '<a (click)="write()" style="display:none;" href="https://docs.google.com/document/d/1YdoWe24i1gAbw5OLSyrMcYbOpMk4CFaL2M49oZIxwDE/edit?usp=sharing" id="after-3">magic</a>';
    } else { // @ts-ignore
      document.getElementById('incorrect').style.display = 'block';
    }
  }

  write(): void {
    alert('смотри на этой странице');
    if (this.times >= 5)
      alert("слово 5: 'сама'");
    console.log("слово 5: 'сама'");
    this.times++;
  }
}
