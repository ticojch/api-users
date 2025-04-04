import { Component } from '@angular/core';
import { UserService } from '../../core/services/user.service';

@Component({
  selector: 'app-generar-csv',
  imports: [],
  templateUrl: './generar-csv.component.html',
  styleUrl: './generar-csv.component.css'
})
export class GenerarCSVComponent {
  constructor(private generarCSV:UserService){}

  convertirAFormatoCSV(data: any[]): string {
    //Aplanar datos JSON, para validar datos anidados y colocarlos todos en una fila
    const datosAplanados = data.map((dato)=> this.aplanar(dato));

    //Convertir encabezados
    const encabezados = Object.keys(datosAplanados[0]);

    //Convertir resto de filas
    const filas = datosAplanados.map((fila) =>
      encabezados.map((campo) => 
        `"${fila[campo]}"`).join(', '));

    //Retorno de string completo
    return [encabezados.join(','), ...filas].join('\r\n');
  }

  //Muestrame los datos CSV por consola
  mostrarCSV(data:string){
    console.log(data);
  }

  //Descargar el archivo en formato csv
  descargarArchivoCSV(csv: string, nombreArchivo: string){
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = window.URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', nombreArchivo);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  //Funcion recursiva para aplanar los dato (Por si existe la posibilidad de datos anidados)
  private aplanar(obj: any, prefix = '', res: any = {}): any {
    for (let key in obj) {
      if (!obj.hasOwnProperty(key)) continue;

      const valor = obj[key];
      const prefijo = prefix ? `${prefix}.${key}` : key;

      if (typeof valor === 'object' && valor !== null && !Array.isArray(valor)) {
        this.aplanar(valor, prefijo, res);
      } else {
        res[prefijo] = Array.isArray(valor) ? valor.join(', ') : valor;
      }
    }
    return res;
  }

  descargarTrabajadoresCSV(){
    this.generarCSV.getData().subscribe((data) => {
      const csv = this.convertirAFormatoCSV(data);
      // this.descargarArchivoCSV(csv, 'datos.csv');
      this.mostrarCSV(csv);
    });
  }

  descargarTrabajadorCSV(id:number){
    this.generarCSV.getUser(id).subscribe((data) => {
      const csv = this.convertirAFormatoCSV(data);
      this.descargarArchivoCSV(csv, 'datos.csv');
      this.mostrarCSV(csv);
    });
  }
  
}
