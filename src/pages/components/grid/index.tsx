import React, { Component } from 'react';
import Cell from '../../../components/Cell';
import style from './index.module.css';
import { thisExpression } from '@babel/types';
import { string } from 'prop-types';

interface GridProps {
    row: number,
    col: number,
    onClick: VoidFunction,
    text: string
}

class Grid extends Component<GridProps>{
    constructor(props: GridProps) {
        super(props);
    }
    render() {
        const { row, col, onClick, text} = this.props;
        const CellArr: Array<any> = [];
        const rowStyle: object = {
            gridTemplateColumns: `repeat(${row}, 1fr)`
        }
        for(let i = 0; i < row; i++){
            for(let j = 0; j < col; j++){
                CellArr.push([i,j]);
            }
        }
        return (
            <div className={style.grid} style={rowStyle}>
                {
                    CellArr.map(function(item, index){
                        return (<Cell onClick = {onClick} key={index} text={text} x={item[0]} y={item[1]}></Cell>)
                    })
                }
            </div>
        )
    }
}

export default Grid