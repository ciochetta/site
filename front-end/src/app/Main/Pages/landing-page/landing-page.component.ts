import { Component, OnInit } from '@angular/core';
import { ScriptService } from '../../../services/script.service';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor(private service: ScriptService) {

      ScriptService.load('filepicker', 'rangeSlider').then(data => {
      console.log('script loaded ', data);
    }).catch(error => console.log(error));

  }


  ngOnInit() {
  }

}
