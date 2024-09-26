import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TitleService } from './service/title.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'RACCON-SAS';

  constructor(private _titleService : TitleService){
    
  }
}
