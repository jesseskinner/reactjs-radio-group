var Demo = React.createClass({
	render: function () {
		var radioOptions = [
			{ value: 'newspaper', label: 'Newspaper' },
			{ value: 'radio', label: 'Radio' },
			{ value: 'tv', label: 'Television' },
			{ value: 'search', label: 'Search Engine' },
			{ value: 'social', label: 'Social Media' }
		];

		return (

			<div className="container">
				<h1>React.js Radio Group Demo</h1>
				
				<form>
					<p className="h3">How did you hear about us?</p>

					<RadioOptionGroup
						name="referrer"
						other={true}
						options={radioOptions}
					/>

					<p><input type="submit"/></p>
				</form>
			</div>

		);
	}
});