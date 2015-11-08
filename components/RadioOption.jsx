function RadioOption(props) {
	return (
		<p className="radio">
			<label>
				<input type="radio"
					onClick={props.onCheck}
					checked={props.checked}
					name={props.name}
					value={props.value}/>
				{props.children}
			</label>
		</p>
	);
}

RadioOption.propTypes = {
	value: React.PropTypes.string.isRequired,
	name: React.PropTypes.string.isRequired,
	checked: React.PropTypes.bool.isRequired,
	children: React.PropTypes.node
};
