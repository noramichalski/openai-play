import './LoadingGif.css';
import LoadingURL from '../../assets/loading.gif'


const LoadingGif = () => {
	return (
		<div className="loading-container">
			<img className="loading-image" src={LoadingURL} alt="Loading..." />
		</div>
	);
};

export default LoadingGif;