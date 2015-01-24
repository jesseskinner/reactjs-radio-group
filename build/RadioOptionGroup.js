var RadioOptionGroup = React.createClass({displayName: "RadioOptionGroup",
	propTypes: {
		other: React.PropTypes.bool,
		name: React.PropTypes.string.isRequired,
		options: React.PropTypes.array.isRequired
	},
	onChange: function (event) {
		if (this.props.other) {
			this.refs.other.forceUpdate();
		}
	},
	render: function () {
		var name = this.props.name;

		return (
			React.createElement("div", {onChange: this.onChange}, 
				this.props.options.map(function (option) {
					return (
						React.createElement(RadioOption, {name: name, value: option.value, key: option.value}, 
							option.label
						)
					);
				}), 

				this.props.other && React.createElement(RadioOtherOption, {name: name, ref: "other"})
			)
		);
	}
});