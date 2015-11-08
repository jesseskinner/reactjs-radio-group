function RadioOptionGroup(props) {
	var name = props.name;

	return React.createElement(
		'div',
		null,
		props.options.map(function (option) {
			function onCheck() {
				props.onCheck(option.value);
			}

			if (option.value === 'other') {
				return React.createElement(RadioOtherOption, {
					key: option.value,
					name: name,
					checked: option.checked,
					onCheck: onCheck });
			} else {
				return React.createElement(
					RadioOption,
					{
						key: option.value,
						name: name,
						value: option.value,
						checked: option.checked,
						onCheck: onCheck,
						key: option.value },
					option.label
				);
			}
		})
	);
}

RadioOptionGroup.propTypes = {
	other: React.PropTypes.bool,
	name: React.PropTypes.string.isRequired,
	options: React.PropTypes.array.isRequired
};