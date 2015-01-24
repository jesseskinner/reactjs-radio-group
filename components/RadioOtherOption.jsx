var RadioOtherOption = React.createClass({
	render: function () {
		return (
			<p className="form-group radio">
				<label>
					<input type="radio" name="referrer" value="other"/>
					Other
				</label>
				<label className="form-inline">
					Please specify:
					<input type="text" name="referrer_other"/>
				</label>
			</p>
		);
	}
});