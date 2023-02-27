import './SectionCopy.css';


const SectionCopy = ({text}) => {
	return (
		<div className="section-copy-container">
			<p className="section-copy">
				{text}
			</p>
		</div>
	)
}

export default SectionCopy;