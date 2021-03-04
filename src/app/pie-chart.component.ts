import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { animalService } from './animal.service';
declare var google: any;

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  template: `<div #pieChart style="width: 100vw; height: 100vh;"></div>`
})
export class PieChartComponent implements AfterViewInit{

  constructor(private animalService: animalService) {}

  @ViewChild('pieChart') pieChart: ElementRef

  drawChart = () => {
    this.animalService.getchart()
               .subscribe(
                animales => {
                  const perdido = animales[0].perdido;
                  const encontrado = animales[0].encontrado;
                  const finalizado = animales[0].finalizado;

                  const data = google.visualization.arrayToDataTable([
                    ['Animales', 'Grafica de estados'],
                    ['Perdido', perdido],
                    ['Encontrado', encontrado],
                    ['Finalizado', finalizado]
                  ]);
                  const options = {
                    title: 'Animales',
                    legend: {position: 'top'}
                  };
                
                  const chart = new google.visualization.PieChart(this.pieChart.nativeElement);
                
                  chart.draw(data, options);
                 }
                ); 
}

  ngAfterViewInit() {
    google.charts.load('current', { 'packages': ['corechart'] });
    google.charts.setOnLoadCallback(this.drawChart);
  }


}