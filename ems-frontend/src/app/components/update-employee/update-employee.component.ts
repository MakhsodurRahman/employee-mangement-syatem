import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/AllClass/employee';
import { EmployeeService } from 'src/app/service/employeeService';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  employee: Employee = new Employee();
  id!: number;
  constructor(private employeeService:EmployeeService,
    private route: ActivatedRoute,
    private roter:Router) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.params['id'];
      this.employeeService.getEmployeeById(this.id).subscribe(data=>{
        this.employee = data;
        
      },
      error => console.log(error)
      );
  }

  
  gotToEmployeeList(){
    this.roter.navigate(['/employees']);
  }

  
  openSweetalert(){
    Swal.fire({
      position: 'top',
      icon: 'success',
      title: 'Successfully Updated',
      showConfirmButton: false,
      timer: 1500
    })
  }
  onSubmit(){
    this.employeeService.updateEmployee(this.id,this.employee).subscribe(data =>{
      this.gotToEmployeeList();
    }, error => console.log(error)
    );
    
  }

}
