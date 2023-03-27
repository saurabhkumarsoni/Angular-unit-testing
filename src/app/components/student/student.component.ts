import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/Student/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
sum!: number;
results: any;
  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
  }

  calculate(num1: number, num2: number){
    this.sum = num1 + num2;
    return this.sum;
  }

  saveData(){
    let info = {
      sumVal: this.calculate(5,5),
      name: 'Saurabh Kumar'
    };
    this.saveDataInfotoConsol(info);
    this.studentService.saveDetails(info).subscribe(response =>{
      this.results = response;
    })
  }

  studentResult(){
    if(this.calculate(10,20) <= 40){
      return 'Fail'
    } else if(this.calculate(10,20) > 40 && this.calculate(10,20) < 100){
      return 'average'
    } else {
      return 'excellent'
    }
  }

  saveDataInfotoConsol(info: any){
    console.log(info);
  }

}
