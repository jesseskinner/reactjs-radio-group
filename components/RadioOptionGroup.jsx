var RadioOptionGroup = React.createClass({
	onChange: function (event) {
		if (this.props.other) {
			this.refs.other.forceUpdate();
		}
	},
	render: function () {
		return (
			<div onChange={this.onChange}>
				{this.props.options.map(function (option) {
					return (
						<RadioOption value={option.value} key={option.value}>
							{option.label}
						</RadioOption>
					);
				})}

				{this.props.other && <RadioOtherOption ref="other"/>}
			</div>
		);
	}
});