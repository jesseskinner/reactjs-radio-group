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
	componentDidUpdate: function (prevProps, prevState) {
		var checked = this.refs.input.getDOMNode().checked;
		
		if (!checked && prevState.checked !== checked) {
			this.setState({
				checked: checked
			});
		}
	},
	render: function () {
		return (
			<p className="form-group radio">
				<label>
					<input ref="input" onChange={this.onChange}
						type="radio" name="referrer" value="other"/>
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