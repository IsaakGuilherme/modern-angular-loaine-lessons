import { Component, signal } from '@angular/core';
import { ProductCard } from '../product-card/product-card';
import { Product } from '../product';
import { MatIcon } from "@angular/material/icon";

@Component({
  selector: 'app-products-grid',
  imports: [ProductCard, MatIcon],
  templateUrl: './products-grid.html',
  styleUrl: './products-grid.css',
})
export class ProductsGrid {
  protected readonly products = signal<Product[]>([
    {
      id: 1,
      name: 'Premium Wireless Headphones',
      description: 'High-quality wireless headphones with noise cancellation and long battery life.',
      price: 199.99,
      originalPrice: 249.99,
    },
    {
      id: 2,
      name: 'Smart Fitness Watch',
      description: 'Track your fitness goals with this sleek and feature-packed smart watch.',
      price: 299.99,
    },
    {
      id: 3,
      name: 'Porttable Bluetooth Speaker',
      description: 'Enjoy your music on the go with this compact and powerful Bluetooth speaker.',
      price: 79.99,
      originalPrice: 99.99,
    }
  ])
}
