import "./FormButton.css"

function FormButton(props) {
    return (
        <button className={props.className}>{props.text}</button>
    )
}

export default FormButton