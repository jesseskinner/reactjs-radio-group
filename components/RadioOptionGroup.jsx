var RadioOptionGroup = React.createClass({
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
			<div onChange={this.onChange}>
				{this.props.options.map(function (option) {
					return (
						<RadioOption name={name} value={option.value} key={option.value}>
							{option.label}
						</RadioOption>
					);
				})}

				{this.props.other && <RadioOtherOption name={name} ref="other"/>}
			</div>
		);
	}
});