import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { Sex } from "../enums/sex.enum";
import { BuisnessMapping } from "./buisnessMapping.entity";

@Entity()
export class Resident {
    @PrimaryColumn({
        type: 'varchar'
    })
    phone: string;

    @OneToMany(() => BuisnessMapping, buisnessMapping => buisnessMapping.resident)
    buisnessMappping: BuisnessMapping;

    @Column({
        type: 'varchar'
    })
    name: string;

    @Column({
        type: 'varchar'
    })
    sex: Sex;

    @Column({
        type: 'date'
    })
    birth: Date;

    @Column({
        type: 'varchar'
    })
    location: string;
}

// sex birth location