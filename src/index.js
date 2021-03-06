import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

function NavMenu() {
	return (
		<>
		<ButtonGroup aria-label="nav buttons">
			<Button variant="secondary">Home</Button>
			<Button variant="secondary">GitHub</Button>
			<Button variant="secondary">Contact</Button>
		</ButtonGroup>
		</>
	)
}

class MyForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			age: null,
			errormessage: '',
			citizenship: ''
		};
	}
	mySubmitHandler  = (event) => {
		let age = this.state.age;
		let err = this.state.errormessage;
		if (!Number(age)) {
			err = <strong>Error : Your age must be a number</strong>;
			this.setState({errormessage: err});
			event.preventDefault();
		} else {
			err = <strong>Submitting ...</strong>;
			this.setState({errormessage: err});
		}
	}
	myChangeHandler = (event) => {
		let nam = event.target.name;
		let val = event.target.value;
		let err = '';
		if (nam == "age") {
			if (val !="" && !Number(val)) {
				err = <strong>Your age must a number</strong>;
			}
		}
		this.setState({[nam]: val});
		this.setState({errormessage: err});
	}
	render() {
		let header = <h1>Contact Us</h1>;
		return (
			<form onSubmit={this.mySubmitHandler}>
			{header}
			<p>Enter your name: </p>
			<input type='text' name='username' onChange={this.myChangeHandler} />
			<p>Enter your age: </p>
			<input type='text' name='age' onChange={this.myChangeHandler} />
			<p>Citizenship: </p>
			<select name='citizenship' onChange={this.myChangeHandler}>
				<option value="True">True</option>
				<option value="False">False</option>
			</select>
			<p>{this.state.errormessage}</p>
			<input type='submit' value="Submit" />
			</form>
		);
	}
}

ReactDOM.render(<MyForm />, document.getElementById('root'));
ReactDOM.render(<NavMenu />, document.getElementById('navigation'));
