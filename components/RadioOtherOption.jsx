var RadioOtherOption = React.createClass({
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
	render: function () {
		return (
			<p className="form-group radio">
				<label>
					<input onChange={this.onChange} type="radio" name="referrer" value="other"/>
					Other
				</label>

				{this.state.checked && (
					<label className="form-inline">
						Please specify:
						<input type="text" name="referrer_other"/>
					</label>
				)}
			</p>
		);
	}
});