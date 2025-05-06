import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { DbService } from '../../services/db.service';
import { Cart } from '../../model/Cart_model';

@Component({
  selector: 'app-order-summary-page',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './order-summary-page.component.html',
  styleUrl: './order-summary-page.component.css'
})
export class OrderSummaryPageComponent {
  cart: Cart | null = null;
  constructor(private db: DbService, private router: Router) {}

  ngOnInit(){
    this.getCartItems();
  }

  getCartItems() {
    this.db.getCartItems().subscribe((data: any) => {
      this.cart = data;
      console.log(this.cart);
    });
  }

  cartTotalPrice() {
    let totalPrice = 0;
    if(this.cart?.items){
      this.cart.items.forEach((item) => {
        totalPrice += item.product_id.productPrice * item.quantity;
      });
    }
    return totalPrice;
  }
}
