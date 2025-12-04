 



"use client";

import React, { useState } from "react";

const AccordionArea = () => {
  if (typeof window !== "undefined") {
    require("bootstrap/js/dist/collapse");
  }

 
	const [activeAccordion, setActiveAccordion] = useState<Record<string, boolean>>({
  accordionStyleSix1: true,  // First item of withImage section
  accordionStyleSix2: false,
  accordionStyleSix3: false,
  accordionStyleFive1: true, // First item of bordered section
  accordionStyleFive2: false,
  accordionStyleFive3: false,
  accordionStyleFive4: false,
  accordionStyleFive5: false,
  accordionStyleOne: true,   // First item of cozy section
  accordionStyleTwo: false,
  accordionStyleThree: false,
  accordionStyleFour: true,  // First item of plusSign section
  accordionStyleFive: false,
  accordionStyleSix: false,
  accordionStyleTen: true,   // First item of dark section
  accordionStyle11: false,
  accordionStyle12: false,
  accordionStyleSeven: true, // First item of compact section
  accordionStyleEight: false,
  accordionStyleNine: false,
  collapseOne: true,         // First item of bootstrap section
  collapseTwo: false,
  collapseThree: false,
});


  const toggleAccordion = (id: string) => {
    setActiveAccordion(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // FAQ Data
  const faqData = {
    withImage: [
      {
        key_id: 1,
        id: "accordionStyleSix1",
        question: "What is refund policy?",
        answer: "Refunds are issued within 30 days of purchase for unused items in original condition, with a receipt. Shipping fees are non-refundable.",
        backgroundImage: "/assets/img/bg-img/1.jpg"
      },
      {
        key_id: 2,
        id: "accordionStyleSix2",
        question: "Can it accept Paypal?",
        answer: "Yes, we accept PayPal as a payment method.",
        backgroundImage: "/assets/img/bg-img/2.jpg"
      },
      {
        key_id: 3,
        id: "accordionStyleSix3",
        question: "What is PWA ready?",
        answer: "PWA Ready means that the website or application is optimized to function as a Progressive Web App, offering features like offline access, push notifications, and a native app-like experience.",
        backgroundImage: "/assets/img/bg-img/3.jpg"
      }
    ],
    bordered: [
      {
        key_id: 1,
        id: "accordionStyleFive1",
        question: "What is refund policy?",
        answer: "Refunds are issued within 30 days of purchase for unused items in original condition, with a receipt. Shipping fees are non-refundable.",
        variant: "primary",
        icon: "bi-plus-lg"
      },
      {
        key_id: 2,
        id: "accordionStyleFive2",
        question: "Can it accept Paypal?",
        answer: "Yes, we accept PayPal as a payment method.",
        variant: "warning",
        icon: "bi-plus-lg"
      },
      {
        key_id: 3,
        id: "accordionStyleFive3",
        question: "What is PWA ready?",
        answer: "PWA Ready means that the website or application is optimized to function as a Progressive Web App, offering features like offline access, push notifications, and a native app-like experience.",
        variant: "success",
        icon: "bi-plus-lg"
      },
      {
        key_id: 4,
        id: "accordionStyleFive4",
        question: "What is the single license?",
        answer: "A single license permits one user to use the software or product on one device, typically restricting redistribution or installation on multiple devices.",
        variant: "info",
        icon: "bi-plus-lg"
      },
      {
        key_id: 5,
        id: "accordionStyleFive5",
        question: "Whats new in 2.0?",
        answer: "Version 2.0 includes a redesigned user interface, enhanced performance, new features like real-time collaboration, improved security measures, and additional customization options.",
        variant: "danger",
        icon: "bi-plus-lg"
      }
    ],
    cozy: [
      {
        key_id: 1,
        id: "accordionStyleOne",
        question: "What is refund policy?",
        answer: "Refunds are issued within 30 days of purchase for unused items in original condition, with a receipt. Shipping fees are non-refundable.",
        icon: "bi-chevron-down"
      },
      {
        key_id: 2,
        id: "accordionStyleTwo",
        question: "Can it accept Paypal?",
        answer: "Yes, we accept PayPal as a payment method.",
        icon: "bi-chevron-down"
      },
      {
        key_id: 3,
        id: "accordionStyleThree",
        question: "What is PWA ready?",
        answer: "PWA Ready means that the website or application is optimized to function as a Progressive Web App, offering features like offline access, push notifications, and a native app-like experience.",
        icon: "bi-chevron-down"
      }
    ],
    plusSign: [
      {
        key_id: 1,
        id: "accordionStyleFour",
        question: "What is refund policy?",
        answer: "Refunds are issued within 30 days of purchase for unused items in original condition, with a receipt. Shipping fees are non-refundable.",
        icon: "bi-plus-lg"
      },
      {
        key_id: 2,
        id: "accordionStyleFive",
        question: "Can it accept Paypal?",
        answer: "Yes, we accept PayPal as a payment method.",
        icon: "bi-plus-lg"
      },
      {
        key_id: 3,
        id: "accordionStyleSix",
        question: "What is PWA ready?",
        answer: "PWA Ready means that the website or application is optimized to function as a Progressive Web App, offering features like offline access, push notifications, and a native app-like experience.",
        icon: "bi-plus-lg"
      }
    ],
    dark: [
      {
        key_id: 1,
        id: "accordionStyleTen",
        question: "What is refund policy?",
        answer: "Refunds are issued within 30 days of purchase for unused items in original condition, with a receipt. Shipping fees are non-refundable.",
        icon: "bi-caret-down"
      },
      {
        key_id: 2,
        id: "accordionStyle11",
        question: "Can it accept Paypal?",
        answer: "Yes, we accept PayPal as a payment method.",
        icon: "bi-caret-down"
      },
      {
        key_id: 3,
        id: "accordionStyle12",
        question: "What is PWA ready?",
        answer: "PWA Ready means that the website or application is optimized to function as a Progressive Web App, offering features like offline access, push notifications, and a native app-like experience.",
        icon: "bi-caret-down"
      }
    ],
    compact: [
      {
        key_id: 1,
        id: "accordionStyleSeven",
        question: "What is refund policy?",
        answer: "Refunds are issued within 30 days of purchase for unused items in original condition, with a receipt. Shipping fees are non-refundable.",
        icon: "bi-caret-down"
      },
      {
        key_id: 2,
        id: "accordionStyleEight",
        question: "Can it accept Paypal?",
        answer: "Yes, we accept PayPal as a payment method.",
        icon: "bi-caret-down"
      },
      {
        key_id: 3,
        id: "accordionStyleNine",
        question: "What is PWA ready?",
        answer: "PWA Ready means that the website or application is optimized to function as a Progressive Web App, offering features like offline access, push notifications, and a native app-like experience.",
        icon: "bi-caret-down"
      }
    ],
    bootstrap: [
      {
        key_id: 1,
        id: "collapseOne",
        question: "What is PWA ready?",
        answer: "PWA Ready means that the website or application is optimized to function as a Progressive Web App, offering features like offline access, push notifications, and a native app-like experience.",
      },
      {
        key_id: 2,
        id: "collapseTwo",
        question: "What is refund policy?",
        answer: "Refunds are issued within 30 days of purchase for unused items in original condition, with a receipt. Shipping fees are non-refundable.",
      },
      {
        key_id: 3,
        id: "collapseThree",
        question: "Can it accept Paypal?",
        answer: "Yes, we accept PayPal as a payment method.",
      }
    ]
  };

  const renderAccordionWithImage = () => (
    <div className="accordion accordion-style-six" id="accordionStyle6">
      {faqData.withImage.map((item) => (
        <div
          key={item.id}
          className="accordion-item"
          style={{ backgroundImage: `url(${item.backgroundImage})` }}
        >
          <div className="accordion-header" id={`accordionSix-${item.key_id}`}>
            <h6
              onClick={() => toggleAccordion(item.id)}
              data-bs-toggle="collapse"
              data-bs-target={`#${item.id}`}
              aria-expanded={activeAccordion[item.id]}
              aria-controls={item.id}
              className={activeAccordion[item.id] ? "" : "collapsed"}
            >
              {item.question}
            </h6>
            <div
              className={`accordion-collapse collapse ${activeAccordion[item.id] ? "show" : ""}`}
              id={item.id}
              aria-labelledby={`accordionSix-${item.key_id}`}
              data-bs-parent="#accordionStyle6"
            >
              <p className="mb-0 mt-2 text-white">{item.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderBorderedAccordion = () => (
    <div className="accordion accordion-style-five" id="accordionStyle5">
      {faqData.bordered.map((item) => (
        <div key={item.id} className={`accordion-item accordion-bg-${item.variant}`}>
          <div className="accordion-header" id={`accordionFive-${item.key_id}`}>
            <h6
              onClick={() => toggleAccordion(item.id)}
              data-bs-toggle="collapse"
              data-bs-target={`#${item.id}`}
              aria-expanded={activeAccordion[item.id]}
              aria-controls={item.id}
              className={activeAccordion[item.id] ? "" : "collapsed"}
            >
              <i className={`bi ${item.icon}`}></i>
              {item.question}
            </h6>
            <div
              className={`accordion-collapse collapse ${activeAccordion[item.id] ? "show" : ""}`}
              id={item.id}
              aria-labelledby={`accordionFive-${item.key_id}`}
              data-bs-parent="#accordionStyle5"
            >
              <p className="mb-0 mt-2">{item.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderCozyAccordion = () => (
    <div className="accordion accordion-flush accordion-style-one" id="accordionStyle1">
      {faqData.cozy.map((item) => (
        <div key={item.id} className="accordion-item">
          <div className="accordion-header" id={`accordion-${item.key_id}`}>
            <h6
              onClick={() => toggleAccordion(item.id)}
              data-bs-toggle="collapse"
              data-bs-target={`#${item.id}`}
              aria-expanded={activeAccordion[item.id]}
              aria-controls={item.id}
              className={activeAccordion[item.id] ? "" : "collapsed"}
            >
              {item.question}
              <i className={`bi ${item.icon}`}></i>
            </h6>
          </div>
          <div
            className={`accordion-collapse collapse ${activeAccordion[item.id] ? "show" : ""}`}
            id={item.id}
            aria-labelledby={`accordion-${item.key_id}`}
            data-bs-parent="#accordionStyle1"
          >
            <div className="accordion-body">
              <p className="mb-0">{item.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderPlusSignAccordion = () => (
    <div className="accordion accordion-flush accordion-style-two" id="accordionStyle2">
      {faqData.plusSign.map((item) => (
        <div key={item.id} className="accordion-item">
          <div className="accordion-header" id={`accordion-${item.key_id}`}>
            <h6
              onClick={() => toggleAccordion(item.id)}
              data-bs-toggle="collapse"
              data-bs-target={`#${item.id}`}
              aria-expanded={activeAccordion[item.id]}
              aria-controls={item.id}
              className={activeAccordion[item.id] ? "" : "collapsed"}
            >
              <i className={`bi ${item.icon}`}></i>
              {item.question}
            </h6>
          </div>
          <div
            className={`accordion-collapse collapse ${activeAccordion[item.id] ? "show" : ""}`}
            id={item.id}
            aria-labelledby={`accordion-${item.key_id}`}
            data-bs-parent="#accordionStyle2"
          >
            <div className="accordion-body">
              <p className="mb-0">{item.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderDarkAccordion = () => (
    <div className="accordion accordion-style-four" id="accordionStyle4">
      {faqData.dark.map((item) => (
        <div key={item.id} className="accordion-item bg-transparent">
          <div className="accordion-header" id={`accordion-${item.key_id}`}>
            <h6
              onClick={() => toggleAccordion(item.id)}
              data-bs-toggle="collapse"
              data-bs-target={`#${item.id}`}
              aria-expanded={activeAccordion[item.id]}
              aria-controls={item.id}
              className={activeAccordion[item.id] ? "" : "collapsed"}
            >
              # {item.question}
              <i className={`bi ${item.icon}`}></i>
            </h6>
          </div>
          <div
            className={`accordion-collapse collapse ${activeAccordion[item.id] ? "show" : ""}`}
            id={item.id}
            aria-labelledby={`accordion-${item.key_id}`}
            data-bs-parent="#accordionStyle4"
          >
            <div className="accordion-body">
              <p className="mb-0">{item.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderCompactAccordion = () => (
    <div className="accordion accordion-style-three" id="accordionStyle3">
      {faqData.compact.map((item) => (
        <div key={item.id} className="accordion-item">
          <div className="accordion-header" id={`accordion-${item.key_id}`}>
            <h6
              onClick={() => toggleAccordion(item.id)}
              data-bs-toggle="collapse"
              data-bs-target={`#${item.id}`}
              aria-expanded={activeAccordion[item.id]}
              aria-controls={item.id}
              className={`shadow-sm rounded border ${activeAccordion[item.id] ? "" : "collapsed"}`}
            >
              {item.question}
              <i className={`bi ${item.icon}`}></i>
            </h6>
          </div>
          <div
            className={`accordion-collapse collapse ${activeAccordion[item.id] ? "show" : ""}`}
            id={item.id}
            aria-labelledby={`accordion-${item.key_id}`}
            data-bs-parent="#accordionStyle3"
          >
            <div className="accordion-body">
              <p className="mb-0">{item.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderBootstrapAccordion = () => (
    <div className="accordion" id="basicaccordion">
      {faqData.bootstrap.map((item) => (
        <div key={item.id} className="accordion-item">
          <div className="accordion-header" id={`heading-${item.key_id}`}>
            <button
              className={`accordion-button ${activeAccordion[item.id] ? "" : "collapsed"}`}
              type="button"
              onClick={() => toggleAccordion(item.id)}
              data-bs-toggle="collapse"
              data-bs-target={`#${item.id}`}
              aria-expanded={activeAccordion[item.id]}
              aria-controls={item.id}
            >
              {item.question}
            </button>
          </div>
          <div
            className={`accordion-collapse collapse ${activeAccordion[item.id] ? "show" : ""}`}
            id={item.id}
            aria-labelledby={`heading-${item.key_id}`}
            data-bs-parent="#basicaccordion"
          >
            <div className="accordion-body">
              <p className="mb-0">{item.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="page-content-wrapper py-3">
      {/* Accordion with Image */}
      <div className="container">
        <div className="element-heading">
          <h6>Accordion with Image</h6>
        </div>
      </div>
      <div className="container">
        <div className="card">
          <div className="card-body">{renderAccordionWithImage()}</div>
        </div>
      </div>

      {/* Bordered Accordion */}
      <div className="container">
        <div className="element-heading mt-3">
          <h6>Bordered Accordion</h6>
        </div>
      </div>
      <div className="container">
        <div className="card">
          <div className="card-body">{renderBorderedAccordion()}</div>
        </div>
      </div>

      {/* Cozy Accordion */}
      <div className="container">
        <div className="element-heading mt-3">
          <h6>Cozy Accordion</h6>
        </div>
      </div>
      <div className="container">
        <div className="card">
          <div className="card-body">{renderCozyAccordion()}</div>
        </div>
      </div>

      {/* Accordion with Plus Sign */}
      <div className="container">
        <div className="element-heading mt-3">
          <h6>Accordion with Plus Sign</h6>
        </div>
      </div>
      <div className="container">
        <div className="card">
          <div className="card-body">{renderPlusSignAccordion()}</div>
        </div>
      </div>

      {/* Dark Accordion */}
      <div className="container">
        <div className="element-heading mt-3">
          <h6>Dark Accordion</h6>
        </div>
      </div>
      <div className="container">
        <div className="card bg-dark">
          <div className="card-body">{renderDarkAccordion()}</div>
        </div>
      </div>

      {/* Compact Accordion */}
      <div className="container">
        <div className="element-heading mt-3">
          <h6>Compact Accordion</h6>
        </div>
      </div>
      <div className="container">
        <div className="card">
          <div className="card-body">{renderCompactAccordion()}</div>
        </div>
      </div>

      {/* Bootstrap Accordion */}
      <div className="container">
        <div className="element-heading mt-3">
          <h6>Bootstrap Accordion</h6>
        </div>
      </div>
      <div className="container">
        <div className="card">
          <div className="card-body">{renderBootstrapAccordion()}</div>
        </div>
      </div>
    </div>
  );
};

export default AccordionArea;