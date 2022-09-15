import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/AllClass/employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  Employees!: Employee[];

  constructor() { }

  ngOnInit(): void {
  }

}
