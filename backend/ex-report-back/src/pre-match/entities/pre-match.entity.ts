import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany, OneToOne } from "typeorm";
import { PrematchCoverImageEntity } from "./pre-match-cover-image";
import { PrematchBodyImagesEntity } from "./pre-match-body-images";

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

    @OneToOne(()=>PrematchCoverImageEntity, (cover)=>cover.match)
    coverImage : PrematchCoverImageEntity;

    @OneToMany(()=>PrematchBodyImagesEntity, (body)=>body.match)
    bodyImages : PrematchBodyImagesEntity[];

    


}