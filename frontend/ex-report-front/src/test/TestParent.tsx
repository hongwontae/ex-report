import {useRef} from 'react';
import TestChild from './TestChild';

function TestParent(){

    const titleRef = useRef<HTMLInputElement>(null);


    return (
        <>
        <TestChild titleRef={titleRef}></TestChild>
        </>
    )
}


export default TestParent