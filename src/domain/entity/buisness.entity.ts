import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { BuisnessType } from "../enums/buisnessType.enum";
import { ClubType } from "../enums/clubType.enum";
import { BuisnessInformation } from "./buisnessInformation.entity";
import { Status } from "./status.entity";

@Entity()
export class Buisness {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(() => Status)
    @JoinColumn({ name: 'id' })
    status: Status;

    @OneToOne(() => BuisnessInformation)
    @JoinColumn({ name: 'id' })
    buisnessInformation: BuisnessInformation;

    @Column({
        type: 'varchar'
    })
    buisnessType: BuisnessType;

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
    buisnessName: string;

    @Column({
        type: 'varchar'
    })
    buisnessLocation: string;

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