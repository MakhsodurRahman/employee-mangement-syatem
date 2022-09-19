import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/AllClass/employee';
import { EmployeeService } from 'src/app/service/employeeService';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees!: Employee[];

  constructor(private employeeService: EmployeeService,
    private router:Router) { }

  ngOnInit(): void {
    this.getEmployees();
  }
  private getEmployees() {
    this.employeeService.getEmployeeList().subscribe(data =>{
      this.employees = data;
    }
    );
  }

  updateEmployee(id: number){
    this.router.navigate(['update-employee',id]);
  }

  viewDetails(id: number){
    this.router.navigate(['view-details',id]);
  }

}
