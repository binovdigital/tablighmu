"use client";

import React from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Review = () => {
	return (
		<>
			<div className="container">
				<div className="card mb-3">
					<div className="card-body">
						<h3>Testimoni Donatur</h3>

						<div className="testimonial-slide-three-wrapper">
							<Swiper
								loop={true}
								slidesPerView={1}
								spaceBetween={0}
								pagination={{
									el: ".tns-nav",
									clickable: true,
								}}
								modules={[Pagination]}
								className="testimonial-slide3 testimonial-style3"
							>
								{/* <!-- Single Testimonial Slide --> */}
								<SwiperSlide className="single-testimonial-slide">
									<div className="text-content">
										<span className="d-inline-block badge bg-warning mb-2">
											<i className="bi bi-star-fill me-1"></i>
											<i className="bi bi-star-fill me-1"></i>
											<i className="bi bi-star-fill me-1"></i>
											<i className="bi bi-star-fill me-1"></i>
											<i className="bi bi-star-fill"></i>
										</span>
										<h6 className="mb-2">
											Dengan adanya aplikasi tablighmu jadi mudah berdonasi
										</h6>
										<span className="d-block" style={{ color: "#8480AE" }}>
											Rozaq Akbar
										</span>
									</div>
								</SwiperSlide>

								{/* <!-- Single Testimonial Slide --> */}
								<SwiperSlide className="single-testimonial-slide">
									<div className="text-content">
										<span className="d-inline-block badge bg-warning mb-2">
											<i className="bi bi-star-fill me-1"></i>
											<i className="bi bi-star-fill me-1"></i>
											<i className="bi bi-star-fill me-1"></i>
											<i className="bi bi-star-fill me-1"></i>
											<i className="bi bi-star-fill"></i>
										</span>
										<h6 className="mb-2">
											Saya Takmir, saya aktif melaporkan kegiatan masjid saya
										</h6>
										<span className="d-block" style={{ color: "#8480AE" }}>
											Bayu Firdaus
										</span>
									</div>
								</SwiperSlide>

								{/* <!-- Single Testimonial Slide --> */}
								<SwiperSlide className="single-testimonial-slide">
									<div className="text-content">
										<span className="d-inline-block badge bg-warning mb-2">
											<i className="bi bi-star-fill me-1"></i>
											<i className="bi bi-star-fill me-1"></i>
											<i className="bi bi-star-fill me-1"></i>
											<i className="bi bi-star-fill me-1"></i>
											<i className="bi bi-star-fill"></i>
										</span>
										<h6 className="mb-2">
											Dengan aplikasi ini saya jadi lebih mudah cari khatib jum'at
										</h6>
										<span className="d-block" style={{ color: "#8480AE" }}>
											Sumardani
										</span>
									</div>
								</SwiperSlide>

								{/* <!-- Single Testimonial Slide --> */}
								<SwiperSlide className="single-testimonial-slide">
									<div className="text-content">
										<span className="d-inline-block badge bg-warning mb-2">
											<i className="bi bi-star-fill me-1"></i>
											<i className="bi bi-star-fill me-1"></i>
											<i className="bi bi-star-fill me-1"></i>
											<i className="bi bi-star-fill me-1"></i>
											<i className="bi bi-star-fill"></i>
										</span>
										<h6 className="mb-2">
											Aplikasi ini jadi bukti bahwa Muhammadiyah berkemajuan
										</h6>
										<span className="d-block" style={{ color: "#8480AE" }}>
											Fakhruddin
										</span>
									</div>
								</SwiperSlide>

								<div className="tns-nav"></div>
							</Swiper>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Review;
