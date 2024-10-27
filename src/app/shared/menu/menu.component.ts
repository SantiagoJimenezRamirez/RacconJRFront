import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  section = ["dashboard", "transactions", "wallet", "budget", "analitics", "settings"]
  sectionInfo = ["help", "log-out"]

  constructor(private router: Router){

  }
  getSvg(name: string){
    return `svg/${name}.svg`
  }

  redirecTo(item: string) {
    this.router.navigate([`/${item.toLowerCase()}`]); // Navega a la ruta correspondiente
  }
}
