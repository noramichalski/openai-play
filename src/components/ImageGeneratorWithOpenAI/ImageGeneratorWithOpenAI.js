import ImageGenerator from '../ImageGenerator/ImageGenerator';
import withOpenAI from '../withOpenAI/withOpenAI';


const ImageGeneratorWithOpenAI = withOpenAI(
	ImageGenerator,
	null,
	(api, prompt) =>
		api.createImage({
			prompt,
			n: 1,
			size: '256x256',
		})
);

export default ImageGeneratorWithOpenAI;