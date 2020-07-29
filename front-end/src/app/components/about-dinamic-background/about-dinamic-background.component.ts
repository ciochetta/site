import { Component, OnInit, Input } from '@angular/core';
import { ScriptService } from 'src/app/services/script.service';

@Component({
  selector: 'app-about-dinamic-background',
  templateUrl: './about-dinamic-background.component.html',
  styleUrls: ['./about-dinamic-background.component.scss'],
  providers: [ScriptService],
})
export class AboutDinamicBackgroundComponent implements OnInit {

  @Input() title;
  

  constructor(private service: ScriptService) {
    service.load('file1', 'file2', 'file3').then(data => {
      console.log('script loaded ', data);
    }).catch(error => console.log(error));
   }

  ngOnInit() {

  }

}