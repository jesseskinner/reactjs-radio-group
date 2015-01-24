var RadioOptionGroup = React.createClass({
	render: function () {
		return (
			<div>
				{this.props.options.map(function (option) {
					return (
						<RadioOption value={option.value} key={option.value}>
							{option.label}
						</RadioOption>
					);
				})}

				{this.props.other && <RadioOtherOption/>}
			</div>
		);
	}
});