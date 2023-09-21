import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from "typeorm";
import { Amount } from "../enums/amount.enum";
import { Related } from "../enums/related.enum";
import { PerformanceResult } from "./performanceResult.entity";

@Entity()
export class AchievementStatus {
    // 기대 사항 달성 정도

    @PrimaryColumn()
    id: number;

    @OneToOne(
        () => PerformanceResult,
        performanceResult => performanceResult.achievementStatus
    )
    @JoinColumn({ name: 'id' })
    performanceResult: PerformanceResult;

    @Column({
        type: 'varchar'
    })
    changedMember: Amount;

    @Column({
        type: 'varchar'
    })
    increaseMain: Amount;

    @Column({
        type: 'varchar'
    })
    increaseNew: Amount;

    @Column({
        type: 'varchar'
    })
    changedRelation: Related;
}