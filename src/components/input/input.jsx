import style from "../input/input.module.css"


function Input(props){
    return(
        <div className={style.inputWrapper}>
            <label>{props.labele}</label>
            <input name={props.name}
                onChange={props.handleChange} 
                type="text" />
        </div>
    )
}

export default Input;