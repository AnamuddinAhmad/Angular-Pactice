import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class User {
  private storagekey = 'registeredUser';

  public setUserRegister(user: any): void {
    let currentUser = this.getUserRegister() || [];
    currentUser.push(user);
    localStorage.setItem(this.storagekey, JSON.stringify(currentUser));
  }
  public getUserRegister(): any[] {
    let data = localStorage.getItem(this.storagekey);
    return data ? JSON.parse(data) : [];
  }

  public clearRegisterUser(): void {
    return localStorage.removeItem(this.storagekey);
  }

  public findByEmail(email: string) {
    let users = this.getUserRegister();
    return users.find((user) => user.email === email);
  }
}
