import { Component, OnInit } from '@angular/core';
import { ScriptService } from 'src/app/services/script.service';

@Component({
  selector: 'app-animated-background',
  templateUrl: './animated-background.component.html',
  styleUrls: ['./animated-background.component.scss'],
  providers: [ScriptService],
})
export class AnimatedBackgroundComponent implements OnInit {

  constructor(private service: ScriptService) {

    service.load('file1', 'file2', 'file3').then(data => {
      console.log('script loaded ', data);
    }).catch(error => console.log(error));

   }

  ngOnInit() {

  }

}
