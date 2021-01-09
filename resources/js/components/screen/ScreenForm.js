import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default class ScreenForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: '',
            title: '',
            url: '',
            comment: ''
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
    }

    handleSubmit(event) {
        event.preventDefault();

        fetch('/api/screen/store', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: this.state.title,
                url: this.state.url,
                comment: this.state.comment
            })
        })
        .then(response => response.json())
        .then(response => {
            this.setState({
                id: response.id
            })
            this.props.screenAdd(this.state)
            this.props.onHide()
        })   
    }

    render() {
        return (
            <Form onSubmit={(e) => {
                this.handleSubmit(e);
            }}>
                <Form.Group controlId="formBasicName">
                    <Form.Label>Название</Form.Label>
                    <Form.Control onChange={this.handleInputChange} 
                        name="title" 
                        type="text" 
                        placeholder="Название" 
                    />
                </Form.Group>
    
                <Form.Group controlId="formBasicAdress">
                    <Form.Label>Адрес страницы</Form.Label>
                    <Form.Control onChange={this.handleInputChange} 
                        name="url" 
                        type="text" 
                        placeholder="Адрес страницы" 
                    />
                </Form.Group>
    
                <Form.Group controlId="formBasicComment">
                    <Form.Label>Комментарий</Form.Label>
                    <Form.Control onChange={this.handleInputChange} 
                        name="comment" 
                        as='textarea' 
                        type="text" 
                        rows={3} 
                    />
                </Form.Group>
    
                <Button variant="secondary" type="submit">
                    Создать экран
                </Button>
            </Form>
        )
    }
    
}
