import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductService {
  constructor(@InjectRepository(Product) private productRepository: Repository<Product>) { }
 public create(createProductDto: CreateProductDto) {
    const product = this.productRepository.create(createProductDto);
    return this.productRepository.save(product)
  }

 public  findAll() {
    return this.productRepository.find()
  }

  public async remove(id: number) {
    const product = await this.productRepository.findOne(id);
    if (!product) throw new NotFoundException('Product not found!');
    return this.productRepository.remove(product);
  }
}