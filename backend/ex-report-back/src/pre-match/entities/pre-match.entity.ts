import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany, OneToOne } from "typeorm";
import { PreMatchCoverImageEntity } from "./pre-match-cover-image.entity";
import { PreMatchBodyImagesEntity } from "./pre-match-body-images.entity";

@Entity('prematch')
export class PreMatchEntity {

    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    title : string;

    @Column({type : 'text'})
    content : string;

    @CreateDateColumn()
    createdAt : Date;

    @UpdateDateColumn()
    updatedAt : Date;

    @OneToOne(()=>PreMatchCoverImageEntity, (cover)=>cover.match)
    coverImage : PreMatchCoverImageEntity;

    @OneToMany(()=>PreMatchBodyImagesEntity, (body)=>body.match)
    bodyImages : PreMatchBodyImagesEntity[];

    


}