import { IsBoolean, IsEnum, IsNumber, IsString } from "class-validator";
import { BuisnessType } from "src/domain/enums/buisnessType.enum";
import { ClubType } from "src/domain/enums/clubType.enum";
import { Loc } from "src/domain/enums/loc.enum";

export class CreateApplicationDto {

    @IsEnum(BuisnessType)
    businessType: BuisnessType;

    @IsString()
    clubName: string;

    @IsBoolean()
    isContiguous: boolean;

    @IsString()
    contiguousLocation: string;

    @IsString()
    businessName: string;

    @IsEnum(Loc)
    businessLocation: Loc;

    @IsNumber()
    totalBudget: number;

    @IsNumber()
    subsidy: number

    @IsNumber()
    selfInflicted: number;

    @IsEnum(ClubType)
    clubType: ClubType;

    @IsNumber()
    countOfManager: number;

    @IsNumber()
    countOfMember: number;

    @IsString()
    clubAddress: string;

    @IsNumber()
    clubRegisterNumber: number;

    @IsBoolean()
    isIncludingInfo: boolean;

    @IsBoolean()
    isIncludingMemberList: boolean;

    @IsBoolean()
    isIncludingPlan: boolean;

    @IsNumber()
    year: number;
}