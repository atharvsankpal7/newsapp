import React, { Component } from "react";
import spinnerGif from "./SpinnerGif.gif";
export class Spinner extends Component {
    render() {
        return (
            <>
                <div className="text-center ">
                    <img src={spinnerGif} alt="loading......" />
                </div>
            </>
        );
    }
}

export default Spinner;
