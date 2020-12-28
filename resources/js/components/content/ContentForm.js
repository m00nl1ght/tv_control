import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default class ContentForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            url: ''
        }

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });

        console.log('ff')
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.props.addScreen)  
    }

    render() {
        return (
            <Form onSubmit={(e) => {
                e.preventDefault();
                this.props.contentAdd(this.state);
                this.props.onHide();
            }}>
                <Form.Group controlId="formBasicName">
                    <Form.Label>Название</Form.Label>
                    <Form.Control onChange={this.handleInputChange} 
                        name="title" 
                        type="text" 
                        placeholder="Название" />
                </Form.Group>
    
                <Form.Group controlId="formBasicAdres">
                    <Form.Label>Адрес страницы</Form.Label>
                    <Form.Control onChange={this.handleInputChange} 
                        name="url" 
                        type="text" 
                        placeholder="Адрес страницы" />
                </Form.Group>
    
                <Button variant="primary" type="submit">
                    Сохранить контент
                </Button>
            </Form>
        )
    }
}
