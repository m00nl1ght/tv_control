import React from 'react';
import MenuItem from './MenuItem';

export default class MainMenu extends React.Component {
    constructor(props) {
        super(props);

        let menuItems = [
            { id: 1, checked: false, title: 'Главная', url: '/' },
            { id: 2, checked: false, title: 'Добавить URL', url: '/content' },
            { id: 3, checked: false, title: 'Добавить экран', url: '/screen' },
        ];

        menuItems = menuItems.map(item => { 
            if(item.url == window.location.pathname) {
                item.checked = !item.checked;
            }

            return item;
        });

        this.state = {
            menuItems: menuItems
        };
    }

    handleClick(index) {
        this.state.menuItems.map(item => {
            item.checked = false;

            if (item.id === index) {
                item.checked = !item.checked;
            }

            return item
        })
        
        this.setState({});
    }

    render() {
        return (
            <nav className = "navbar navbar-expand navbar-dark bg-dark">
                <div className = "collapse navbar-collapse">
                    <ul className = "navbar-nav mr-auto">
                        { this.state.menuItems.map(item => {
                            return <MenuItem 
                                item = {item}
                                key = {item.id}
                                onClick = {() => this.handleClick(item.id)}
                            />
                        })}
                    </ul>
                </div>
            </nav>
        )
    }
}

