
function EntryField(props) {
    return (
        <div className={props.className}>
            <input 
                type={props.type} 
                name={props.name} 
                placeholder={props.text} 
                value={props.value} 
                onChange={props.onChange}
            />
        </div>
    )
}

export default EntryField