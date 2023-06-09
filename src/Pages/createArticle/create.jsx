import axios from "axios";
import { useState } from "react";
import Input from "../../components/input/input";
import Navbar from "../../components/navbar/Navbar";
import TextArea from "../../components/textArea/textArea";
import style from "../createArticle/createArticle.module.css";



function CreateArticle(){

    const [articleTitle , setArticleTitle] = useState({
        title:"",
        date:"",
        author:"",
        readingTime:"",
        imageURL:"",
        message:"",
    })

    const onChangeArticle = (e) => {
        setArticleTitle((prevState) => ({
            ...prevState,
            [e.target.name] : e.target.value
        }));
        };

    const handleChangeArticleMessage = (e)=> {
            setArticleTitle((prevState) => ({
                ...prevState,
                message : e.target.value
        }));
    }

    const hndleCreateNewArticle = () => {
        axios.post("http://localhost:8000/articles" , {
            id:10,
            imageUrl:articleTitle.imageURL,
            title: articleTitle.title,
            readingTime: articleTitle.readingTime,
            date:articleTitle.date,
            athor:articleTitle.athor,
            content:articleTitle.message,
        })
    }

    return(

        <>
            <Navbar />  

            <div className={style.createArticle}>
                <div className="container">

                    <h1>ساخت مقاله</h1>

                    <Input labele="عنوان" name="title" handleChange={onChangeArticle}/>
                    <Input labele="تاریخ" name="date" handleChange={onChangeArticle}/>
                    <Input labele="نویسنده" name="author" handleChange={onChangeArticle}/>
                    <Input labele="مدت زمان خواندن" name="readingTime" handleChange={onChangeArticle}/>
                    <Input labele="ادرس عکس" name="imageURL" handleChange={onChangeArticle}/>


                    <TextArea labele="متن"  handleChange={handleChangeArticleMessage}/>

                    <div className={style.buttonWrapper}>
                        <button onClick={hndleCreateNewArticle}>ساخت مقاله</button>
                    </div>
                </div>
            </div>
       </>
       
    )
    };


export default CreateArticle;