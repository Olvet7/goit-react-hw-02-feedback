import PropTypes from 'prop-types';
import fcss from './feedback.module.css'

const FeedbackOptions =({onClick, feedbackOptions}) => {
	return (
		<div className={fcss.button_List}>
			{Object.keys(feedbackOptions).map((key, index) => {
				return(
					<button
					className={fcss.button}
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