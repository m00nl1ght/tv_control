import React from 'react';

export default class MainTableHead extends React.Component {
    render() {
        return(
            <thead>
                <tr>
                    <th className='text-center' scope="col">Номер</th>
                    <th className='text-center' scope="col">Название экрана</th>
                    <th className='text-center' scope="col">Отправить на экран</th>
                    <th className='text-center' scope="col">Установить картинки</th>         
                </tr>
            </thead>
        )
    }
}