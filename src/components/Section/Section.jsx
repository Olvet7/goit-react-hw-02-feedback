import PropTypes from 'prop-types';
import style from './section.module.css'

const Section = ({title, children}) => {
	return (
		<div className={style.section}> 
			<h1>{title}</h1>
			{children}
		</div>
	)
}

Section.propTypes = {
  title: PropTypes.string,
};

export default Section;