import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { GenerarCSVComponent } from '../../components/generar-csv/generar-csv.component';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent,GenerarCSVComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
