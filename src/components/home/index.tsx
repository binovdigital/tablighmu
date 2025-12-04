import React from "react";
// import WelcomeToast from "../common/WelcomeToast";
import FooterOne from "@/layouts/footers/FooterOne";
import FooterTwo from "@/layouts/footers/FooterTwo";
import HeaderTwo from "@/layouts/headers/HeaderTwo";
import HeroSlider from "./HeroSlider";
import Brands from "./Brands";
import Elements from "./Elements";
import BrandTwo from "./BrandTwo";
import Banner from "./Banner";
import Features from "./Features";
import BrandThree from "./BrandThree";
import BlogListArea from "./BlogListArea";
import Review from "./Review";

const Home = () => {
	return (
		<>
			<HeaderTwo />
			<div className="page-content-wrapper">
				{/* <WelcomeToast /> */}
				<HeroSlider />
				<Brands />
				<Elements />
				{/* <BrandTwo /> */}
				<Banner />
				{/* <Features /> */}
				<Review />
				<BlogListArea />
				{/* <BrandThree /> */}
			</div>
			<FooterOne />
			{/* <FooterTwo /> */}
		</>
	);
};

export default Home;
