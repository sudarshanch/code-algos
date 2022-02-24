import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpenReader, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import FloatingWhatsApp from 'react-floating-whatsapp';
import './App.css';
import SideBarView from './components/SideBarView';
import ProfileComponent from './components/ProfileComponent';
import MainView from './components/MainView';
import RandomSplashImages from './components/RandomUnSplashImages';

const App = () => {
    const [appName, setAppName] = useState("  Sudarshan's Tech Journal");
    return (
        <div className='App'>
            <div id="header">
                <h1 className='mainHeader'>
                    <span className='readerBook'>
                        <FontAwesomeIcon icon={faBookOpenReader} />
                    </span>
                    {appName}
                </h1>
            </div>
            <div id="content">
                    <BrowserRouter>
                        <Routes>
                            <Route path="/code-algos/" element={<MainView />}></Route>
                            <Route path="/code-algos/splash" element={<RandomSplashImages />}></Route>
                        </Routes>
                    </BrowserRouter>
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
                    className='floatingWhatsup'
                />
            </div>
        </div>
    )
}

export default App;