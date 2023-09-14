import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { Sex } from "../enums/sex.enum";
import { BusinessMapping } from "./businessMapping.entity";

@Entity()
export class Resident {
    // 주민

    @PrimaryColumn({
        type: 'varchar'
    })
    phone: string;

    @OneToMany(() => BusinessMapping, businessMapping => businessMapping.resident)
    businessMappping: BusinessMapping;

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