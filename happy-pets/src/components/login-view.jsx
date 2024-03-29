import React from "react";
import HappyPetPaw from "../assets/images/paw.svg";
import AsgardeoLogo from "../assets/images/asgardeo-logo.svg";

export const LoginView = (props) => {

    const {
        isAuthenticated,
        loginButton
    } = props;

    if (isAuthenticated === true) {
        return null;
    }

    return (
        <div className="login-card-wrapper">
            <h1>Insure your Pet's Health</h1>
            <h2>Happy pet, happy life</h2>
            <div className="card login-card">
                <img alt="" className="happy-pet-logo" src={ HappyPetPaw }/>
                {
                    isAuthenticated !== undefined
                        ? (
                            <React.Fragment>
                                <h3>Login to your Account</h3>
                                <p className="login-helper-text">
                                    Click on the button bellow login to the account using{ " " }
                                    <img alt="" className="asgardeo-logo" src={ AsgardeoLogo }/>
                                </p>
                                { loginButton }
                            </React.Fragment>
                        )
                        : (
                            <React.Fragment>
                            <h3>Login to your Account</h3>
                            <p className="login-helper-text">
                                Let's add a button bellow to enable login using{ " " }
                                <img alt="" className="asgardeo-logo" src={ AsgardeoLogo }/>
                            </p>
                        </React.Fragment>
                        )
                }
            </div>
        </div>
    );
};
