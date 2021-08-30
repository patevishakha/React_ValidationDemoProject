import React from 'react';
import './ErrorPopup.css';

const ErrorPopup = (props) => {

    return (

            <div className="backdrop" onClick={props.OnCancelingError}> 
                <div className="modal">
                    <header className="header">
                        <h1>
                            {props.error_title}
                        </h1>
                    </header>

                    <div className="content">
                        <p>{props.msg}</p>
                    </div>

                    <footer className="actions">
                        <button className="btn" onClick={props.OnCancelingError}> 
                            Cancel
                        </button>
                    </footer>
                </div>
        </div>
    );
};

export default ErrorPopup;
