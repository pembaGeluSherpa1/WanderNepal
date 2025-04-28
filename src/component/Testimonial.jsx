import "../assets/Testimonials.css"
import { SiComma } from "react-icons/si";
export default function Testimonial(){
    return(
        <>
        <div className="Testimonial-Container">
            <span className="Testimonial-Header">TESTIMONIALS</span>
    
        <div className="Testimonial-icon">
        <SiComma />
        <SiComma />
        </div>
        </div>
        <div className="Testimonial-body">
            <h2>Cheng Wu kang</h2>
            <p>This is our project which will be the winner and win 10k rupees and do party with that money waaaaaaauuuuu.</p>
        
        <div className="Testimonial-people">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6Aqj3MTDX2_ntWQ32h0U8zmQSyovlsOJlew&s" alt="person"/>
             <p>Cheng Wu Kang</p>
        </div>
        </div>
        </>
    )
}