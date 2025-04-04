import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { GenerarCsvService } from '../../core/services/generar-csv.service';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor( private generar_csv: GenerarCsvService){}

  generarCsvTrabajadores(){
    this.generar_csv.descargarTrabajadoresCSV();
  }

}
