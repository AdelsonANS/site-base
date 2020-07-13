import React from 'react';


function Footer() {
    return (

        <footer className="page-footer font-small bg-dark pt-4">

            <div className="container">

                <ul className="list-unstyled list-inline text-center">
                    <li className="list-inline-item">
                        <a className="btn-floating btn-fb mx-1">
                            <i className="fab fa-facebook-f tam"> </i>
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a className="btn-floating btn-tw mx-1">
                            <i className="fab fa-twitter tam"> </i>
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a className="btn-floating btn-gplus mx-1">
                            <i className="fab fa-google-plus-g tam"> </i>
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a className="btn-floating btn-li mx-1">
                            <i className="fab fa-linkedin-in tam"> </i>
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a className="btn-floating btn-dribbble mx-1">
                            <i className="fab fa-dribbble tam"> </i>
                        </a>
                    </li>
                </ul>

            </div>


            <div className="footer-copyright text-center py-3 cor">© 2020 Copyright:
                <a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
            </div>


        </footer>

    );


}
export default Footer;