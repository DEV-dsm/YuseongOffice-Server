import { Column, Entity, OneToMany, OneToOne, PrimaryColumn } from "typeorm";
import { AchievementStatus } from "./achievementStatus.entity";
import { ChangeStatus } from "./changeStatus.entity";
import { PerformanceDetail } from "./performanceDetail.entity";
import { PushResult } from "./pushResult.entity";
import { UsingResource } from "./usingResource.entity";

@Entity()
export class PerformanceResult {
    // 사업 추진 성과

    @PrimaryColumn()
    id: number;

    @OneToMany(
        () => PerformanceDetail,
        performanceDetail => performanceDetail.performanceResult
    )
    performanceDetail: PerformanceDetail;

    @OneToMany(
        () => ChangeStatus,
        changeStatus => changeStatus.performanceResult
    )
    changeStatus: ChangeStatus;

    @OneToMany(
        () => PushResult,
        pushResult => pushResult.performanceResult
    )
    pushResult: PushResult;

    @OneToOne(
        () => AchievementStatus,
        achievementStatus => achievementStatus.performanceResult
    )
    achievementStatus: AchievementStatus;

    @OneToOne(
        () => UsingResource,
        usingResource => usingResource.performanceResult
    )
    usingResource: UsingResource;

    @Column({
        type: 'varchar'
    })
    businessType: string;

    @Column({
        type: 'varchar'
    })
    businessName: string;

    @Column({
        type: 'varchar'
    })
    clubName: string;

    @Column({
        type: 'varchar'
    })
    period: string;

    @Column({
        type: 'varchar'
    })
    location: string;
}