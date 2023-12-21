import React from "react";
import Footer from "../Footer";
import "./contact.scss";

const Contact = () => {
	return (
		<div className="wrap">
			<div className="container-wrapper">
				<p className="project">Got a Project in Mind?</p>
				<div className="first-grid">
					<p className="get-in-touch">
						Get in touch with me to discuss your project, ask questions, or
						inquire about my services. I am here to assist you.
					</p>
					<p className="contact-info">
						Email: syiqra@hotmail.com
						{/* Add a contact form if applicable */}
					</p>
				</div>
				<div className="second-grid">
					<h1 className="link">LET'S TALK</h1>
				</div>
				<Footer />
			</div>
		</div>
	);
};

export default Contact;
