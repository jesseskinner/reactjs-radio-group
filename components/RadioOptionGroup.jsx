function RadioOptionGroup(props) {
	var name = props.name;

	return (
		<div>
			{props.options.map(function (option) {
				function onCheck() {
					props.onCheck(option.value);
				}

				if (option.value === 'other') {
					return (
						<RadioOtherOption
							key={option.value}
							name={name}
							checked={option.checked}
							onCheck={onCheck} />
					);
				} else {
					return (
						<RadioOption
							key={option.value}
							name={name}
							value={option.value}
							checked={option.checked}
							onCheck={onCheck}
							key={option.value}>
							{option.label}
						</RadioOption>
					);
				}
			})}
		</div>
	);
}

RadioOptionGroup.propTypes = {
	other: React.PropTypes.bool,
	name: React.PropTypes.string.isRequired,
	options: React.PropTypes.array.isRequired
};
