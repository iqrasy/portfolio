import React from "react";
import Footer from "../Footer";
import "./contact.scss";

const Contact = () => {
	return (
		<>
			<div className="wrap">
				<div className="container-wrapper">
					<div></div>
					<div className="first-grid">
						<p>
							Get in touch with me to discuss your project, ask questions, or
							inquire about my services. I am here to assist you.
						</p>
						<p>
							Email: syiqra@hotmail.com
							{/* Add a contact form if applicable */}
						</p>
					</div>
					<div className="second-grid">
						<p className="project">Got a Project in Mind?</p>
						<h1 className="link">LET'S TALK</h1>
					</div>
				</div>
				<div className="footer">{/* <Footer /> */}</div>
			</div>
		</>
	);
};

export default Contact;
