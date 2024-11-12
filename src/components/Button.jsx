import PropTypes from "prop-types";

export default function Button({btntext}){

    return (
        <button className="button">{btntext} </button>
    )
}

Button.propTypes = {
    btntext: PropTypes.string.isRequired,
}
