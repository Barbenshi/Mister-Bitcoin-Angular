import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { BitcoinService } from 'src/app/services/bitcoin.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, OnDestroy {
  constructor(private userService: UserService, private bitcoinService: BitcoinService) { }

  user!: User | null
  btc = 0
  name = ''

  subscription!:Subscription

   async ngOnInit() {
   this.subscription = this.userService.user$.subscribe(user=>this.user = user)
    if(!this.user) return
    const btc =  await this.bitcoinService.getRate(this.user.coins)
    this.btc = btc
  }

  get imgUrl() {
    return `https://robohash.org/set_set5/${this.user?.name}`
  }

  onSubmit(){
    this.userService.signup(this.name)
    // this.user = user
    this.name = ''
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
