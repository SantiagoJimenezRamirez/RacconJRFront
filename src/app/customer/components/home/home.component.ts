import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from "../../../shared/footer/footer.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  options = ["HOME","SHOP", "ABOUT US", "BLOG", "CONTACT US"]
  selectedOption: number | null = 0;
  isVisible: boolean[] = [];

  ngOnInit() {
    // Inicializar los elementos como no visibles
    this.isVisible = [false, false]; // Cambia el tamaño según la cantidad de elementos
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isVisible.forEach((_, index) => {
      const element = document.getElementById(`fade-element-${index}`);
      if (element) {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        this.isVisible[index] = isVisible;
      }
    });
  }

  selectOption(index: number) {
    this.selectedOption = index;
  }

}
