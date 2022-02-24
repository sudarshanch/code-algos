import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { memo, useEffect, useState } from "react";
import data from "../data/images.json";
import { faSpinne, faHeart } from "@fortawesome/free-solid-svg-icons";

const RandomSplashImages = () => {
  const [images, setImages] = useState(data);
  useEffect(() => {
    setImages(data);
    // fetch("https://api.unsplash.com/photos/random?count=5&client_id=0hpgYOylF82hOAPM7qFnvCqFskn9GGxgAStyKRUHGoE")
    // .then(resp => resp.json())
    // .then(data => setImages(data))    }, []);
    //console.log(images)
  }, []);

  useEffect(() => {
    const id = setInterval( async () => {

    let fetReq = await fetch(
      "https://api.unsplash.com/photos/random?count=5&client_id=0hpgYOylF82hOAPM7qFnvCqFskn9GGxgAStyKRUHGoE"
    );
    let toJson = await fetReq.json();
    console.log(toJson);
    setImages(toJson);
    }, 5000);
    return () => clearInterval(id);
  }, [images]);

  return (
    <>
      <div className="leftAlign">
        Display Random images - 
      </div>
      {/* <FontAwesomeIcon icon={faHeart} className="heart"/> */}
      <div className="container">
        {images.map((img, key) => {
          return (
            <img
              className="imgItem"
              key={Math.random()}
              src={img.urls.regular}
              alt={img.description}
            />
          );
        })}
      </div>
    </>
  );
};

export default memo(RandomSplashImages);
