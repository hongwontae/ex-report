export type ItemsType = {
    id : number;
    title : string;
    content : string;
    createdAt : string;
    updatedAt : string;
    coverImage : {
        id : number;
        ['public_id'] : string;
        format : string;
        ['secure_id'] : string;
        alt : string
    }
}

export interface PreMatchShowType<T> {
    items : T[],
    total : number,
    currentPage : number,
    totalPages : number
}

