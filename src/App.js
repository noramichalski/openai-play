import { TEXT } from './utils/constants/text.constants';

import PageHeader from "./elements/PageHeader/PageHeader";
import APIselector from './components/APIselector/APIselector';
import SummarizeFor2ndGraderWithOpenAI from './components/SummarizeFor2ndGraderWithOpenAI/SummarizeFor2ndGraderWithOpenAI';
import ImageGeneratorWithOpenAI from './components/ImageGeneratorWithOpenAI/ImageGeneratorWithOpenAI';


function App() {  
  return (
    <div className="page">
      <div>
        <PageHeader />
        <main>
          <APIselector />
			    <ImageGeneratorWithOpenAI />
          <SummarizeFor2ndGraderWithOpenAI />
        </main>
        <footer>{TEXT.COPYRIGHT}</footer>
      </div>
    </div>
  );
}

export default App;
