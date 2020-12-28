import React from 'react';

export default function ContentTableBody(props) {
    return (
        <tbody>
            <tr>
                <td className = 'text-center'>{props.item.id}</td>

                <td className = 'text-center'>{props.item.title}</td>

                <td className='text-center'>{props.item.url}</td>

                <td className ='text-center'>
                    <a className ='btn btn-danger align-item-center' 
                        href = '/'
                        onClick = {(event) => props.contentDelete(event, props.item.id)}
                    
                    >Удалить</a>
                </td>       
            </tr>
        </tbody>
    )
}