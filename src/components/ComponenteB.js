import React from 'react';
import { dateClass } from '../models/dateClass';
import PropTypes from 'prop-types'





function ComponenteB({info}){
    

    
    return( 
        <>
       <h1>Hola {info.nombre} {info.apellido}</h1> 
       <h1> Tu mail es {info.email}</h1>
       <h1> {info.conectado? 'Contacto en línea' : 'Contacto no disponible'}</h1>
        
       
       </>
    )

}

ComponenteB.propTypes = {
    dateClass: PropTypes.instanceOf(dateClass)
}


export default ComponenteB