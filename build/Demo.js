function Demo(props) {
	return React.createElement(
		"div",
		{ className: "container" },
		React.createElement(
			"h1",
			null,
			"React.js Radio Group Demo"
		),
		React.createElement(
			"form",
			null,
			React.createElement(
				"p",
				{ className: "h3" },
				"How did you hear about us?"
			),
			React.createElement(RadioOptionGroup, {
				name: "referrer",
				options: props.options,
				onCheck: props.onCheck
			}),
			React.createElement(
				"p",
				null,
				React.createElement("input", { type: "submit" })
			)
		)
	);
}