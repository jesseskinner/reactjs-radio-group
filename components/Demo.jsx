function Demo(props) {
	return (

		<div className="container">
			<h1>React.js Radio Group Demo</h1>
			
			<form>
				<p className="h3">How did you hear about us?</p>

				<RadioOptionGroup
					name="referrer"
					options={props.options}
					onCheck={props.onCheck}
				/>

				<p><input type="submit"/></p>
			</form>
		</div>

	);
}
