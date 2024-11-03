import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TitleService } from '../../service/title.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  section = ["dashboard", "inventory", "wallet", "budget", "analitics", "settings"]
  sectionInfo = ["help", "log-out"]
  selectedItem: string | null = null;

  constructor(private router: Router,
              private _titleService: TitleService,
  ){

  }
  getSvg(name: string){
    return `svg/${name}.svg`
  }

  redirectTo(item: string) {
    this._titleService.titleWindow(item)
    this.router.navigate([`/${item.toLowerCase()}`]); // Navega a la ruta correspondiente
  }
}
