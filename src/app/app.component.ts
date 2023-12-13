import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  submit(user: any, pass: any) {
    let reg = /^[a-z]+$/i;
    let flag = false;

    if (user.value != '' && pass.value != '') {
      
      if(!reg.test(user.value)){
        flag = true
        alert("Username invalid")
      }

      if(pass.value.length < 6){
        flag = true
        alert("Password length must be greater than 6")
      }


      if(flag != true){
        console.log(user.value);
        console.log(pass.value);
      }


    } else {
      alert('Username or Password cannot be empty');
    }

    return false;
  }

  showPassword(value: any, pass: any) {
    if (value.checked) {
      pass.type = 'text';
    } else {
      pass.type = 'password';
    }
  }
}
