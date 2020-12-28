import React from 'react';

export default function MainTableBody(props) {
    return (
        <tbody>
            <tr>
                <td className = 'text-center'>{props.item.id}</td>

                <td className = 'text-center'>{props.item.title}</td>

                <td className='d-flex justify-content-center'>
                    {props.mainFormContentSelect}
                </td>

                <td className='text-center'>
                        <a className='btn btn-info align-item-center' href='/'>Слайдер</a>
                </td>        
            </tr>
        </tbody>
    )
}