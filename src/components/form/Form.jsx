import React from "react";

import FormGender from './FormGender';
import FormStats from './FormStats';
import FormCalcAndClear from './FormCalcAndClear';
import FormActivity from './FormActivity';

export default class Form extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}
	render() {
		const {getGender} = this.props;
		return (
			<form className="counter__form form" name="counter" action="#" method="post">
				<FormGender getGender={(e) => getGender(e)}/>
				<FormStats/>
				<FormActivity/>
				<FormCalcAndClear/>			
			</form>
		)
	}
}