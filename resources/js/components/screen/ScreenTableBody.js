import React from 'react';

export default function ScreenTableBody(props) {
    return (
        <tbody>
            <tr>
                <td className = 'text-center'>{props.item.id}</td>

                <td className = 'text-center'>{props.item.title}</td>

                <td className ='text-center'>
                    <a className ='btn btn-danger align-item-center' 
                        href = '/'
                        onClick = {(event) => props.screenDelete(event, props.item.id)}
                    
                    >Удалить</a>
                </td>       
            </tr>
        </tbody>
    )
}