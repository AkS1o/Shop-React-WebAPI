import React from "react"
import { Fragment } from "react";
import { Link } from "react-router-dom";

const Logo = () => {
    // window.addEventListener('load', () => {
    //     const logo = document.getElementById('logo');

    //     for (var i = 1; i < 7; i++) {
    //         let div = document.createElement('div');
    //         div.innerHTML = "logo";

    //         if (i < 4)
    //             div.style.top = `${100 * i}%`;
    //         else
    //             div.style.top = `${100 * -i + 300}%`;

    //         logo.appendChild(div);
    //     }
    // });

    // window.addEventListener('scroll', () => {
    //     const logo = document.getElementById('logo');

    //     if (window.scrollY <= 500) {
    //         for (let i = 0; i < logo.children.length; i++) {
    //             let top = 100 - (window.scrollY / 5);

    //             if (i < 4)
    //                 top *= i;
    //             else
    //                 top *= (-i + 3);

    //             logo.children[i].style.top = `${top}%`;
    //         }
    //     }
    //     else if (window.scrollY > 500) {
    //         for (let i = 0; i < logo.children.length; i++)
    //             logo.children[i].style.top = `${0}%`;
    //     }
    // });

    return (
        <Fragment>
            <div className="logo" id="logo">
                <Link to="#">logo</Link>
            </div>
        </Fragment>
    )
}

export default Logo;