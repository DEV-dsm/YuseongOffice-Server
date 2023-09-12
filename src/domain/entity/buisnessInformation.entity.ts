import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from "typeorm";
import { Buisness } from "./buisness.entity";

@Entity()
export class BuisnessInformation {
    @PrimaryColumn({
        type: 'integer'
    })
    id: number;

    @OneToOne(() => Buisness)
    @JoinColumn({ name: 'id' })
    buisness: Buisness;

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
    mainBuisness: string;

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
    mainActivities: string;

    @Column({
        type: 'boolean',
        default: false
    })
    whetherApplied: boolean;
}