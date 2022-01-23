import {useState,useEffect} from 'react';

export default function useValidator({
    validateType,
    newData,
    oldData
}){

    const [validatorState,setValidatorState]=useState({
        type:validateType,
        old:oldData,
        new:newData
    })

    const [isNew,setIsNew]=useState();

    if(newData==oldData) setIsNew(false)
    else setIsNew(true);

    return { isNew }


}