import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryColumn } from "typeorm";
import { Business } from "./business.entity";
import { OperationDetail } from "./operationDetail.entity";
import { RegularyMeeting } from "./regularyMeeting.entity";
import { RunningRule } from "./runningRule.entity";

@Entity()
export class BusinessInformation {
    // 단체소개서 4-2

    @PrimaryColumn({
        type: 'integer'
    })
    id: number;

    @OneToOne(
        () => Business,
        business => business.businessInformation
    )
    @JoinColumn({ name: 'id' })
    business: Business;

    @OneToOne(
        () => RegularyMeeting,
        regularyMeeting => regularyMeeting.businessInformation
    )
    regularyMeeting: RegularyMeeting;

    @OneToMany(
        () => RunningRule,
        runningRule => runningRule.businessInformation
    )
    runningRule: RunningRule;

    @OneToMany(
        () => OperationDetail,
        operationDetail => operationDetail.businessInformation
    )
    operationDetail: OperationDetail;

    @Column({
        type: 'varchar'
    })
    clubName: string;

    @Column({
        type: 'varchar'
    })
    leaderName: string;

    @Column({
        type: 'date'
    })
    clubBirth: Date;

    @Column({
        type: 'integer',
        default: 1
    })
    countOfMember: number;

    @Column({
        type: 'integer',
        default: 1
    })
    countOfManager: number;
    
    @Column({
        type: 'text',
    })
    purpose: string;

    @Column({
        type: 'text'
    })
    mainBusiness: string;

    @Column({
        type: 'boolean',
        default: false
    })
    hasSystem: boolean;
    
    @Column({
        type: 'boolean',
        default: false
    })
    hasRunnigRule: boolean;

    @Column({
        type: 'text'
    })
    mainActivity: string;

    @Column({
        type: 'boolean',
        default: false
    })
    whetherApplied: boolean;
}