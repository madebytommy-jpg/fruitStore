import React from "react"
import "../../assets/style/slider.scss"

function ImgComp ({ src, name_title }){
    return  (
        <div className="imgComp">
            <img src={src} alt="slide-img"></img>
            <h2>{name_title}</h2>
        </div>
    )
}

export default ImgComp