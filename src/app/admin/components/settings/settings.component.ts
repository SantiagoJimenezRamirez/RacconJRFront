import { Component } from '@angular/core';
import { MenuComponent } from "../../../shared/menu/menu.component";
import { HeaderAdminComponent } from "../../../shared/header-admin/header-admin.component";
import { TitleService } from '../../../service/title.service';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [MenuComponent, HeaderAdminComponent],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})
export class SettingsComponent {
  title = "";
  constructor(private _titleService: TitleService, ){

  }
  ngOnInit(): void {
    this.title = this._titleService.getTitle()
  }
}
