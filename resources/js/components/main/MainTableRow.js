import React from 'react';
import MainFormSelect from './MainFormSelect';

export default class MainTableRow extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isConnected: true
        }

        this.notConnected = this.notConnected.bind(this);
    }

    notConnected() {
        this.setState({isConnected: false})
    }

    render() {
        let forms

        if(this.state.isConnected) {
            forms = <>
                <td className='d-flex justify-content-center'>
                    <MainFormSelect 
                        screenUrl = {this.props.screenUrl}
                        contentArr = {this.props.contentArr}
                        isLoaded = {this.props.isLoaded}
                        notConnected = {this.notConnected}/>
                </td>

                <td className='text-center'>
                    <a className='btn btn-info align-item-center' href='/'>Слайдер</a>
                </td>
            </>
        } else {
            forms = <td colSpan='2'>Данный экран недоступен/отключен</td>
        }

        return (
            <tr className={this.state.isConnected ? '' : 'bg-danger'}>
                <td className = 'text-center'>{this.props.index}</td>
    
                <td className = 'text-center'>{this.props.item.title}</td>

                {forms}     
            </tr>
        )
    }
}
