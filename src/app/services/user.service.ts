import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, of } from 'rxjs';
import { Contact } from '../models/contact.model';
import { User } from '../models/user.model';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private storageService: StorageService) { }

  private user = this.storageService.load('loggedinUser')
  private _user$ = new BehaviorSubject<User | null>(this.user)
  public user$ = this._user$.asObservable()

  checkLoggedInUser(): Observable<boolean> {
    return this.user$.pipe(
      map(user=>user?true:false) 
      )
  }


  //  getUser() {
  //     // return { name: "Mister Bit", coins: 120, moves: [] }
  //     return this.loggedInUser
  // }

  signup(name: string) {
    const user = { name, coins: 100, moves: [] }
    this._user$.next(user)
    this.storageService.store('loggedinUser', user)
    // return this.loggedInUser
  }

  signOut() {
    const user = null
    this._user$.next(user)
    this.storageService.store('loggedinUser', user)
  }

  addMove(contact: Contact, amount: number) {
    // this.loggedInUser.moves.push({ toId: contact._id, to: contact.name, at: Date.now(), amount })
    // this.loggedInUser.coins -= amount
    // this.storageService.store('loggedinUser', this.loggedInUser)
    // return this.loggedInUser
  }
}
