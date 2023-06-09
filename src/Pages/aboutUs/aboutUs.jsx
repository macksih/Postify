import Navbar from "../../components/navbar/Navbar";
import style from  "./about.module.css";
import img from "../../images/image/ir.png";
import Footer from "../../components/footer/Footer"

function AboutUs(){
    return(
        <div>
            <Navbar title="سالار بلاگ"  />
            
            <div className={style.aboutPage}>
            
            
            <div className="container">
                <h2>درباره ما</h2>
            <p>
                ما در این سایت میتونیم تفکراتمونو به اشتراک بزاریم .<br/>
                 .دنیای بهتر تو ذهنمونه که فقط باید بیان و بعد اون رو عملی کرد<br/>

            </p>

                <h3>فعالیت ما در کدام شهر است؟</h3>

                <img src={img} alt="react" />
            </div>
            
            <Footer />

        </div>
        </div>
        
    )
}

export default AboutUs;