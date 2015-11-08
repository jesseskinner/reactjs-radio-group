var radioOptions = Hoverboard({
	init: function (state, options) {
		return options;
	},
	check: function (state, value) {
		return state.map(function (option) {
			return {
				value: option.value,
				label: option.label,
				checked: value === option.value
			};
		});
	}
});

radioOptions.init([
	{ value: 'newspaper', label: 'Newspaper', checked: false },
	{ value: 'radio', label: 'Radio', checked: false },
	{ value: 'tv', label: 'Television', checked: false },
	{ value: 'search', label: 'Search Engine', checked: false },
	{ value: 'social', label: 'Social Media', checked: false },
	{ value: 'other', label: 'Other', checked: false }
]);

