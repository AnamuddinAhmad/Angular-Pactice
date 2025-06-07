import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserData {
  private data: any[] = [];

  getAllData(): any {
    return this.data;
  }

  getSingleData(id: Number = -1): any {
    if (id === undefined || id === -1 || id == null) {
      return [{ id: -1, name: 'No user found !', email: 'User elay' }];
    }

    return this.data.filter((item: any) => item?.id === id);
  }

  setData(userData: any): void {
    if (!userData.id) {
      userData.id = this.data.length + 1;
    }
    this.data.push({ ...userData });
  }

  deleteData(id: number): void {
    this.data.splice(id, 1);
  }

  constructor() {}
}
