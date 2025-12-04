import React from "react";

const FooterOne = () => {
	return (
		<>
			<div className="preview-footer-area py-4">
				<div className="container">
					<p className="mb-0 text-center">
						<span id="copyrightYear"></span> Copyright {new Date().getFullYear()} Made by MT PDM Sidoarjo
					</p>
					{/* <a className="btn btn-info" href="#" target="_blank">
						About Us
					</a> */}
				</div>
			</div>
		</>
	);
};

export default FooterOne;
