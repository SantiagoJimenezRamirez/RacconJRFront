import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header-admin',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header-admin.component.html',
  styleUrl: './header-admin.component.scss'
})
export class HeaderAdminComponent {
  @Input() section = "dashboard";
  srcPhoto = "svg/profile.svg";
  username = "Santiago JR";

  getSvg(){
    return `svg/${this.section}.svg`
  }
}
