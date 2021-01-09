import React from 'react';

import MainTable from './MainTable';

export default class Main extends React.Component { 
    render() {
        return(
            <div>
                <div className='d-flex justify-content-between p-3'>
                    <h2>Дашборд управления контентом</h2>
                </div>

                <div>
                    <MainTable                                 
                        contentItemArr = {this.props.contentItemArr}
                        screenItemArr = {this.props.screenItemArr}
                        isLoaded = {this.props.isLoaded}
                    />
                </div>

            </div>
        )
    }
}