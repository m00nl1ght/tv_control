import React, {useState} from 'react';

import ContentModal from './ContentModal';
import ContentTable from './ContentTable';

export default function Content(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const contentAdd = (item) => {
        props.setContentItemArr([
            ...props.contentItemArr, 
            {...item}
        ])
    }

    const contentDelete = (event, id) => {
        event.preventDefault()

        fetch(`/api/content/destroy/${id}`)
        .then(response => {
            if(response.ok) {
                props.setContentItemArr(props.contentItemArr.filter(item => item.id !== id))
            }
        }) 
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
            
            <ContentTable 
                contentItemArr = {props.contentItemArr}
                contentDelete = {contentDelete}
            />
        </div>
    )
}