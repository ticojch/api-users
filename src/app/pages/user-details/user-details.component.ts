import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../core/services/user.service';
import { HeaderComponent } from '../../components/header/header.component';
import { GenerarCSVComponent } from '../../components/generar-csv/generar-csv.component';

@Component({
  selector: 'app-user-details',
  imports: [HeaderComponent,GenerarCSVComponent],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent implements OnInit{
  selectedUser: any;

  constructor(private route: ActivatedRoute, public userService: UserService){}
  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.getUser(id);
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

}
