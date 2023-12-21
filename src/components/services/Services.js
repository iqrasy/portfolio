import React from "react";
import "./services.scss";

const Services = () => {
	return (
		<div className="first-container">
			<div className="main-div">
				<h1 className="main-title">SERVICES</h1>
				<p className="service-pitch">
					I specialize in providing comprehensive web development solutions,
					including e-commerce, content management systems, and responsive
					design services. I am dedicated to delivering high-quality results
					tailored to your business needs. Elevate your online presence with my
					expertise in search engine optimization (SEO).
				</p>
			</div>
			<div className="service-container">
				<p className="service">E-commerce solutions</p>
				<p className="service">Content Management Systems</p>
				<p className="service">Responsive design Services</p>
				<p className="service">Search Engine optimization</p>
			</div>
		</div>
	);
};

export default Services;
