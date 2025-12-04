 

import React from "react";
import Image from "next/image";

const CardArea = () => {
  return (
    <div className="page-content-wrapper py-3">
      {/* Card 01 */}
      <div className="container">
        <div className="element-heading">
          <h6>Card 01</h6>
        </div>
      </div>
      <div className="container">
        <div className="card">
          <div className="card-body text-center p-5">
            <Image 
              className="mb-4" 
              src="/assets/img/bg-img/19.png" 
              alt="Creative ideas illustration"
              width={640}
              height={563}
							  objectFit="cover"
            />
            <h2 className="mb-4">Creative ideas for your company</h2>
            <a className="btn btn-creative btn-danger btn-lg" href="#">
              Discover More
            </a>
          </div>
        </div>
      </div>

      {/* Card 02 */}
      <div className="container">
        <div className="element-heading mt-3">
          <h6>Card 02</h6>
        </div>
      </div>
      <div className="container">
        <div className="card card-round">
          <div className="card-body d-flex align-items-center direction-rtl">
            <div className="card-img-wrap">
              <Image 
                src="/assets/img/bg-img/2.jpg" 
                alt="Creative branding"
                width={120}
                height={120}
              />
            </div>
            <div className="card-content">
              <h5 className="mb-3">Stunning creative branding ideas</h5>
              <a className="btn btn-info rounded-pill" href="#">
                Get yours idea
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Card 03 */}
      <div className="container">
        <div className="element-heading mt-3">
          <h6>Card 03</h6>
        </div>
      </div>
      <div className="container">
        <div className="card card-gradient-bg">
          <div className="card-body p-5 direction-rtl">
            <h2 className="display-3 mb-4">Get free consultation</h2>
            <a className="btn btn-light rounded-pill" href="#">
              Contact Now
            </a>
          </div>
        </div>
      </div>

      {/* Card 04 */}
      <div className="container">
        <div className="element-heading mt-3">
          <h6>Card 04</h6>
        </div>
      </div>
      <div className="container">
        <div className="card card-bg-img bg-img bg-overlay">
          <div className="position-relative w-100 h-100">
            <Image
              src="/assets/img/bg-img/3.jpg"
              alt="Modern branding background"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="card-body p-5 direction-rtl position-relative z-index-1">
            <h2 className="text-white display-3 mb-4">
              Modern branding ideas
            </h2>
            <a className="btn btn-warning" href="#">
              View details
            </a>
          </div>
        </div>
      </div>

      {/* Card 05 */}
      <div className="container">
        <div className="element-heading mt-3">
          <h6>Card 05</h6>
        </div>
      </div>
      <div className="container">
        <div className="card bg-primary">
          <div className="position-absolute w-100 h-100">
            <Image
              src="/assets/img/core-img/2.png"
              alt="Background pattern"
              layout="fill"
              objectFit="cover"
              className="opacity-10"
            />
          </div>
          <div className="card-body p-5 direction-rtl position-relative z-index-1">
            <i className="bi bi-cpu text-white mb-3 display-2"></i>
            <h2 className="text-white">Modern branding ideas</h2>
            <p className="text-white mb-0">
              Affan is a modern and latest technology based mobile template.
            </p>
          </div>
        </div>
      </div>

      {/* Bootstrap Card */}
      <div className="container">
        <div className="element-heading mt-3">
          <h6>Bootstrap Card</h6>
        </div>
      </div>
      <div className="container">
        <div className="card position-relative shadow-sm">
          <div className="position-relative" style={{ height: '200px' }}>
            <Image
              className="card-img-top"
              src="/assets/img/bg-img/1.jpg"
              alt="Howdy Affan"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <span className="badge bg-warning text-dark position-absolute card-badge">
            Now $24
          </span>
          <div className="card-body direction-rtl">
            <h2>Howdy, Affan!</h2>
            <p>
              Affan is a modern and latest technology based mobile template.
              Its come with creative design & progressive web app (PWA)
              features.
            </p>
            <a className="btn btn-primary" href="#">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardArea;