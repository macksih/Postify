import Article from "../../components/article/article";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import styled from "./home.module.css";
import { useEffect,useState } from "react"
import axios from "axios";
import { Link } from "react-router-dom";

function Home(){
    
    const [articles, setArticles] = useState([])

    useEffect(()=>{

        axios
            .get("http://localhost:8000/articles")
            .then((result) => {
                setArticles(result.data)
        })
        .catch((error) => {
            console.log(error);
        })

    }, []);

    return(
        <div className={styled.homeWrapper}>
            <Navbar title="Postify" />
            
            <div className="container">
                <h2>مقالات جدید</h2>

                <div className={styled.articleList}>
                    {
                        articles.map((article)=>(

                            <Link to={`/article/${article.id}`}>
                                <Article key={article.id} article={article}/>
                            </Link>

                        ))
                    }

                </div>
            </div>
        
            <Footer />
        </div>
            
        
        
    )
}

export default Home;