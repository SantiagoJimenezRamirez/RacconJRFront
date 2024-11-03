import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { MenuComponent } from "../../../shared/menu/menu.component";
import { CommonModule } from '@angular/common';
import { HeaderAdminComponent } from "../../../shared/header-admin/header-admin.component";
import { createChart, IChartApi, ISeriesApi, LineStyle } from 'lightweight-charts';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MenuComponent, CommonModule, HeaderAdminComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements AfterViewInit  {
  sales = "Total Sumary"
  @ViewChild('chartContainer', { static: true }) chartContainer!: ElementRef;
  private chart!: IChartApi;
  private lineSeries!: ISeriesApi<'Line'>;

  constructor() {
  }
  ngAfterViewInit(): void {
// Crear el gráfico
this.chart = createChart(this.chartContainer.nativeElement, {
  width: this.chartContainer.nativeElement.clientWidth,
  height: this.chartContainer.nativeElement.clientHeight,
  layout: {
    background: { color: '#000000' },
    textColor: '#ffffff',
  },
  grid: {
    vertLines: {
      color: '#000000',
      style: LineStyle.Solid,
    },
    horzLines: {
      color: '#333333',
      style: LineStyle.Solid,
    },
  },
  rightPriceScale: {
    borderColor: '#ffffff',
  },
  timeScale: {
    borderColor: '#ffffff',
  },
});

// Configurar la serie de datos (línea de gráfico)
this.lineSeries = this.chart.addLineSeries({
  color: '#6f42c1',
  lineWidth: 2,
  baseLineColor : 'rgba(111, 66, 193, 0)',
});


// Generar datos de ventas falsos para todo el año
const salesData = this.generateFakeSalesData();

// Agregar datos a la serie de línea
this.lineSeries.setData(salesData);
  }

  ngOnInit() {
  }

  private generateFakeSalesData() {
    const data = [];
    let currentDate = new Date(2023, 0, 1); // Comenzar el 1 de enero de 2023
    let currentSales = 50; // Venta inicial

    for (let i = 0; i < 365; i++) {

      const salesChange = Math.random() * 20 - 10;
      currentSales = Math.max(0, currentSales + salesChange); // Evitar ventas negativas

      // Agregar la entrada de datos
      data.push({
        time: currentDate.toISOString().split('T')[0], // Formato de fecha en ISO (YYYY-MM-DD)
        value: parseFloat(currentSales.toFixed(2)),
      });

      // Avanzar al día siguiente
      currentDate.setDate(currentDate.getDate() + 1);
    }

    return data;
  }


}
