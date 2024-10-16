import React from "react";
import "./style.css";

const ImageGallery = () => {
	return (
		<div className="image-gallery">
            <div className="thumbnails">
				<img src="/thumb-nail1.jpg" alt="thumb1" />
				<img src="/thumb-nail2.jpg" alt="thumb2" />
				<img src="/thumb-nail3.jpg" alt="thumb3" />
			</div>
			<img src="/quad-bike.jpg" alt="Quad bike" className="main-image" />
		</div>
	);
};

export default ImageGallery;
