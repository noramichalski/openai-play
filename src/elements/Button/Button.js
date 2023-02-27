const Button = ({type, text, disabled, customstyle}) => {
	return (
		<button type={type} className={customstyle} disabled={disabled}>
			{text}
		</button>
	);
};

export default Button;
