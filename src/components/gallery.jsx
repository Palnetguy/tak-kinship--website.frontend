import axios from "axios";
import { useEffect, useState } from "react";
import "../css/gallery.css";

import GalleryImage from "./gallery-adds/gallery-image";
import configHeaders from "./config-headers";

const Gallery = ({ setIsLoading }) => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    const handleFetchImages = async () => {
      try {
        const response = await axios.get(
          "https://tak-devs-web-6dd969e7026b.herokuapp.com/api/gallery/",
          {
            headers: configHeaders,
          }
        );
        setIsLoading(false);
        console.log(response);
        console.log(response.data);
        setImages(response.data);
      } catch (error) {
        setIsLoading(false);
        console.log(error);
      }
    };

    handleFetchImages();
  }, []);
  //   console.log(document.querySelector(".testImg"));
  const [isOpenFullImage, setIsOpenFullImage] = useState(false);
  const [isOpenFullImageInSide, setIsOpenFullImageInSide] = useState(false);
  const [srcFullImage, setSrcFullImage] = useState("");
  // useEffect(() => {
  //   if (isOpenFullImage) {
  //     document.querySelector("html").style.overflow = "hidden";
  //   } else {
  //     document.querySelector("html").style.overflow = "auto";
  //   }
  // }, [isOpenFullImage]);
  //   const togleOpenFullImage = () => {};
  const handleOpenFullImage = (e) => {
    setSrcFullImage(e.target.src);
    // document.querySelector(".fullImage").appendChild(e.target);
    console.log(e.target);
    setIsOpenFullImage((prev) => !prev);
    setIsOpenFullImageInSide((prev) => !prev);
  };

  const handleOpenFullImageInSideClose = () => {
    setTimeout(() => {
      setIsOpenFullImage((prev) => !prev);
    }, 700);
    setIsOpenFullImageInSide((prev) => !prev);
  };

  return (
    <div className="gallery">
      <div className={`fullImage ${isOpenFullImage ? "visible" : ""}`}>
        <div className="cancel" onClick={handleOpenFullImageInSideClose}>
          close
        </div>
        <img
          className={` ${isOpenFullImageInSide ? "" : "close"}`}
          src={srcFullImage}
          alt=""
        />
      </div>
      {/* <img onClick={handleOpenFullImage} src={image1} alt="" /> */}
      {images.map((e) => (
        <GalleryImage
          imageId={`${e.image}`}
          altText="test"
          handleOpenFullImage={handleOpenFullImage}
          key={e.image}
        />
      ))}
    </div>
  );
};
export default Gallery;
