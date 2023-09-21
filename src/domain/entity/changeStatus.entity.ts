import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { PerformanceResult } from "./performanceResult.entity";

@Entity()
export class ChangeStatus {
    // 사업 변경 현황

    @PrimaryColumn()
    id: number;

    @ManyToOne(
        () => PerformanceResult,
        performanceResult => performanceResult.changeStatus
    )
    @JoinColumn({ name: 'id' })
    performanceResult: PerformanceResult;

    @Column({
        type: 'date'
    })
    appliedDate: Date;

    @Column({
        type: 'date'
    })
    approvalDate: Date;

    @Column({
        type: 'varchar'
    })
    changedContent: string;
}