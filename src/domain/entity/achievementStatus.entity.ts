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
        type: 'enum',
        enum: Amount,
        default: Amount.nothing
    })
    changedMember: Amount;

    @Column({
        type: 'enum',
        enum: Amount,
        default: Amount.nothing
    })
    increaseMain: Amount;

    @Column({
        type: 'enum',
        enum: Amount,
        default: Amount.nothing
    })
    increaseNew: Amount;

    @Column({
        type: 'enum',
        enum: Related,
        default: Related.normal
    })
    changedRelation: Related;
}