import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public userName:string;
  public password:string;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  userLogin(){
    if(this.userName=="admin" && this.password=="admin"){
      this.router.navigate(['homePage']);
    }else{
      alert("Invalid Credential");
    }
  }
}
