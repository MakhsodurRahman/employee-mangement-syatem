import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/AllClass/employee';
import { EmployeeService } from 'src/app/service/employeeService';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees!: Employee[];

  constructor(
    private employeeService: EmployeeService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.getEmployees();
  }
  getEmployees() {
    this.employeeService.getEmployeeList().subscribe(data =>{
      this.employees = data;
    }
    );
  }

  updateEmployee(id: number){
    this.router.navigate(['update-employee',id]);
  }

  deleteEmployee(id:number){
    this.employeeService.deleteEmployee(id).subscribe(data =>{
      this.gotToEmployeeList();
      this.getEmployees();
      console.log('ki ache jibone');
    })

  }

  gotToEmployeeList(){
    this.router.navigate(['/employees']);
  }

  viewDetails(id: number){
    this.router.navigate(['view-details',id]);
  }
  
  deleteSweetAlart(){
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Deleted!',
        'Employee has been deleted.',
        'success'
      )
    }
  })
}

}
