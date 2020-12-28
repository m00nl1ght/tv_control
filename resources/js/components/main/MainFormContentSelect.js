import React from 'react';

export default function MainFormContentSelect(props) {

    return (
<form className='d-flex' action={props.url}>
<select className='custom-select' name="categotySelect">
    {
        props.contentArr.map(item => {
            return (
                <option key = {item.id} value={item.id}>{item.title}</option>
            )
        })
    }
</select>

<button className="btn btn-info ml-4" type="submit">Отправить</button>
</form>
    )
}
