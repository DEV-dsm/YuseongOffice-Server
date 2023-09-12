import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from "typeorm";
import { Type } from "../enums/type.enum";
import { Buisness } from "./buisness.entity";

@Entity()
export class Status {
    @PrimaryColumn({
        type: 'integer'
    })
    id: number;

    @OneToOne(() => Buisness)
    @JoinColumn({ name: 'id' })
    buisness: Buisness;

    @Column({
        type: 'integer'
    })
    year: number;

    @Column({
        type: 'varchar'
    })
    status: Type;
}