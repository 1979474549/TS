import React from 'react';
import { NextStatus, Status } from '../../types/enums';
import './StatusCmp.css'

interface Iprops {
    nextStatus: NextStatus
    gameStatus: Status
}

export function StatusCmp (props: Iprops) {
    let dom:JSX.Element; 
    if(props.gameStatus === Status.gamimg) {
        if(props.nextStatus === NextStatus.red) {
            dom = <div className="gaming redGo">红方下棋</div>
        } else {
            dom = <div className="gaming blackGo">黑方下棋</div>
        }
    } else if(props.gameStatus === Status.equal) {
        dom = <div className="equal">平局</div>
    } else {
        if(props.nextStatus === NextStatus.black) {
            dom = <div className="over redWin">红方胜利</div>
        } else {
            dom = <div className="over blackWin">黑方胜利</div>
        }
    }
    
    return (
        <div>
            {dom}
        </div>
    )
}