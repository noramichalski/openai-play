import { API_LIST } from '../../utils/constants/API_list';

import withOpenAI from '../withOpenAI/withOpenAI';
import ApiDemoSection from '../ApiDemoSection/ApiDemoSection';

const apiName = API_LIST[1].ID;

const SummarizeFor2ndGraderWithOpenAI = withOpenAI(
	ApiDemoSection,
	apiName,
	"text",
	"text-davinci-003",
	(api, prompt) =>
		api.createCompletion({
			model: "text-davinci-003",
			prompt,
			temperature: 0.7,
			max_tokens: 64,
			top_p: 1.0,
			frequency_penalty: 0.0,
			presence_penalty: 0.0,
		}
	)
);

export default SummarizeFor2ndGraderWithOpenAI;
