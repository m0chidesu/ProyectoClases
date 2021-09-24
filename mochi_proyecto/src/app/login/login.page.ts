import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }
login(form){

  var usuario = form.value["name  "]
  var contrasenia = form.value["password"]

  console.log(form.value)
  if(usuario == "admin" && contrasenia == "123"){
    //redirect to home
    this.router.navigate(['/productos'])

  }else{
    console.log("err")
  }
}
}
