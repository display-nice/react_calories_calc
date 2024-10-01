import React from "react";

import FormGender from "./FormGender";
import FormStats from "./FormStats";
import FormActivity from "./FormActivity";

const Form = (props) => {
	const { form_state, changeFormState, calcAndShowResult, clearForm, calcBtnActive, clearBtnActive, } = props;

	return (
		<form className="counter__form form" name="counter" action="#" method="post">
			<FormGender gender={form_state.gender} changeFormState={changeFormState} />
			<FormStats
				age={form_state.age}
				height={form_state.height}
				weight={form_state.weight}
				changeFormState={changeFormState}
			/>
			<FormActivity activity={form_state.activity} changeFormState={changeFormState} />
			<div className="form__submit">
				<button
					onClick={calcAndShowResult}
					className="form__submit-button button"
					name="submit"
					type="submit"
					disabled={!calcBtnActive}
				>
					Рассчитать
				</button>
				<button
					onClick={clearForm}
					className="form__reset-button"
					name="reset"
					type="reset"
					disabled={!clearBtnActive}
				>
					<svg
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="#FD3636"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M13.4143 12.0002L18.7072 6.70725C19.0982 6.31625 19.0982 5.68425 18.7072 5.29325C18.3162 4.90225 17.6842 4.90225 17.2933 5.29325L12.0002 10.5862L6.70725 5.29325C6.31625 4.90225 5.68425 4.90225 5.29325 5.29325C4.90225 5.68425 4.90225 6.31625 5.29325 6.70725L10.5862 12.0002L5.29325 17.2933C4.90225 17.6842 4.90225 18.3162 5.29325 18.7072C5.48825 18.9022 5.74425 19.0002 6.00025 19.0002C6.25625 19.0002 6.51225 18.9022 6.70725 18.7072L12.0002 13.4143L17.2933 18.7072C17.4882 18.9022 17.7443 19.0002 18.0002 19.0002C18.2562 19.0002 18.5122 18.9022 18.7072 18.7072C19.0982 18.3162 19.0982 17.6842 18.7072 17.2933L13.4143 12.0002Z"
						/>
					</svg>
					<span>Очистить поля и расчёт</span>
				</button>
			</div>
		</form>
	);
};
export default Form;