import { Component } from '@angular/core';
import { MenuComponent } from "../../../shared/menu/menu.component";
import { CommonModule } from '@angular/common';
import { HeaderAdminComponent } from "../../../shared/header-admin/header-admin.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MenuComponent, CommonModule, HeaderAdminComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {


}
