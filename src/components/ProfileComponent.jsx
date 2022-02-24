import { useEffect } from "react";

const ProfileComponent = (props) => {
    useEffect(() =>{
        console.log("Profile..", props);
        props.setLocation(window.location.pathname);
    },[]);
    return (
        <iframe
            src="https://drive.google.com/file/d/1sHqRfRavSZ79sds9roDCb2A_77qAwORe/preview?usp=sharing"
            frameBorder="0"
            scrolling="auto"
            height="100%"
            width="70%"
            title="profile"
        ></iframe>
    )
}

export default ProfileComponent;