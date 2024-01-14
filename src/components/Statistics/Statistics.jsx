import PropTypes from 'prop-types';
import css from './statistics.module.css'

const Statistics = ({title, good, neutral, bad, total, positivePercentage}) => {

	return(
		<div className={css.section}>
            <h2>{title}</h2>
                <div>
                <p>Good: {good}</p>
                <p>Neutral: {neutral}</p>
                <p>Bad: {bad}</p>
            </div>
            <div>
                <p>Total: {total}</p>
                <p className={css.good}>Positive: {positivePercentage}%</p>
            </div>
		</div>
	)
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;