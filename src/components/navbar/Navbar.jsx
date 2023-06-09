import style from "./Navbar.module.css"
import {Link} from "react-router-dom"

function Navbar(props){

    // console.log(props)

    return(
        <div className={style.headerWrapper}>
            <div className="container">
                <div className={style.header}>
                    <h3 className={style.h3}>{props.title}</h3>
                        <ul >
                            <li>
                                <Link to="/">
                                    لیست مقالات
                                </Link>
                            </li>
                            <li>
                                <Link to="/create/article">مقاله جدید</Link>
                            </li>
                            <li>
                                <Link to="/about">درباره</Link>
                            </li>
                    </ul>
                </div>
            </div>
        </div>
        
    )
}

export default Navbar;