import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Key } from "../enums/key.enum";
import { Total } from "../enums/total.enum";
import { PerformanceResult } from "./performanceResult.entity";

@Entity()
export class PerformanceDetail {
    // 추진 성과 상세

    @PrimaryColumn()
    id: number;

    @ManyToOne(
        () => PerformanceResult,
        performanceResult => performanceResult.performanceDetail
    )
    @JoinColumn({ name: 'id' })
    performanceResult: PerformanceResult;

    @Column({
        type: 'integer',
        default: false
    })
    meeting: number;

    @Column({
        type: 'integer',
        default: false
    })
    education: number;

    @Column({
        type: 'integer',
        default: false
    })
    workshop: number;

    @Column({
        type: 'integer',
        default: false
    })
    festival: number;

    @Column({
        type: 'integer',
        default: false
    })
    etc: number;

    @Column({
        type: 'enum',
        enum: Total,
        default: Total.num
    })
    total: Total;
}