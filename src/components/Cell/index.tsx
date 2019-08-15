import React, {Component} from 'react';

// const Cell: React.FC = () => {
//     return (<span role="img"></span>)
// }

interface CellState{
    status: boolean,
    x: number,
    y: number
}

interface CellProps{
    onClick: VoidFunction,
    text: string,
    x: number,
    y: number
}

class Cell extends Component<CellProps, CellState>{
    constructor(props: CellProps,state: CellState){
        super(props);
        this.state = {
            status: false,
            x: this.props.x,
            y: this.props.y
        }
    }
    render(){
        const {text, onClick} = this.props;
        return (<span onClick={onClick}>{text}</span>)
    }
}

export default Cell