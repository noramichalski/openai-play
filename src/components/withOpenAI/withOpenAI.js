import { Configuration, OpenAIApi } from 'openai';
import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';

const withOpenAI = (
	WrappedComponent,
	apiName,
	resultType,
	apiModel,
	apiFunction ) => {

  const configuration = new Configuration({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY
  });
  const openai = new OpenAIApi(configuration);

  const Component = () => {
    const [prompt, setPrompt] = useState("");
    const [output, setOutput] = useState("");
		const [showInitialResultContainer, setShowInitialResultContainer] = useState(true);

    const {
			mutate,
			isLoading,
			isError,
			isPaused } = useMutation(
      async (prompt) => {
        const response = await apiFunction(openai, prompt);

        if (apiFunction.toString().includes("createImage")) {
          return response.data.data[0].url;
        } else if (apiFunction.toString().includes("createCompletion")) {
          return response.data.choices[0].text;
        }
      },
      {
        onSuccess: setOutput,
        onError: console.error,
        retry: 3, // Optional: Retrying the request up to 3 times if it fails
        retryDelay: (attempt) => attempt * 1000 // Optional: Adding delay between retries
      }
    );

    const handleInputChange = (value) => {
      setPrompt(value);
    };

    const executeAPI = async (e) => {
      e.preventDefault();
			setShowInitialResultContainer(false);
      mutate(prompt);
    };

    return (
      <WrappedComponent
				apiModel={apiModel}
				apiName={apiName}
        executeAPI={executeAPI}
				handleInputChange={handleInputChange}
				isError={isError}
				isLoading={isLoading}
				isPaused={isPaused}
				output={output}
        prompt={prompt}
				resultType={resultType}
				showInitialResultContainer={showInitialResultContainer}
      />
    );
  };

  return Component;
};

export default withOpenAI;
