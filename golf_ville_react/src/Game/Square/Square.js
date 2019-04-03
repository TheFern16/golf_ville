import React, { Component } from 'react';
import logo from '../../logo.svg';
import './Square.css';

class Square extends React.Component {
	render() {
		return (
			<img src={logo} className="App-logo" alt="logo" />
		)
	}
};

export default Square;