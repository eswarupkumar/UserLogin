import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service'
import { Router } from '@angular/router'
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  name: string = ''
  email: string = ''
  password: string = ''
  cpassword: string = ''

  constructor(private service: ApiService, private route: Router) { }


  ngOnInit(): void {
  }

  signup(): void {
    if (this.name && this.email && this.password && this.cpassword) {
      if (this.password === this.cpassword) {
        var val = { Name: this.name, Email: this.email, Password: this.password }
        console.log(val)

        this.service.addUser(val).subscribe(res => {
          alert(res.toString())
          this.route.navigateByUrl('login')

        })
      }
      else {
        alert("Password did not match !")
      }
    }
    else {
      alert("Please fill all the detais")
    }
  }

}
