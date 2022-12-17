import React from "react";

import FormGender from './FormGender';
import FormStats from './FormStats';
import FormCalcAndClear from './FormCalcAndClear';
import FormActivity from './FormActivity';

export default class Form extends React.Component {
	render() {
		return (
			<form className="counter__form form" name="counter" action="#" method="post">
				<FormGender/>
				<FormStats/>
				<FormActivity/>
				<FormCalcAndClear/>			
			</form>
		)
	}
}