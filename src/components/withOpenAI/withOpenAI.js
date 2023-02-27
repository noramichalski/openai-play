import './withOpenAI.css';

import { Configuration, OpenAIApi } from 'openai';
import { useState } from 'react';


const withOpenAI = (WrappedComponent, apiModel, apiFunction, inputLabel) => {
	
	const configuration = new Configuration({
		apiKey: process.env.REACT_APP_OPENAI_API_KEY
	});
	const openai = new OpenAIApi(configuration);

	return () => {
		const [prompt, setPrompt] = useState("");
		const [output, setOutput] = useState("");
		const [isLoading, setIsLoading] = useState(false);

		const handleInputChange = (value) => {
			setPrompt(value);
		};

		const executeAPI = async (e) => {
			e.preventDefault();
			setIsLoading(true);

			try {
				const response = await apiFunction(openai, prompt);

				if (apiFunction.toString().includes("createImage")) {
					setOutput(response.data.data[0].url);
				} else if (apiFunction.toString().includes("createCompletion")) {
					setOutput(response.data.choices[0].text);
				}

			} catch (error) {
				console.error(error.message);
			}

			setIsLoading(false);
		};

		return (
			<WrappedComponent
				handleInputChange={handleInputChange}
				executeAPI={executeAPI}
				prompt={prompt}
				output={output}
				isLoading={isLoading}
				inputLabel={inputLabel}
				apiModel={apiModel}
			/>
		);
	};
};

export default withOpenAI;
