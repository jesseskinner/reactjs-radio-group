function RadioOption(props) {
	return React.createElement(
		"p",
		{ className: "radio" },
		React.createElement(
			"label",
			null,
			React.createElement("input", { type: "radio", name: props.name, value: props.value }),
			props.children
		)
	);
}

RadioOption.propTypes = {
	value: React.PropTypes.string.isRequired,
	name: React.PropTypes.string.isRequired,
	children: React.PropTypes.node
};