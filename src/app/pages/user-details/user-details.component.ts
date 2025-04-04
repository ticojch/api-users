import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../core/services/user.service';
import { HeaderComponent } from '../../components/header/header.component';
import { GenerarCsvService } from '../../core/services/generar-csv.service';

@Component({
  selector: 'app-user-details',
  imports: [HeaderComponent],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent implements OnInit{
  selectedUser: any;
  private id: number = 0;

  constructor(private route: ActivatedRoute, public userService: UserService, private generar_csv: GenerarCsvService){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getUser(this.id);
  }

  getUser(id:number){
    this.userService.getUser(id).subscribe({
      next:(data)=>{
        this.selectedUser = data;
      },
      error(err) {
        console.log(err);
      },
    });
  }

  generarCsvTrabajador(){
    this.generar_csv.descargarTrabajadorCSV(this.id);
  }

}
