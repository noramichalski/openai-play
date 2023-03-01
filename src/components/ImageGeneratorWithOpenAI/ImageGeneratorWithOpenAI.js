import { API_LIST } from '../../utils/constants/API_list';

// import ImageGenerator from '../ImageGenerator/ImageGenerator';
import withOpenAI from '../withOpenAI/withOpenAI';
import ApiDemoSection from '../ApiDemoSection/ApiDemoSection';


const apiName = API_LIST[0].ID;

const ImageGeneratorWithOpenAI = withOpenAI(
	ApiDemoSection,
	apiName,
	null,
	(api, prompt) =>
		api.createImage({
			prompt,
			n: 1,
			size: '256x256',
		})
);

export default ImageGeneratorWithOpenAI;