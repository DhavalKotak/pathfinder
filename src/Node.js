import React from 'react'

export const Node = (props) => {
    if(props.start === true){
        return(
            <div className='node' style={{backgroundColor: 'red',borderColor: 'grey'}}>
                
            </div>
        )
    }else if(props.end === true){
        return(
            <div className='node' style={{backgroundColor: 'blue',borderColor: 'grey'}}>
                
            </div>
        )
    }else if(props.close === true && props.path === false && props.seen === false){
        return(
            <div className='node close'>
                
            </div>
        )
    }else if(props.open === true){
        return(
            <div className='node open'>
                
            </div>
        )
    }else if(props.path === true){
        return(
            <div className='node path'>
                
            </div>
        )
    }else{
        return(
            <div className='node'>

            </div>
        )
    }
    
}