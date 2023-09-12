import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from "typeorm";
import { Buisness } from "./buisness.entity";

@Entity()
export class BuisnessPlan {
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
    buisnessName: string;

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