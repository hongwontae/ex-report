import {create} from 'zustand';

type titleType = {
    title : string;
    setTitle : (title : string)=>void;
}

export const useTitleStore = create<titleType>((set)=>{
    return {
        title : '',
        setTitle : (title : string)=>{
            return set(()=>{
                return {title};
            })
        }
    }
});