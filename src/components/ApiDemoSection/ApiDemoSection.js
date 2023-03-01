import { TEXT } from '../../utils/constants/text.constants';
// shared CSS:
import '../withOpenAI/withOpenAI.css';

import SectionHeader from '../../elements/SectionHeader/SectionHeader';
import SectionCopy from '../../elements/SectionCopy/SectionCopy';
import Button from '../../elements/Button/Button';
import ResultLoader from '../ResultLoader/ResultLoader';


const ApiDemoSection = ({
	apiName,
	executeAPI,
	handleInputChange,
	isError,
	isLoading,
	isPaused,
	prompt,
	output,
	resultType,
	showInitialResultContainer }) => {

	return (
		<section id={apiName} className="section-top-border">
			<div className="api-demo-container div-parent-responsive">
				<form
					className="prompt-container div-child-responsive"
					onSubmit={executeAPI}
				>
					<SectionHeader
						centered={false}
						text={TEXT[apiName].TITLE}
					/>
					<SectionCopy
						text={TEXT[apiName].COPY}
					/>
					<textarea
						value={prompt}
						onChange={(event) => {handleInputChange(event.target.value)}} 
						placeholder={TEXT[apiName].PLACEHOLDER}
					>
					</textarea>
					<div className="button-container">
						<Button
							type={"submit"}
							text={TEXT[apiName].BUTTON}
							disabled={!prompt}
						/>
					</div>
				</form>
				<ResultLoader
					isError={isError}
					isLoading={isLoading}
					isPaused={isPaused}
					output={output}
					prompt={prompt}
					resultType={resultType}
					showInitialResultContainer={showInitialResultContainer}
				/>
			</div>
		</section>
	)
};

export default ApiDemoSection;