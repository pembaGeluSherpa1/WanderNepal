import boudha from "../assets/boudha.jpg"
import "../assets/Banner.css"

export default function Banner() {
    return (<>
        <div className="bannerImg">
            <img src={boudha} alt="" />
        </div>
    </>)
}