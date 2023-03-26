import React from 'react';
import ComponenteB from "./ComponenteB"
import { dateClass } from '../models/dateClass';


function ComponenteA(){
const info = new dateClass ('Rodolfo', 'Caputto', 'rg@hotmail.com', true);

    return(
        <ComponenteB
       info = {info}/>
    )
}

export default ComponenteA