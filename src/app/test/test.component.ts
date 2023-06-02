import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {
  data={
    uname:'',
    mobile:'',
    email:'',
    password:'',
    id:'',
    test:''
  }
  onSubmit(value:any){
    console.log(value);
    console.log(this.data);
    alert('Form Submitted')
    
    
  }
  
}
