import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from "typeorm";
import { Type } from "../enums/type.enum";
import { Business } from "./business.entity";

@Entity()
export class Status {
    // 상태

    @PrimaryColumn({
        type: 'integer'
    })
    id: number;

    @OneToOne(() => Business)
    @JoinColumn({ name: 'id' })
    buisness: Business;

    @Column({
        type: 'integer'
    })
    year: number;

    @Column({
        type: 'varchar'
    })
    status: Type;
}