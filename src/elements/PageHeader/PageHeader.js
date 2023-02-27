import './PageHeader.css';
import { TEXT } from '../../utils/constants/text.constants';


const PageHeader = () => {

	return (
		<header className="page-header">
			<div className="headline-container">
				<h1 className="typewriter">
					{TEXT.HEADLINE}
				</h1>
			</div>
		</header>
	);
}

export default PageHeader;