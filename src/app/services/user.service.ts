import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, of } from 'rxjs';
import { Contact } from '../models/contact.model';
import { Move } from '../models/move.model';
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
    if(!contact._id) return
    const move:Move = { toId: contact._id, to: contact.name, at: Date.now(), amount }
    const currUser = this._user$.value as User
    if(!currUser.coins || currUser.coins < amount) return
    currUser.coins -= amount
    currUser.moves.push(move)
    this._user$.next({...currUser})
    // this.loggedInUser.moves.push(move)
    // this.loggedInUser.coins -= amount
    // this.storageService.store('loggedinUser', this.loggedInUser)
    // return this.loggedInUser
  }
}
