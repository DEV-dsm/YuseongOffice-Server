import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from "typeorm";
import { BusinessInformation } from "./businessInformation.entity";

@Entity()
export class RegularyMeeting {
    // 정기 회의

    @PrimaryColumn({
        type: 'integer'
    })
    id: number;

    @OneToOne(
        () => BusinessInformation,
        businessInformation => businessInformation.regularyMeeting
    )
    @JoinColumn({ name: 'id' })
    businessInformation: BusinessInformation;

    @Column({
        type: 'varchar'
    })
    type: string;

    @Column({
        type: 'varchar'
    })
    frequency: string;

    @Column({
        type: 'integer',
        default: false
    })
    participants: number;
}