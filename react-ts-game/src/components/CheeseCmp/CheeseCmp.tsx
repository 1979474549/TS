import React from 'react';
import './CheeseCmp.css';
import { CheeseType } from '../../types/enums';



interface Iprops {
    type: CheeseType
    click?: () => void
}

export function CheeseCmp (props: Iprops) {
    let content = null;
    if(props.type === CheeseType.black) {
        content = <div className="black cheese-content" ></div>
    } else if(props.type === CheeseType.red) {
        content = <div className="red cheese-content" ></div>
    }
    return (
        <div className="cheese" onClick={ () => {
            if(props.type === CheeseType.null && props.click) {
                props.click();
            }
        } }>
            { content }
        </div>
    )
}