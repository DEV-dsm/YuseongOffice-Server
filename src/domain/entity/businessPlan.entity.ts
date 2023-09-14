import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from "typeorm";
import { Business } from "./business.entity";

@Entity()
export class BusinessPlan {
    // 사업계획서 4-5

    @PrimaryColumn({
        type: 'integer'
    })
    id: number;

    @OneToOne(() => Business)
    @JoinColumn({ name: 'id' })
    business: Business;

    @Column({
        type: 'varchar'
    })
    businessName: string;

    @Column({
        type: 'text'
    })
    evaluation: string;

    @Column({
        type: 'text'
    })
    purposeAndBackGround: string;

    @Column({
        type: 'text'
    })
    benefit: string;

    @Column({
        type: 'varchar'
    })
    period: string;

    @Column({
        type: 'varchar'
    })
    location: string;

    @Column({
        type: 'varchar'
    })
    target: string;

    @Column({
        type: 'text'
    })
    method: string;
}