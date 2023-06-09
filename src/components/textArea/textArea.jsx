import style from "../textArea/textArea.module.css"

function TextArea(props){
    return(
        <div className={style.textareaWrapper}>
            <label>{props.labele}</label>
            <textarea onChange={props.handleChange}></textarea>
        </div>
    )
}


export default TextArea;
