import { Controller, Get, Param } from '@nestjs/common';

// importing products and the definition of a product
import products, { Product } from 'src/products';

@Controller('products')
export class ProductsController {
  constructor() {}

  // return an array of products that is going to be from products
  @Get()
  async index(): Promise<Product[]> {
    return products;
  }

  // localhost:8080/products/1 will return product details for product id == 1
  @Get(':id')
  async show(@Param('id') id: string): Promise<Product> {
    return products.find((product) => product.id === parseInt(id));
  }
}
