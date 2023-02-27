import LoadingGif from '../../elements/LoadingGif/LoadingGif';
import { TEXT } from '../../utils/constants/text.constants';

const ResultLoader = ({output, isLoading, prompt, resultType}) => {

	return (
		<div className="result-container div-child-responsive">
			{isLoading && <LoadingGif />}
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
		</div>
	);
};

export default ResultLoader;