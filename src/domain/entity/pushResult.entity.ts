import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { PerformanceResult } from "./performanceResult.entity";

@Entity()
export class PushResult {
    // 사업 추진 결과

    @PrimaryColumn()
    id: number;

    @ManyToOne(
        () => PerformanceResult,
        performanceResult => performanceResult.pushResult
    )
    @JoinColumn({ name: 'id' })
    performanceResult: PerformanceResult;

    @Column({
        type: 'varchar'
    })
    businessName: string;

    @Column({
        type: 'varchar'
    })
    businessResult: string;

    @Column({
        type: 'text'
    })
    method: string;

    @Column({
        type: 'text'
    })
    evaluation: string;
}