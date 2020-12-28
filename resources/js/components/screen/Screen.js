import React, {useState} from 'react';

import ScreenModal from './ScreenModal';
import ScreenTable from './ScreenTable';


export default function Screen(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // let [screenItemArr, setScreenItemArr] = useState([
    //     { id: 0, title: 'Экран 1', url: '', comment: ''},
    //     { id: 1, title: 'Экран 2', url: '', comment: ''},
    //     { id: 2, title: 'Экран 3', url: '', comment: ''}
    // ]);

    const screenAdd = (item) => {
        props.setScreenItemArr([
            ...props.screenItemArr, 
            {'id': props.screenItemArr.length, ...item}
        ])
    }

    const screenDelete = (event, id) => {
        event.preventDefault()

        props.setScreenItemArr(props.screenItemArr.filter(item => item.id !== id))
    }

    return (
        <div>
            <div className = 'd-flex justify-content-between p-3'>
                <h2>Список установленных экранов</h2>

                <button 
                    className = 'btn btn-success'
                    onClick = {handleShow}
                >Добавить экран</button>
            </div>

            <ScreenModal 
                handleClose = {handleClose}
                show = {show}
                screenAdd = {screenAdd}
            />

            <ScreenTable 
                screenItemArr = {props.screenItemArr}
                screenDelete = {screenDelete}
            />
        </div>
    )
}