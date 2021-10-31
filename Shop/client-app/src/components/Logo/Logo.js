import React from "react"
import { Fragment } from "react";
import { Link } from "react-router-dom";

const Logo = () => {
    const moveLogo = () => {
        const logo = document.getElementById('logo');

        if (window.scrollY <= 500) {
            for (let i = 0; i < logo.children.length; i++) {
                let top = 100 - (window.scrollY / 5);

                if (i < 4)
                    top *= i;
                else
                    top *= (-i + 3);

                logo.children[i].style.top = `${top}%`;
            }
        }
        else if (window.scrollY > 500) {
            for (let i = 0; i < logo.children.length; i++)
                logo.children[i].style.top = `${0}%`;
        }
    }

    React.useEffect(() => {
        window.addEventListener('scroll', moveLogo);
        return () => {
            window.removeEventListener('scroll', moveLogo);
        };
    });

    return (
        <Fragment>
            <div className="logo" id="logo">
                <Link to="#">logo</Link>
                <div>logo</div>
                <div>logo</div>
                <div>logo</div>
                <div>logo</div>
                <div>logo</div>
                <div>logo</div>
            </div>
        </Fragment>
    )
}

export default Logo;