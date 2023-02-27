import './APIselector.css';
import { TEXT } from '../../utils/constants/text.constants';
import { API_LIST } from '../../utils/constants/API_list';

import SectionHeader from '../../elements/SectionHeader/SectionHeader';


const APIselector = () => {

	return (
		<section>
			<SectionHeader text={TEXT.SECTION_API_SELECTOR_TITLE} centered={true} />
			<ul className="api-list-container">
				{
					API_LIST.map(api => (
						<li key={api.id} className="api-link">
							<a href={`#${api.id}`}>
								{api.text_title}
							</a>
						</li>
					))
				}
			</ul>
		</section>
	);
};

export default APIselector;