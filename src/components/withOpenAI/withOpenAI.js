import { Configuration, OpenAIApi } from 'openai';
import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';

const withOpenAI = (WrappedComponent, apiName, apiModel, apiFunction) => {

  const configuration = new Configuration({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY
  });
  const openai = new OpenAIApi(configuration);

  const Component = () => {
    const [prompt, setPrompt] = useState("");
    const [output, setOutput] = useState("");
		const [showInitialResultContainer, setShowInitialResultContainer] = useState(true);

    const { mutate, isLoading, error } = useMutation(
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
				apiName={apiName}
        handleInputChange={handleInputChange}
        executeAPI={executeAPI}
        prompt={prompt}
        output={output}
        isLoading={isLoading}
        apiModel={apiModel}
        error={error}
				showInitialResultContainer={showInitialResultContainer}
      />
    );
  };

  return Component;
};

export default withOpenAI;
