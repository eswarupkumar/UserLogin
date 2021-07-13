import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service'
import { Router } from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string = ''
  password: string = ''
  accountExist = false
  constructor(private service: ApiService, private route: Router) { }

  ngOnInit(): void {
  }

  login(): void {
    this.service.getSignup().subscribe(data => {
      console.log(data)
      console.log(this.email, this.password)
      for (let i in data) {
        if (data[i].Email === this.email) {
          if (data[i].Password === this.password) {
            alert("Logged in !")
            this.accountExist = true
            this.route.navigateByUrl('home')
          }
          else {
            alert("Check your password !")
          }
        }
      }
      if (this.accountExist === false) {
        alert("No Account Found !")
      }
    })
  }
}
