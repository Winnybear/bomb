import React, {Component} from 'react';
import Grid from '../components/grid';
import './index.module.css';

// const Home: React.FC = () => {
//     return (
//         <div>
//             <div>
//                 <button>开始</button>
//             </div>
//             <Grid></Grid>
//         </div>
//     )
// }

enum CellType {
    space = '🐒',
    boom = '💣'
}

interface coordinate {
    x: number,
    y: number,
    type: CellType.space | CellType.boom
}

class Home extends Component{
    start(){
        const Arr: Array<coordinate> = [];
        const BombSet = this.createBomb(10, 10, 9);
    }
    createBomb(row: number, col: number, num: number){
        const arrSet:any = new Set();
        for(let i = 0; i < num; i ++){
            let x = Math.floor(Math.random() * col);
            let y = Math.floor(Math.random() * row);
            let xy = `${x},${y}`;
            while(arrSet.has(xy)){
                x = Math.floor(Math.random() * col);
                y = Math.floor(Math.random() * row);
                xy = `${x},${y}`;
            }
            arrSet.add(xy);
        };
        return arrSet;
    }
    click(){
    }
    render(){
        return (<div>
            <div>
                <button onClick={this.start}>Start</button>
                <Grid onClick={this.click} row={9} col={9} text={''}></Grid>
            </div>
        </div>)
    }
}

export default Home;