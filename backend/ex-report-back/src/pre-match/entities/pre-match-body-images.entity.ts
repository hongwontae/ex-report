import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { PreMatchEntity } from "./pre-match.entity";

@Entity('prematch_body_images')
export class PreMatchBodyImagesEntity{

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

    @ManyToOne(()=>PreMatchEntity, (match)=>match.bodyImages, {nullable : false, onDelete : 'CASCADE'})
    match : PreMatchEntity;

}