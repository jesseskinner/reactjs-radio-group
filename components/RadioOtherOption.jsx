function RadioOtherOption(props) {
	return (
		<p className="form-group radio">
			<label>
				<input
					onClick={props.onCheck}
					checked={props.checked}
					type="radio"
					name={props.name} value="other"/>
				Other
			</label>

			{props.checked && (
				<label className="form-inline">
					Please specify:
					<input type="text" name="referrer_other"/>
				</label>
			)}
		</p>
	);
}

RadioOtherOption.propTypes = {
	name: React.PropTypes.string.isRequired,
	checked: React.PropTypes.bool.isRequired
};
