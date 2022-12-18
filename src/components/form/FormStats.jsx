import React from 'react';

export default class FormStats extends React.Component {
	
	render() {
		const {getStats} = this.props;
		return (
			<fieldset className="form__item form__parameters" name="parameters">
				<legend className="visually-hidden">
					Физические параметры
				</legend>
				<div className="inputs-group">
					<div className="input">
						<div className="input__heading">
						<label className="heading" htmlFor="age">
							Возраст
						</label>
						<span className="input__heading-unit"> 
							лет
						</span>
						</div>
						<div className="input__wrapper">
						<input onChange={getStats} type="text" id="age" name="age" placeholder="0" inputMode="decimal" maxLength="3" required/>
						</div>
					</div>
					<div className="input">
						<div className="input__heading">
						<label className="heading" htmlFor="height">
							Рост
						</label>
						<span className="input__heading-unit">
							см
						</span>
						</div>
						<div className="input__wrapper">
						<input onChange={getStats} type="text" id="height" name="height" placeholder="0" inputMode="decimal" maxLength="3" required/>
						</div>
					</div>
					<div className="input">
						<div className="input__heading">
						<label className="heading" htmlFor="weight">
							Вес
						</label>
						<span className="input__heading-unit">
							кг
						</span>
						</div>
						<div className="input__wrapper">
						<input onChange={getStats} type="text" id="weight" name="weight" placeholder="0" inputMode="decimal" maxLength="3" required/>
						</div>
					</div>
				</div>
			</fieldset>
		);
	}
	
}