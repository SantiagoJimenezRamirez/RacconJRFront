import { Component } from '@angular/core';
import { MenuComponent } from "../../../shared/menu/menu.component";
import { HeaderAdminComponent } from "../../../shared/header-admin/header-admin.component";
import { TitleService } from '../../../service/title.service';

@Component({
  selector: 'app-wallet',
  standalone: true,
  imports: [MenuComponent, HeaderAdminComponent],
  templateUrl: './wallet.component.html',
  styleUrl: './wallet.component.scss'
})
export class WalletComponent {
  title = "";
  constructor(private _titleService: TitleService, ){

  }
  ngOnInit(): void {
    this.title = this._titleService.getTitle()
  }
}
