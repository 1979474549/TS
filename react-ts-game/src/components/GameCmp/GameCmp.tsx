import React from 'react';
import { BoardCmp } from '../BoardCmp/BoardCmp';
import { CheeseType, Status, NextStatus } from '../../types/enums';
import './GameCmp.css';
import { StatusCmp } from '../StatusCmp/StatusCmp';

interface Istate {
    status: Status,
    list: CheeseType[],
    nextStatus: NextStatus
}

export class GameCmp extends React.Component<{}, Istate> {
    state: Istate = {
        status: Status.gamimg,
        list: [],
        nextStatus: NextStatus.black
    }
    render() {
        return (
            <div className="game">
                <h3>井字棋游戏</h3>
                <StatusCmp nextStatus={ this.state.nextStatus } gameStatus = { this.state.status }/>
                <BoardCmp
                    cheese={this.state.list}
                    isGameOver={this.state.status !== Status.gamimg}
                    onClick={(n) => {
                        this.handleClick(n)
                    }} />
                <button onClick={ () => {
                    this.restart()
                } }>重新开始</button>
            </div>
        )
    }
    restart () {
        this.init();
    }
    handleClick(n: number) {
        let list = this.state.list;
        if (this.state.nextStatus === NextStatus.black) {

            list[n] = CheeseType.black;
            this.setState({
                status: this.getStatus(n, this.state.list),
                nextStatus: NextStatus.red

            })
        } else {

            list[n] = CheeseType.red;
            this.setState({
                status: this.getStatus(n, this.state.list),
                nextStatus: NextStatus.black
            })
        }
    }
    getStatus(index: number, list: CheeseType[]): Status {
        let gameState: Status = Status.gamimg;
        //判断是否有一方获胜
        let horMin = Math.floor(index / 3) * 3;
        let verMin = index % 3;
        if ((list[horMin] === list[horMin + 1] && list[horMin] === list[horMin + 2])
        || (list[verMin] === list[verMin + 3] && list[verMin] === list[verMin + 6])
        || (list[0] === list[4] && list[0] === list[8] && list[0] !== CheeseType.null)
        || (list[2] === list[4] && list[2] === list[6] && list[2] !== CheeseType.null)) {
            if (this.state.nextStatus === NextStatus.red) {
                gameState = Status.redWin
            } else {
                gameState = Status.blackWin
            }
        }else if(!list.includes(CheeseType.null)) {
            gameState = Status.equal
        }
        //判断是否平局
        return gameState;
    }
    componentDidMount() {
        this.init();
    }
    init() {
        let cheeseList: CheeseType[] = [];
        for (let i = 0; i < 9; i++) {
            cheeseList.push(CheeseType.null);
        }
        this.setState({
            list: cheeseList,
            nextStatus: NextStatus.black,
            status: Status.gamimg
        })
    }
}