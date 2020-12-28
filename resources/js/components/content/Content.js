import React, {useState} from 'react';

import ContentModal from './ContentModal';
import ContentTable from './ContentTable';

export default function Content(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // let [contentItemArr, setContentItemArr] = useState([
    //     { id: 0, title: 'Контент 1', url: '/content1'},
    //     { id: 1, title: 'Контент 2', url: '/content2'},
    //     { id: 2, title: 'Контент 3', url: '/content3'}
    // ]);

    const contentAdd = (item) => {
        props.setContentItemArr([
            ...props.contentItemArr, 
            {'id': props.contentItemArr.length, ...item}
        ])
    }

    const contentDelete = (event, id) => {
        event.preventDefault()

        props.setContentItemArr(props.contentItemArr.filter(item => item.id !== id))
    }

    return (
        <div>
            <div className='d-flex justify-content-between p-3'>
                <h2>Список доступных дашбодов</h2>

                <button 
                    className='btn btn-success'
                    onClick={ handleShow  }
                >Добавить ссылку</button>
            </div>

            <ContentModal 
                handleClose = {handleClose}
                show = {show}
                contentAdd = {contentAdd}
            />

            <div>
                <ContentTable 
                    contentItemArr = {props.contentItemArr}
                    contentDelete = {contentDelete}
                />
            </div>

        </div>
    )
}