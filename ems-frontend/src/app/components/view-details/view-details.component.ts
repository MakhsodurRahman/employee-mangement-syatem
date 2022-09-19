import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/AllClass/employee';
import { EmployeeService } from 'src/app/service/employeeService';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent implements OnInit {
  employee: Employee = new Employee();
  id!: number;
  constructor(private employeeService:EmployeeService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.viewDetails();
  }
  viewDetails() {
    this.employeeService.viewDetails(this.id).subscribe(data =>{
      this.employee = data;
    },
    error => console.log(error)
    );
  }

  onSubmit(){
    this.viewDetails();
  }

}
