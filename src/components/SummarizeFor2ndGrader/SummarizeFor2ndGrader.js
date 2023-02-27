// shared CSS
import '../withOpenAI/withOpenAI.css';
import { TEXT } from '../../utils/constants/text.constants';

import SectionHeader from '../../elements/SectionHeader/SectionHeader';
import SectionCopy from '../../elements/SectionCopy/SectionCopy';
import Button from '../../elements/Button/Button';
import ResultLoader from '../ResultLoader/ResultLoader';


const SummarizeFor2ndGrader = ({
	handleInputChange,
	executeAPI,
	prompt,
	output,
	isLoading,
}) => {
	
	// Input example: "Summarize this for a second-grade student:\n\nJupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass one-thousandth that of the Sun, but two-and-a-half times that of all the other planets in the Solar System combined. Jupiter is one of the brightest objects visible to the naked eye in the night sky, and has been known to ancient civilizations since before recorded history. It is named after the Roman god Jupiter.[19] When viewed from Earth, Jupiter can be bright enough for its reflected light to cast visible shadows,[20] and is on average the third-brightest natural object in the night sky after the Moon and Venus."

	return (
		<section id="summarize_for_2nd_grader" className="section-top-border">
			<div className="api-demo-container div-parent-responsive">
				<form
					className="prompt-container div-child-responsive "
					onSubmit={executeAPI}
				>
					<SectionHeader centered={false} text={TEXT.SECTION_SUMMARIZE_TITLE} />
					<SectionCopy text={TEXT.SECTION_SUMMARIZE_COPY} />
					<textarea
						value={prompt}
						onChange={(event) => {handleInputChange(event.target.value)}} 
						placeholder={TEXT.SECTION_SUMMARIZE_PLACEHOLDER}
					>
					</textarea>
					<div className="button-container">
						<Button
							type={"submit"}
							text={TEXT.SECTION_SUMMARIZE_BUTTON}
							disabled={!prompt}
						/>
					</div>
				</form>
				<ResultLoader
					isLoading={isLoading}
					output={output}
					prompt={prompt}
					resultType="text"
				/>
			</div>
		</section>
	);
}

export default SummarizeFor2ndGrader;
