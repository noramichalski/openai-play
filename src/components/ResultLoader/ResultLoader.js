import LoadingGif from '../../elements/LoadingGif/LoadingGif';
import { TEXT } from '../../utils/constants/text.constants';

const ResultLoader = ({
	output,
	isLoading,
	prompt,
	resultType,
	showInitialResultContainer,
	isError,
	isPaused }) => {

	return (
		<div className="result-container div-child-responsive">
			{
				/* Show initial result placeholder: */
				showInitialResultContainer &&
				<div className="text-container">
					{TEXT.RESULT_PLACEHOLDER}
				</div>
			}
			{
				/* Show Loading gif: */
				isLoading && !isError && !isPaused &&
				<LoadingGif />
			}
			{
				/* Load Image Generator API result: */
				!isLoading && output && resultType === "image" &&
				<img src={output} alt={prompt} /> 
			}
			{
				/* Load Summarize API result: */
				!isLoading && output && resultType === "text" &&
				<div className="text-container">
					<h3>{TEXT.SECTION_SUMMARIZE_RESULT_TITLE}</h3>
					<p>{output}</p>
				</div>
			}
			{
				/* Show error: */
				isError && 
				<div className="text-container">
					{TEXT.ERROR}
				</div>
			}
			{
				/* Show interruption: */
				isPaused && 
				<div className="text-container">
					{TEXT.PAUSED}
				</div>
			}
		</div>
	);
};

export default ResultLoader;