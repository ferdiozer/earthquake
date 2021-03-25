import React from "react";

import Lottie from 'react-lottie';

import * as animationData from '../assets/lf30_editor_z4qly4yu.json'

export default ({ icon, size, status }) => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData.default,

    };


    return (
        <div style={{ position: 'absolute' }}>
            <Lottie
                options={defaultOptions}
                height={50}
                width={50}
            // speed={1.9}
            //  isStopped={this.state.isStopped}
            //  isPaused={this.state.isPaused} 
            />
        </div>
    )
}