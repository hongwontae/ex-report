import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { PreMatchEntity } from "./pre-match.entity";

@Entity('prematch_cover_image')
export class PreMatchCoverImageEntity{
    
    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    public_id : string;

    @Column()
    format : string;

    @Column()
    secure_url : string;

    @Column()
    alt : string;

    @OneToOne(()=>PreMatchEntity, (match)=>match.coverImage, {nullable : false, onDelete : 'CASCADE'})
    @JoinColumn()
    match : PreMatchEntity;

}