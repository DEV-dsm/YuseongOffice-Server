import { Column, Entity, JoinColumn, JoinTable, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { BuisnessType } from "../enums/buisnessType.enum";
import { ClubType } from "../enums/clubType.enum";
import { BusinessInformation } from "./businessInformation.entity";
import { BusinessMapping } from "./businessMapping.entity";
import { BusinessPlan } from "./businessPlan.entity";
import { Status } from "./status.entity";

@Entity()
export class Business {
    // 사업계획서 4-1

    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(
        () => Status,
        status => status.buisness
    )
    status: Status;

    @OneToOne(
        () => BusinessInformation,
        businessInformation => businessInformation.business
    )
    businessInformation: BusinessInformation;

    @OneToMany(
        () => BusinessMapping, 
        businessMapping => businessMapping.business
    )
    businessMapping: BusinessMapping;

    @OneToOne(
        () => BusinessPlan,
        businessPlan => businessPlan.business
    )
    businessPlan: BusinessPlan;

    @Column({
        type: 'varchar'
    })
    businessType: BuisnessType;

    @Column({
        type: 'varchar'
    })
    clubName: string;

    @Column({
        type: 'boolean',
        default: false
    })
    isContiguous: boolean;

    @Column({
        type: 'varchar',
        nullable: true,
    })
    contiguousLocation: string;

    @Column({
        type: 'varchar'
    })
    businessName: string;

    @Column({
        type: 'varchar'
    })
    businessLocation: string;

    @Column({
        type: 'integer',
        default: 0
    })
    totalBudget: number;

    @Column({
        type: 'integer',
        default: 0
    })
    subsidy: number;

    @Column({
        type: 'integer',
        default: 0,
    })
    selfInflicted: number;

    @Column({
        type: 'varchar',
    })
    clubType: ClubType;

    @Column({
        type: 'integer',
        default: 1
    })
    countOfManager: number;

    @Column({
        type: 'integer',
        default: 1
    })
    countOfMember: number;

    @Column({
        type: 'varchar',
        nullable: true
    })
    clubAddress: string;

    @Column({
        type: 'integer',
        default: 0
    })
    clubRegisterNumber: number;

    @Column({
        type: 'boolean',
        default: false
    })
    isIncludingInfo: boolean;

    @Column({
        type: 'boolean',
        default: false
    })
    isIncludingMemberList: boolean;

    @Column({
        type: 'boolean',
        default: false
    })
    isIncludingPlan: boolean;

    @Column({
        type: 'integer',
    })
    year: number;
}