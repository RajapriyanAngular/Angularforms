import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  users={
    username:'',
    email:'',
    password:'',

  }




  onSubmit(value:any){
    console.log(value);
    console.log(this.users);
    alert('Form Submitted')
    
    
  }
  myError(){

  }

}
