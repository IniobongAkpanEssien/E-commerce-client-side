import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Fade, Slide } from "react-slideshow-image";
// import { Carousel } from "react-responsive-carousel";
import Carousely from "../Carousel";
// firebase
import { db, storage } from "../../Firebase";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import Loader from "../Loader";

function Banner() {
  // FETCHING BANNER SORTED FROM FIREBABSE
  const [bannerDetails, setBannerDetails] = useState<any[]>([]);
  useEffect(() => {
    return onSnapshot(
      query(collection(db, "banneritems"), orderBy("timestamp", "desc")),
      (snapshot) => {
        setBannerDetails(snapshot.docs);
      }
    );
  }, [db]);

  return (
    <div className="banner-main-con">
      <div className="content">
        <div className="text-content">
          {/* <h2>
            ELEGANT <br /> COLLETIONS
          </h2> */}
          <Carousely />
          {/* SIAPLAYING PRODUCTS DETAILS*/}
        </div>

        {/* SIAPLAYING PRODUCTS IMAGES*/}
        <div className="banner-product-img-main-con"></div>
      </div>
    </div>
  );
}

export default Banner;
