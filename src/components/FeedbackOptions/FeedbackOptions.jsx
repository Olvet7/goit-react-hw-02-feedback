import {PropTypes} from 'prop-types';

const FeedbackOptions = ({onClick, feedbackOptions}) => {
	return (
		<div>
			{Object.keys(feedbackOptions).map((key, index) => {
				return(
				<button className='button' key={index} onClick={() => onClick(key)}>{key}</button>	
				);
			})}
		</div>
	)
}

FeedbackOptions.propTypes = {
	onClick: PropTypes.func.isRequired
}

export default FeedbackOptions;