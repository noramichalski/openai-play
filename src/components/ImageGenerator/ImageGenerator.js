// shared CSS
import '../withOpenAI/withOpenAI.css';
import { TEXT } from '../../utils/constants/text.constants';

import ResultLoader from '../ResultLoader/ResultLoader';
import SectionHeader from '../../elements/SectionHeader/SectionHeader';
import SectionCopy from '../../elements/SectionCopy/SectionCopy';
import Button from '../../elements/Button/Button';


const ImageGenerator = ({
	handleInputChange,
	executeAPI,
	prompt,
	output,
	isLoading,
}) => {

	return (
		<section id="image_generator" className="section-top-border">
			<div className="api-demo-container div-parent-responsive">
				<form
					className="prompt-container div-child-responsive"
					onSubmit={executeAPI}
				>
					<SectionHeader centered={false} text={TEXT.SECTION_IMAGE_GENERATOR_TITLE} />
					<SectionCopy text={TEXT.SECTION_IMAGE_GENERATOR_COPY} />
					<textarea
						value={prompt}
						onChange={(event) => {handleInputChange(event.target.value)}} 
						placeholder={TEXT.SECTION_IMAGE_GENERATOR_PLACEHOLDER}
					>
					</textarea>
					<div className="button-container">
						<Button
							type={"submit"}
							text={TEXT.SECTION_IMAGE_GENERATOR_BUTTON}
							disabled={!prompt}
						/>
					</div>
				</form>
				<ResultLoader
					isLoading={isLoading}
					output={output}
					prompt={prompt}
					resultType="image"
				/>
			</div>
		</section>
	);
}

export default ImageGenerator;