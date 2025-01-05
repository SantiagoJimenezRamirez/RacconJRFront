import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { TitleService } from '../../service/title.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  section = ["dashboard", "inventory", "wallet", "budget", "analitics", "settings", "category"]
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
    this.router.navigate([`/admin/${item.toLowerCase()}`]); // Navega a la ruta correspondiente
  }
}
