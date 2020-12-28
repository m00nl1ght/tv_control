import React from 'react';
import MenuItem from './MenuItem';

export default class MainMenu extends React.Component {
    
    handleClick(index) {
        this.props.menuItems.map(item => {
            item.checked = false;

            if (item.id === index) {
                item.checked = !item.checked;
            }

            return item
        })
        
        this.setState({})
    }

    render() {
        return (
            <nav className = "navbar navbar-expand navbar-dark bg-dark">
                <div className = "collapse navbar-collapse">
                    <ul className = "navbar-nav mr-auto">
                        { this.props.menuItems.map(item => {
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

