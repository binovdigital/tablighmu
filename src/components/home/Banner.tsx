import Link from "next/link";
import React from "react";

const Banner = () => {
	return (
		<>
			<div className="container">
				<div
					className="card bg-primary mb-3 bg-img"
					style={{ backgroundImage: `url(/assets/img/core-img/1.png)` }}
				>
					<div className="card-body direction-rtl p-4">
						<h2 className="text-white">Masjid Amanah</h2>
						<p className="mb-4 text-white">
							Daftarkan masjid anda di Tablighmu, agar masjid anda lebih dikenal dan mendapatkan kepercayaan
						</p>
						<a className="btn btn-warning">
							Daftarkan Masjidmu
						</a>
					</div>
				</div>
			</div>
		</>
	);
};

export default Banner;
