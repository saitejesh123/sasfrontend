import { Component,OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Cart } from '../cart';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-viewcart',
  templateUrl: './viewcart.component.html',
  styleUrls: ['./viewcart.component.css']
})
export class ViewcartComponent implements OnInit{

  
  cart: Cart[] = [];
    
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(public cartService: CartService) { }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.cartService.getAll().subscribe((data: Cart[])=>{
      this.cart = data;
      console.log(this.cart);
    })  
  }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  deletePost(id:number){
    this.cartService.delete(id).subscribe(res => {
         this.cart = this.cart.filter(cart => cart.addid !== id);
         console.log('User deleted successfully!');
    })
  }


}
