var RadioOtherOption = React.createClass({displayName: "RadioOtherOption",
	propTypes: {
		name: React.PropTypes.string.isRequired
	},
	getInitialState: function () {
		return {
			checked: false
		};
	},
	onChange: function (event) {
		var input = event.target;

		this.setState({
			checked: input.checked
		});
	},
	componentDidUpdate: function (prevProps, prevState) {
		var input = this.refs.input.getDOMNode();

		if (prevState.checked !== input.checked) {
			this.setState({
				checked: input.checked
			});
		}
	},
	render: function () {
		return (
			React.createElement("p", {className: "form-group radio"}, 
				React.createElement("label", null, 
					React.createElement("input", {ref: "input", onChange: this.onChange, type: "radio", 
						name: this.props.name, value: "other"}), 
					"Other"
				), 

				this.state.checked && (
					React.createElement("label", {className: "form-inline"}, 
						"Please specify:", 
						React.createElement("input", {type: "text", name: "referrer_other"})
					)
				)
			)
		);
	}
});