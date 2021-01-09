import React from 'react';
import Form from 'react-bootstrap/Form';

export default class MainFormContentSelect extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            screenUrl: this.props.screenUrl,
            contentUrl: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {  
        fetch(this.state.screenUrl, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                url: this.state.contentUrl
            })
        })

        .then(response => {
            if(response.status == 404) {
                this.props.notConnected(false)
                return false
            } else {
                return response.json()
            }
        })

        .then(response => {
            if(response !== false) {
                this.setState({contentUrl: response.url})
            }

        }) 
   
    }

    handleChange(event) {
        this.setState({contentUrl: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault()

        fetch(this.state.screenUrl, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                url: this.state.contentUrl
            })
        })

        .then(response => response.json())

        .then(response => {
        }) 
    }

    render() {
        return (
            <Form
                className='d-flex'
                action={this.state.screenUrl}
                onSubmit={(e) => {
                    this.handleSubmit(e)
                }}
            >
        
                <select
                    value={this.state.contentUrl}
                    onChange={this.handleChange}
                    className='custom-select' 
                    name="categotySelect"
                >
                    {
                        this.props.contentArr.map(item => {
                            return (
                                <option key = {item.id} value={item.url}>{item.title}</option>
                            )
                        })
                    }
                </select>

                <button className="btn btn-info ml-4" type="submit">Отправить</button>
            </Form>
        )
    }
}
