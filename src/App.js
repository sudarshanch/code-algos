import React, { useState, Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpenReader } from '@fortawesome/free-solid-svg-icons';
import FloatingWhatsApp from 'react-floating-whatsapp';
import './App.css';

const App = () => {
    const [appName, setAppName] = useState("  Sudarshan's Tech Journal");
    return (
        <div className='App'>
            <div id="header">
                <h1>
                    <span className='readerBook'>
                        <FontAwesomeIcon icon={faBookOpenReader} />
                    </span>
                    {appName}
                </h1>
            </div>
            <div id="content"></div>
            <div id="footer">
                <div>Contact for any UI/UX Frontend realted help in React, Angular or Java/ Sprint boot / Python</div>
                <div>contact: suddu.ch@gmail.com</div>
                <FloatingWhatsApp 
                    phoneNumber="919989696056"
                    avatar={"https://avatars.githubusercontent.com/u/2115055?v=4"}
                    accountName="Sudarshan"
                    chatMessage="Hi Sudarshan, I saw your tech journal profile, need your help in following tech stack"
                    allowClickAway
                    notification
                    notificationDelay={60000} // 1 minute
                    notificationSound
                />
            </div>
        </div>
    )
}

export default App;