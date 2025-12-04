import React from "react";

interface DataType {
	id: number;
	img: string;
	title: string;
}

const bands_data: DataType[] = [
	{ id: 1, img: "/assets/img/quick-access/1.png", title: "Khatib Terbaik" },
	{ id: 2, img: "/assets/img/quick-access/2.png", title: "Masjid Terdekat" },
	{ id: 3, img: "/assets/img/quick-access/3.png", title: "Keuangan Masjid" },
	{ id: 4, img: "/assets/img/quick-access/4.png", title: "Lazismu" },
	{ id: 5, img: "/assets/img/quick-access/5.png", title: "Kajian" },
	{ id: 6, img: "/assets/img/quick-access/6.png", title: "Wakaf" },
];

const Brands = () => {
	return (
		<>
			<div className="pt-3"></div>

			<div className="container direction-rtl">
				<div className="card mb-3">
					<div className="card-body">
						<div className="row g-3">
							{bands_data.map((item, i) => (
								<div key={i} className="col-4">
									<div className="feature-card mx-auto text-center">
										<div className="card mx-auto bg-gray">
											<img src={item.img} alt="" />
										</div>
										<p className="mb-0">{item.title}</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Brands;
