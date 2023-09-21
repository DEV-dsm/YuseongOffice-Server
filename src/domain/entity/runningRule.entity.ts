import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { BusinessInformation } from "./businessInformation.entity";

@Entity()
export class RunningRule {
    // 운영 규정

    @PrimaryColumn({
        type: 'integer'
    })
    id: number;

    @ManyToOne(
        () => BusinessInformation,
        businessInformation => businessInformation.runningRule
    )
    @JoinColumn({ name: 'id' })
    businessInformation: BusinessInformation;

    @Column({
        type: 'text'
    })
    rule: string;
}