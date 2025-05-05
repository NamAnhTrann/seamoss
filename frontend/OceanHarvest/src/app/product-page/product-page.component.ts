import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Product } from '../../model/Product_model';
import { DbService } from '../../services/db.service';

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css'
})
export class ProductPageComponent  {
  productId: string = '';
  product: Product[] = [];
  constructor(private db:DbService, private router:Router){}

  ngOnInit() {
    this.getAllProducts();
  }

  getAllProducts(){
    this.db.getAllProducts().subscribe((data:any)=>{
      this.product = data;
    })
  }

  viewProduct(id:any){
    this.router.navigate(["/view-product", id])
}

addToCart(productId: string) {
  const qty = 1; // Or get dynamic value if needed
  this.db.addToCart(productId, qty).subscribe(
    (data: any) => {
      this.getAllProducts();
      console.log(data);
      alert("Item added to cart successfully!");
    },
    (err) => {
      if (err.status === 401) {
        this.router.navigate(["/login-page"]);
      } else {
        console.error("Error adding to cart:", err);
        alert("Error adding to cart. Please try again.");
      }
    }
  );
}

}





