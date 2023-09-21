import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryColumn } from "typeorm";
import { BudgetDetail } from "./budgetDetail.entity";
import { BudgetPlan } from "./budgetPlan.entity";
import { Business } from "./business.entity";
import { BusinessDetail } from "./businessDetail.entity";
import { LocalResource } from "./localResource.entity";

@Entity()
export class BusinessPlan {
    // 사업계획서 4-5

    @PrimaryColumn({
        type: 'integer'
    })
    id: number;

    @OneToOne(
        () => Business,
        business => business.businessPlan
    )
    @JoinColumn({ name: 'id' })
    business: Business;

    @OneToMany(
        () => BusinessDetail,
        businessDetail => businessDetail.businessPaln
    )
    businessDetail: BusinessDetail;

    @OneToMany(
        () => LocalResource,
        localResource => localResource.businessPlan
    )
    localResource: LocalResource;

    @OneToOne(
        () => BudgetPlan,
        budgetPlan => budgetPlan.businessPlan
    )
    budgetPlan: BudgetPlan;

    @OneToMany(
        () => BudgetDetail,
        budgetDetail => budgetDetail.businessPlan
    )
    budgetDetail: BudgetDetail;

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