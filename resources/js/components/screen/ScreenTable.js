import React from 'react';
import ScreenTableHead from './ScreenTableHead';
import ScreenTableBody from './ScreenTableBody';

// export default class ScreenTable extends React.Component {
//     state = { 
//         screenItem: [
//             { id: 1, title: 'Экран 1'},
//             { id: 2, title: 'Экран 2'},
//             { id: 3, title: 'Экран 3'}
//         ]
//     };

//     screenDelete = (event, index) => {
//         event.preventDefault();
//         console.log(index);
//     }

//     render() {
//         return(
//             <table className="table table-hover">
//                 <ScreenTableHead />
//                 {
//                     this.state.screenItem.map(item => {
//                         return <ScreenTableBody 
//                             item = {item}
//                             key = {item.id}
//                             screenDelete = {this.screenDelete}
//                         />
//                     })
//                 }
//             </table>
//         )
//     }
// }

export default function ScreenTable(props) {
    return(
        <table className="table table-hover">
            <ScreenTableHead />
            {
               
                props.screenItemArr.map(item => {
                    return <ScreenTableBody 
                        item = {item}
                        key = {item.id}
                        screenDelete = {props.screenDelete}
                    />
                })
            }
        </table>
    )
    
}