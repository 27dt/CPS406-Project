import "./EntryField.css"

function EntryField(props) {
    return (
        <div className="entry-field">
            <h2 className="entry-text">{props.text}</h2>
            <input 
                type={props.type} 
                id={props.id}
                name={props.name} 
                placeholder={props.text} 
                value={props.value} 
                onChange={props.onChange}
            />
        </div>
    )
}

export default EntryField