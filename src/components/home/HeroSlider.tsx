"use client";

import React from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const HeroSlider = () => {
	return (
		<>
			<div className="container">
				<div className="tiny-slider-one-wrapper">
				<div
					className="tns-controls"
					aria-label="Carousel Navigation"
					tabIndex={-1}
				>
					<button
						type="button"
            className="prev-button"
						data-controls="prev"
						tabIndex={-1}
						aria-controls="tns1"
					>
						<i className="bi bi-chevron-left"></i>
					</button>
					<button
						type="button"
            className="next-button"
						data-controls="next"
						tabIndex={-1}
						aria-controls="tns1"
					>
						<i className="bi bi-chevron-right"></i>
					</button>
				</div>

				<div className="tns-nav">
				</div>

				<Swiper
					loop={true}
					slidesPerView={1}
					spaceBetween={0} 
          pagination={{
            el: ".tns-nav",
            clickable: true,
          }}
					modules={[Pagination, Navigation]}
          navigation={{
            nextEl: ".next-button",
            prevEl: ".prev-button",
          }}
					className="tiny-slider-one"
				>
					{/* <!-- Single Hero Slide --> */}
					<SwiperSlide>
						<div
							className="single-hero-slide bg-overlay"
							style={{ backgroundImage: `url(/assets/img/banner/1.jpg)` }}
						>
							<div className="h-100 d-flex align-items-center text-center">
								<div className="container">
									<h3 className="text-white mb-1">Pastikan</h3>
									<p className="text-white mb-4">
										Imam, Khatib, dan Muballigh anda telah memiliki Sertifikat Muballigh Muhammadiyah
									</p>
									<a className="btn btn-creative btn-warning" href="#">
										Cek Status Muballigh
									</a>
								</div>
							</div>
						</div>
					</SwiperSlide>

					{/* <!-- Single Hero Slide --> */}
					<SwiperSlide>
						<div
							className="single-hero-slide bg-overlay"
							style={{ backgroundImage: `url(/assets/img/banner/2.jpg)` }}
						>
							<div className="h-100 d-flex align-items-center text-center">
								<div className="container">
									<h3 className="text-white mb-1">Ayo Takmir</h3>
									<p className="text-white mb-4">
										segera unggah laporan keuangan bulan ini, kepatuhan anda cerminan amanah
									</p>
									<a className="btn btn-creative btn-warning" href="#">
										Laporkan
									</a>
								</div>
							</div>
						</div>
					</SwiperSlide>

					{/* <!-- Single Hero Slide --> */}
					<SwiperSlide>
						<div
							className="single-hero-slide bg-overlay"
							style={{ backgroundImage: `url(/assets/img/banner/3.jpg)` }}
						>
							<div className="h-100 d-flex align-items-center text-center">
								<div className="container">
									<h3 className="text-white mb-1">Jangan Tunda</h3>
									<p className="text-white mb-4">
										Laporkan aset-aset masjid (tanah, bangunan, inventaris) agar tercatat resmi di persyarikatan
									</p>
									<a className="btn btn-creative btn-warning" href="#">
										Laporkan
									</a>
								</div>
							</div>
						</div>
					</SwiperSlide>

					{/* <!-- Single Hero Slide --> */}
					<SwiperSlide>
						<div
							className="single-hero-slide bg-overlay"
							style={{ backgroundImage: `url(/assets/img/banner/4.jpg)` }}
						>
							<div className="h-100 d-flex align-items-center text-center">
								<div className="container">
									<h3 className="text-white mb-1">
										Pastikan
									</h3>
									<p className="text-white mb-4">
										Zakat, infak, sedekah anda dikelola oleh Kantor Layanan Lazismu (KLL)
									</p>
									<a className="btn btn-creative btn-warning" href="#">
										Bayar Zakat
									</a>
								</div>
							</div>
						</div>
					</SwiperSlide>

					{/* <!-- Single Hero Slide --> */}
					<SwiperSlide>
						<div
							className="single-hero-slide bg-overlay"
							style={{ backgroundImage: `url(/assets/img/banner/5.jpg)` }}
						>
							<div className="h-100 d-flex align-items-center text-center">
								<div className="container">
									<h3 className="text-white mb-1">Ayo Wakaf</h3>
									<p className="text-white mb-4">
										Dukung pembangunan fasilitas Masjid Muhammadiyah
									</p>
									<a className="btn btn-creative btn-warning" href="#">
										Detail Wakaf
									</a>
								</div>
							</div>
						</div>
					</SwiperSlide>
					
				</Swiper>
			</div>
			</div>
		</>
	);
};

export default HeroSlider;
