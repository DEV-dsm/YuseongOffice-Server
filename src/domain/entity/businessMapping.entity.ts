import { Column, Entity, JoinColumn, JoinTable, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import { Business } from "./business.entity";
import { Resident } from "./resident.entity";

@Entity()
export class BusinessMapping {
    // 주민참여명부 4-3

    @PrimaryColumn({
        type: 'integer'
    })
    id: number; 

    @ManyToOne(
        () => Business, 
        business => business.businessMapping
    )
    @JoinColumn({ name: 'id' })
    business: Business;

    @PrimaryColumn({
        type: 'varchar'
    })
    phone: string;

    @ManyToOne(
        () => Resident, 
        resident => resident.phone
    )
    @JoinColumn({ name: 'phone' })
    resident: Resident;

    @Column({
        type: 'varchar',
        nullable: true
    })
    rule: string;

}