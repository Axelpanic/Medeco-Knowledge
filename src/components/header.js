import React from 'react';

const style= {
    Header: {
    background: '#87CEFA',
    padding: 60,
    textAlign: 'center',
    fontSize: 30,}
};


function Header() {
    return( 
        <div style={style.Header}>
            <h1>Medeco Knowledge Base</h1>
        </div>
    )
};

export default Header