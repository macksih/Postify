import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import style from "./articlePage.module.css";
import pic from "../../images/image/js.png"
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";


function ArticlePage(){

    const [idd , setId] = useState({});
    const [isLoding, setIsLoding] = useState(false);

    const params = useParams();
    
    useEffect(() => {
        setIsLoding(true)

        axios
        .get(`http://localhost:8000/articles/${params.id}`)
        .then((result) => {
            setId(result.data)
            setIsLoding(false)
        })
        .catch((error) => {
            console.log(error)
            setIsLoding(false)
        });

    }, []);


    return(
        <>
            <Navbar title="Postify " />

            {
                isLoding ? <p>چند لحظه صبر کنید...</p> : (

                    <>
                        <div className={style.articlePage}>
                            <div className="container">
                        
                                <h1>{idd.title}</h1>

                                <div className={style.articleInfo}>
                                    <span>تاریخ :{idd.date}</span>
                                    <span>نویسنده:{idd.athor}</span>
                                    <span>زمان خواندن:{idd.readingTime}</span>
                                </div>

                                <img src={pic} alt="" />

                                <p>مشتریان می‌دانند که کسب و کار شما بیش از یک نام تجاری است.
                                در مورد بنیانگذاران و مدیران مهم دیگر بیشتر بگویید و حتی در مورد افرادی که مشتریان با آنها
                                ارتباط برقرار می‌کنند بیشتر صحبت کنید. همچنین برای بیان داستان شرکت و
                                افرادی که در آن کار می‌کنند می‌توانید از تصاویر مناسب استفاده کنید.
                                قرار دادن تصاویر پرسنل و مدیران شرکت در این صفحه می‌تواند در
                                برقراری ارتباط و شناخت از شرکت تأثیر قابل توجهی را داشته باشد.</p>
                            </div>
                        </div>
                    </>
                )
            }
            
                ‍

                 

                <Footer />
            </>
        
    )
}

export default ArticlePage;