import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  constructor(private userService:UserService,
              private router:Router){}
  name = ''
  onSubmit(){
    this.userService.signup(this.name)
    // this.user = user
    this.name = ''
    this.router.navigateByUrl('/')
  }
}
