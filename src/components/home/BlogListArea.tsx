import React from "react";
import Link from "next/link";
import blog_data from "@/data/blog_data";
import Image from "next/image";

const BlogGridArea = () => {
	return (
		<>
				<div className="blog-wrapper direction-rtl">
					<div className="container">
						<h5>Berita Muhammadiyah</h5>
						<div className="row g-3">
							{blog_data.map((item, i) => (
								<div key={i} className="col-12 col-sm-4 col-md-3">
									<div className="card position-relative shadow-sm">
										<Image width={500} height={500} className="card-img-top" src={item.img} alt="" />
										<span className="badge bg-warning text-dark position-absolute card-badge">
											{item.category}
										</span>
										<div className="card-body">
											<span className="badge bg-danger rounded-pill mb-2 d-inline-block">
												{item.date}
											</span>
											<a
												className="blog-title d-block mb-3 text-dark"
											>
												{item.title}
											</a>
											<a
												className="btn btn-primary btn-sm"
											>
												Read More
											</a>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>

				<div className="container">
					<div className="card mt-3">
						<div className="card-body p-3">
							<nav aria-label="Page navigation example">
								<ul className="pagination justify-content-center pagination-one direction-rtl">
									<li className="page-item disabled">
										<a className="page-link" href="#" aria-label="Previous">
											<i className="bi bi-chevron-left"></i>
										</a>
									</li>
									<li className="page-item active">
										<a className="page-link" href="#">
											1
										</a>
									</li>
									<li className="page-item">
										<a className="page-link" href="#">
											2
										</a>
									</li>
									<li className="page-item">
										<a className="page-link" href="#">
											...
										</a>
									</li>
									<li className="page-item">
										<a className="page-link" href="#">
											9
										</a>
									</li>
									<li className="page-item">
										<a className="page-link" href="#" aria-label="Next">
											<i className="bi bi-chevron-right"></i>
										</a>
									</li>
								</ul>
							</nav>
						</div>
					</div>
				</div>
		</>
	);
};

export default BlogGridArea;
