// import React, { useState, useEffect } from "react";

// const GalleryImage = ({
//   imageUrl = "h",
//   altText,
//   handleOpenFullImage,
//   key,
// }) => {
//   const [isImageLoaded, setIsImageLoaded] = useState(null);

//   useEffect(() => {
//     const loadImage = () => {
//       if (imageUrl) {
//         fetch(imageUrl)
//           .then((response) => response.blob())
//           .then((blob) => {
//             const reader = new FileReader();
//             reader.onloadend = () => {
//               setIsImageLoaded(reader.result);
//             };
//             reader.readAsDataURL(blob);
//           })
//           .catch((error) => {
//             console.error("Error loading image:", error);
//             setIsImageLoaded(null);
//           });
//       }
//     };

//     loadImage();
//   }, [imageUrl]);

//   return (
//     <div className="image" key={key}>
//       {isImageLoaded ? (
//         <img
//           onClick={handleOpenFullImage}
//           src={isImageLoaded}
//           className={`${isImageLoaded ? "fadeIn" : ""}`}
//           alt={altText || "Image"}
//         />
//       ) : (
//         // <div className="loading-shimmer"></div>
//         <img
//           onClick={handleOpenFullImage}
//           src={imageUrl}
//           className={`${isImageLoaded ? "fadeIn" : ""}`}
//           alt={altText || "Image"}
//         />
//       )}
//     </div>
//   );
// };

// export default GalleryImage;
