const SectionHeader = ({text, centered}) => {
	let section_header_style;

	if (centered) {
		section_header_style = {
			width: "100%",
			textAlign: "center"
		}
	} else {
		section_header_style = {
			width: "100%"
		}
	}

	return (
		<div>
			<h2 style={section_header_style} >
				{text}
			</h2>
		</div>
	)
};

export default SectionHeader;