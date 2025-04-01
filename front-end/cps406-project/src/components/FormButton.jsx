import "./FormButton.css"

function FormButton(props) {
    return (
        <button className="form-button">{props.text}</button>
    )
}

export default FormButton