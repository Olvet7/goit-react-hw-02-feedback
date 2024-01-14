import PropTypes from 'prop-types';

const FeedbackOptions =({onClick, feedbackOptions}) => {
	return (
		<div>
			{Object.keys(feedbackOptions).map((key, index) => {
				return(
					<button
					key={index}
					onClick={() => onClick(key)}>
							{key}
					</button>
				);
			})}
		</div>
	);
};

FeedbackOptions.propTypes = {
  onClick: PropTypes.func.isRequired,
  feedbackOptions: PropTypes.object.isRequired,
};

export default FeedbackOptions;