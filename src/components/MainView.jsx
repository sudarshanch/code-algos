import { useEffect, useState } from "react";
import ProfileComponent from "./ProfileComponent";
import SideBarView from "./SideBarView";

const MainView = () => {
    const [location, setLocation] = useState(window.location.pathname);
    useEffect(() => {
        console.log('Location update', location );
    }, [location]);
    
    return (
        <div className='parent'>
            <div className='child1'>
                <SideBarView></SideBarView>
            </div>
            <div className='child2'>
                <ProfileComponent setLocation={setLocation}></ProfileComponent>
            </div>
        </div>
    )
}

export default MainView;

