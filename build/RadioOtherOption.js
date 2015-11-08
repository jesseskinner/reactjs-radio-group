function RadioOtherOption(props) {
	return React.createElement(
		"p",
		{ className: "form-group radio" },
		React.createElement(
			"label",
			null,
			React.createElement("input", {
				onClick: props.onCheck,
				checked: props.checked,
				type: "radio",
				name: props.name, value: "other" }),
			"Other"
		),
		props.checked && React.createElement(
			"label",
			{ className: "form-inline" },
			"Please specify:",
			React.createElement("input", { type: "text", name: "referrer_other" })
		)
	);
}

RadioOtherOption.propTypes = {
	name: React.PropTypes.string.isRequired,
	checked: React.PropTypes.bool.isRequired
};