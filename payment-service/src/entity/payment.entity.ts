import { ApiProperty } from "@nestjs/swagger";
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Payment {
    @PrimaryGeneratedColumn()
    id: number;
    
    @ApiProperty()
    @Column()
    title: string;
  
    @Column({ nullable: true })
    price: string;
  
    @Column({ default: true })
    description: string;
  
    @Column({ default: false })
    status: boolean;
  
    @CreateDateColumn({ type: 'timestamp', nullable: true })
    createdAt: Date;
  
    @UpdateDateColumn({ type: 'timestamp', nullable: true })
    updatedAt: Date;
}
