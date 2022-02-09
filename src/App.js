import React, { useState, Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpenReader, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
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
            <div id="content">
                <iframe
                    src="https://drive.google.com/file/d/1sHqRfRavSZ79sds9roDCb2A_77qAwORe/preview?usp=sharing"
                    frameBorder="0"
                    scrolling="auto"
                    height="100%"
                    width="55%"
                ></iframe>
            </div>
            <div id="footer">
                <div>Contact for any help in Fullstack / Frontend development using React, Angular or Java/ Sprint boot / Python</div>
                <span>Get in touch <FontAwesomeIcon icon={faPaperPlane} /></span>
                <span className='mailId'><a href="mailto:suddu.ch@gmail.com">suddu.ch@gmail.com</a></span>
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