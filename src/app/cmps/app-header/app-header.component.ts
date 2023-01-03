import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit, OnDestroy {
  constructor(private userService:UserService){}
  user!:User | null
  subscription!: Subscription

  ngOnInit(): void {
    this.subscription = this.userService.user$.subscribe(user=>this.user = user)
  }

  onLogOut(){
    this.userService.signOut()
  }

  ngOnDestroy(): void {
    
  }

}
