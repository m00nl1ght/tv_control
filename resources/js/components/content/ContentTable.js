import React from 'react';
import ContentTableHead from './ContentTableHead';
import ContentTableBody from './ContentTableBody';

export default function ContentTable(props) {
    return(
        <table className="table table-hover">
            <ContentTableHead />
            {
               
                props.contentItemArr.map(item => {
                    return <ContentTableBody 
                        item = {item}
                        key = {item.id}
                        contentDelete = {props.contentDelete}
                    />
                })
            }
        </table>
    )
    
}