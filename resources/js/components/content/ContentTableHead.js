import React from 'react';

export default class ContentTableHead extends React.Component {
    render() {
        return(
            <thead>
                <tr>
                    <th className='text-center' scope="col">Номер</th>
                    <th className='text-center' scope="col">Название контента</th>
                    <th className='text-center' scope="col">Адрес контeнта</th>
                    <th className='text-center' scope="col">Кнопка удаления</th>         
                </tr>
            </thead>
        )
    }
}