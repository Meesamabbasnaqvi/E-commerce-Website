import React from 'react'
import { useState } from "react";

export default function Modal(modal, setModal) {
    const [imageSrc, setimageSrc] = useState("images/image-product-1.jpg");
    const thumbImg = document.querySelectorAll(".thumb-modal-img");

    thumbImg.forEach(thumbImg => thumbImg.addEventListener("click", (e) => {
        let x = e.target.src
        setimageSrc(x)
        console.log(setimageSrc.src)
    }));
  
    const modalClose = () => {
        setModal(false)
    }
    return (
        <div className={modal ? "d-none ": "modal-box"}>
            <img onClick={modalClose} id='close' src="/images/icon-close.svg" alt="" />
            <div className='modal-img-box'>
                <div>
                    <img className='prev-img ' src="/images/icon-previous.svg" alt="" />
                    <img  className="modal-main-img" src={imageSrc} alt="" />
                    <img className='next-img ' src="/images/icon-next.svg" alt="" />
                </div>
                <div className="d-flex all-thumb-img">
                    <img className="thumb-modal-img" src="/images/image-product-1.jpg" alt="" />
                    <img className="thumb-modal-img" src="/images/image-product-2.jpg" alt="" />
                    <img className="thumb-modal-img" src="/images/image-product-3.jpg" alt="" />
                    <img className="thumb-modal-img" src="/images/image-product-4.jpg" alt="" />
                </div>
            </div>
        </div>
    )
}
