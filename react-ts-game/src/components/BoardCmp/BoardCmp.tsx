import React from 'react';
import { CheeseCmp } from '../CheeseCmp/CheeseCmp';
import { CheeseType } from '../../types/enums';
import './BoardCmp.css';


interface Iprops {
    cheese: CheeseType[]
    onClick?: (index: number) => void
    isGameOver?: boolean
}

export const BoardCmp: React.FC<Iprops> =  function(props) {
    let list = props.cheese.map((item, index) => <CheeseCmp type={item} key={ index } click={ () => {
        if(props.onClick && !props.isGameOver) {
            props.onClick(index)
        }
    } }/>)
    return (
        <div className="board">
            {list}
        </div>

    )
}
BoardCmp.defaultProps = {
    isGameOver: false
}