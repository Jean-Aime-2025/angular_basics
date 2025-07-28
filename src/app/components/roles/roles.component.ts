import { HttpClient } from '@angular/common/http';
import { Component,inject,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IRole } from '../../model/interface/role';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css',
})
export class RolesComponent implements OnInit {
  // firstName: string = 'John';
  // lastName: string = 'Doe';
  // currentDate: Date = new Date();
  // inputType: string = 'checkbox';
  // selectedState: string = '';
  // sayHello(){
  //   alert('Hello!');
  // }
  // sayBarca(message: string){
  //   alert(message);
  // }

  roles: IRole[] = [];
  
  http = inject(HttpClient);

  ngOnInit(): void {
    this.getRoles()
  } 
  
  getRoles(){
    this.http.get("/api/GetAllRoles").subscribe((res:any)=>{
      this.roles = res.data;
      console.log(this.roles);
    })
  }

}
