import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Type } from "../enums/type.enum";
import { BusinessPlan } from "./businessPlan.entity";

@Entity()
export class LocalResource {
    // 지역 자원 연계 및 활용 방안

    @PrimaryColumn({
        type: 'integer'
    })
    id: number;

    @ManyToOne(
        () => BusinessPlan,
        businessPlan => businessPlan.localResource
    )
    @JoinColumn({ name: 'id' })
    businessPlan: BusinessPlan;

    @Column({
        type: 'enum',
        enum: Type,
        default: Type.judge,
        nullable: true
    })
    type: Type;

    @Column({
        type: 'varchar'
    })
    cooperation: string;

    @Column({
        type: 'text'
    })
    detail: string;
}