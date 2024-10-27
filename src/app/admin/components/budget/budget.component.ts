import { Component } from '@angular/core';
import { MenuComponent } from "../../../shared/menu/menu.component";
import { HeaderAdminComponent } from "../../../shared/header-admin/header-admin.component";
import { TitleService } from '../../../service/title.service';

@Component({
  selector: 'app-budget',
  standalone: true,
  imports: [MenuComponent, HeaderAdminComponent],
  templateUrl: './budget.component.html',
  styleUrl: './budget.component.scss'
})
export class BudgetComponent {
  title = "";
  constructor(private _titleService: TitleService, ){

  }
  ngOnInit(): void {
    this.title = this._titleService.getTitle()
  }
}
