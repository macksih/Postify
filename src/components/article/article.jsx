import style from "./article.module.css"
import article from "./../../images/image/js.png"


function Article(props){
    
    return(
        <div className={style.articleWrapper}>

            <img src={article}  />

            <h3>{props.article.title}</h3>
            <p>{props.article.readingTime}</p>
        </div>

    )

}
export default Article;