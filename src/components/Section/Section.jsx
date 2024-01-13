import PropTypes from 'prop-types';

const Section = ({title, children}) => {
    return (
        <>
        <h1>{title}</h1>
        {children}
        </>
    )
}

Section.propTypes = {
    title: PropTypes.string
}

export default Section;