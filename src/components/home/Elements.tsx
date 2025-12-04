import Link from "next/link";
import React from "react";

const Elements = () => {
	return (
		<>
			<div className="container">
				<div
					className="card card-bg-img bg-img bg-overlay mb-3"
					style={{ backgroundImage: `url(/assets/img/bg-img/3.jpg)` }}
				>
					<div className="card-body direction-rtl p-4">
						<h2 className="text-white">KHGT Muhammadiyah</h2>
						<p className="mb-4 text-white">
							KHGT adalah Kalender Hijriah Global Tunggal berbasis hisab hakiki kontemporer untuk menyatukan awal bulan umat Islam dunia						</p>
						<a className="btn btn-warning">
							Download
						</a>
					</div>
				</div>
			</div>
		</>
	);
};

export default Elements;
