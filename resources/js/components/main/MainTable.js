import React from 'react';
import MainTableHead from './MainTableHead';
import MainTableRow from './MainTableRow';
// import MainFormContentSelect from './MainFormContentSelect';

export default function MainTable(props) {
    return (  
        <table className="table table-hover">
            <MainTableHead />

            <tbody>
                {props.screenItemArr.map((item, index) => {
                    return (
                        <MainTableRow
                            item = {item}
                            index = {index}
                            key = {item.id}
                            screenUrl = {item.url}
                            contentArr = {props.contentItemArr}
                            isLoaded = {props.isLoaded}
                        />
                    )
                })}
            </tbody>
        </table>
    )
}
