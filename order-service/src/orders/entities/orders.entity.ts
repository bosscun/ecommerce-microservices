import { ApiProperty } from '@nestjs/swagger';
import { Product } from 'src/product/entities/product.entity';
import { Column, PrimaryGeneratedColumn, CreateDateColumn, Entity, UpdateDateColumn, OneToMany } from 'typeorm';
@Entity()
export class Orders {
  @PrimaryGeneratedColumn()
  id: number;
  
  @ApiProperty()
  @Column()
  title: string;

  @Column({ default: true })
  status: boolean;

  @Column({ type: 'decimal', precision: 10, scale: 2, default: 0 })
  totalPrice: number;

  @Column({ nullable: true })
  description: string

  @Column("simple-array")
  product: string [];

  @CreateDateColumn({ type: 'timestamp', nullable: true })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp', nullable: true })
  updatedAt: Date;
}
