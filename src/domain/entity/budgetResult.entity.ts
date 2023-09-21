
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Key } from "../enums/key.enum";
import { ResultReport } from "./resultReport.entity";

@Entity()
export class BudgetResult {
    // 예산 상세 결과

    @PrimaryColumn()
    id: number;

    @ManyToOne(
        () => ResultReport,
        resultReport => resultReport.budgetResult
    )
    @JoinColumn({ name: 'id' })
    resultReport: ResultReport;

    @Column({
        type: 'integer'
    })
    subsidy: number;

    @Column({
        type: 'integer'
    })
    burden: number;

    @Column({
        type: 'enum',
        enum: Key,
        default: Key.budgetSum
    })
    key: Key;
}