import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class OrderDetailsService {

  constructor(private db: AngularFireDatabase) { }

  getOrderInfo(orderId: string) {
    return this.db.object('/orders/' + orderId);
  }
  
  getUserInfo(userId) {
    return this.db.object('/users/' + userId);
  }

  deleteOrder(orderId) {
    return this.db.object('/orders/' + orderId).remove();
  }

}
