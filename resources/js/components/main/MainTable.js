import React from 'react';
import MainTableHead from './MainTableHead';
import MainTableBody from './MainTableBody';
import MainFormContentSelect from './MainFormContentSelect';

export default function MainTable(props) {
    return (
        
        <table className="table table-hover">
            
            <MainTableHead />
            {
                props.screenItemArr.map(item => {
                    return (
                        <MainTableBody
                            item = {item}
                            key = {item.id}
                            mainFormContentSelect = {
                                <MainFormContentSelect
                                    url = {item.url}
                                    contentArr = {props.contentItemArr}
                                />}
                        />
                    )
                })
            }
        </table>
    )
}
