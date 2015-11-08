function RadioOption(props) {
	return React.createElement(
		"p",
		{ className: "radio" },
		React.createElement(
			"label",
			null,
			React.createElement("input", { type: "radio",
				onClick: props.onCheck,
				checked: props.checked,
				name: props.name,
				value: props.value }),
			props.children
		)
	);
}

RadioOption.propTypes = {
	value: React.PropTypes.string.isRequired,
	name: React.PropTypes.string.isRequired,
	checked: React.PropTypes.bool.isRequired,
	children: React.PropTypes.node
};