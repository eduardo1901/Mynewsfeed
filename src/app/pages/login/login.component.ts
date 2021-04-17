import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {
public fb:FormBuilder = new FormBuilder;
public loginform = this.fb.group({
  usuario: ['',Validators.required], password: ['',Validators.required]
})
  constructor(private router: Router) { }


  ngOnInit(): void {
  }

  login (){
    sessionStorage.setItem("token","pruebadetoken");
    this.router.navigateByUrl("/noticias");
  }

}
