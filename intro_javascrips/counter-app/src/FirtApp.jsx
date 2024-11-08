import PropTypes from "prop-types";

export const FirtApp =({title,subtitle})=>{
    return (
        <>
        <h1>{title}</h1>
        <p>{subtitle}</p>
        </>
    )
}

FirtApp.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired
}

FirtApp.defaultProps = {
    title: "Default title",
    subtitle: "Default subtitle"
}

