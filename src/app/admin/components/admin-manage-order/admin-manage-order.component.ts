import 'rxjs/operator/take';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderDetailsService } from 'app/shared/services/order-details.service';

@Component({
  selector: 'app-admin-manage-order',
  templateUrl: './admin-manage-order.component.html',
  styleUrls: ['./admin-manage-order.component.css']
})
export class AdminManageOrderComponent implements OnInit {
  order$;
  date;
  order = {
    items: [],
    userId: '',
    datePlaced: 0
  };
  user = {};

  constructor(
    private orderDetails: OrderDetailsService, 
    private route: ActivatedRoute,
    private router: Router) { }

  async ngOnInit() {
    const orderId = this.route.snapshot.paramMap.get("id")
    this.order$ = this.orderDetails.getOrderInfo(orderId);
    await this.order$.take(1).subscribe(order =>  {
      this.order = order;
      this.date = new Date(order.datePlaced).toLocaleString();
    });

    let userInfo = await this.orderDetails.getUserInfo(this.order.userId);
    userInfo.take(1).subscribe(info => this.user = info[this.order.userId]);
  }

  get totalOrderPrice() {
    let sum = 0;

    for(let item of this.order.items) {
      sum += item.totalPrice;
    }

    return sum;
  }

  deleteOrder(orderId) {
    this.orderDetails.deleteOrder(orderId);
    this.router.navigate(['/admin/orders'])
  }

}
