import React from 'react';

const style= {
    Footer: {
    textAlign: 'center',
    margin:'auto',
    width:'50%',
    background: '#87CEFA',
    borderRadius:15,}
}

function Footer() {
    return (
        <div style={style.Footer}>
            <p> Alex Hickey, 2024</p>
            <p> If you'd like to add to it, see Mrs. medeco on LPU Discord</p>
        </div>
    )
};

export default Footer;