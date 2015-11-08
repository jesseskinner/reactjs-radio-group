function Demo() {
	var radioOptions = [{ value: 'newspaper', label: 'Newspaper' }, { value: 'radio', label: 'Radio' }, { value: 'tv', label: 'Television' }, { value: 'search', label: 'Search Engine' }, { value: 'social', label: 'Social Media' }];

	return React.createElement(
		'div',
		{ className: 'container' },
		React.createElement(
			'h1',
			null,
			'React.js Radio Group Demo'
		),
		React.createElement(
			'form',
			null,
			React.createElement(
				'p',
				{ className: 'h3' },
				'How did you hear about us?'
			),
			React.createElement(RadioOptionGroup, {
				name: 'referrer',
				other: true,
				options: radioOptions
			}),
			React.createElement(
				'p',
				null,
				React.createElement('input', { type: 'submit' })
			)
		)
	);
}