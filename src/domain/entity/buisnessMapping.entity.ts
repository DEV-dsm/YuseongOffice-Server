import { Column, Entity, JoinColumn, JoinTable, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import { Buisness } from "./buisness.entity";
import { Resident } from "./resident.entity";

@Entity()
export class BuisnessMapping {
    @PrimaryColumn({
        type: 'integer'
    })
    buisnessID: number; 

    @OneToMany(() => Buisness, buisness => buisness.id)
    buisness: Buisness;

    @PrimaryColumn({
        type: 'string'
    })
    phone: string;

    @ManyToOne(() => Resident, resident => resident.phone)
    @JoinTable()
    resident: Resident;

    @Column({
        type: 'varchar',
        nullable: true
    })
    rule: string;

}