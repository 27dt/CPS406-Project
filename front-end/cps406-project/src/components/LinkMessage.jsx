import "./LinkMessage.css"

function LinkMessage(props) {
    return (
        <p>{props.beforeText} <a href={props.pagePath}>{props.linkName}</a> {props.afterText}</p>
    )
}

export default LinkMessage