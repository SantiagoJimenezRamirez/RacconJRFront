import { Component } from '@angular/core';
import { MenuComponent } from "../../../shared/menu/menu.component";
import { HeaderAdminComponent } from "../../../shared/header-admin/header-admin.component";
import { TitleService } from '../../../service/title.service';

@Component({
  selector: 'app-analitics',
  standalone: true,
  imports: [MenuComponent, HeaderAdminComponent],
  templateUrl: './analitics.component.html',
  styleUrl: './analitics.component.scss'
})
export class AnaliticsComponent {
  title = "";
  constructor(private _titleService: TitleService, ){

  }
  ngOnInit(): void {
    this.title = this._titleService.getTitle()
  }
}
