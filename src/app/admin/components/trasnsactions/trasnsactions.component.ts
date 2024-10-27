import { Component, OnInit } from '@angular/core';
import { MenuComponent } from "../../../shared/menu/menu.component";
import { HeaderAdminComponent } from "../../../shared/header-admin/header-admin.component";
import { TitleService } from '../../../service/title.service';

@Component({
  selector: 'app-trasnsactions',
  standalone: true,
  imports: [MenuComponent, HeaderAdminComponent],
  templateUrl: './trasnsactions.component.html',
  styleUrl: './trasnsactions.component.scss'
})
export class TrasnsactionsComponent implements OnInit {
  title = "";
  constructor(private _titleService: TitleService, ){

  }
  ngOnInit(): void {
    this.title = this._titleService.getTitle()
  }

}
