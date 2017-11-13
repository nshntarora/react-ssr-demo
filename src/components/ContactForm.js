import React from "react";

class ContactForm extends React.Component {
    render() {
        return (
            <div id="footer" className="wrapper style2">
			<div className="container">
				<section>
					<header className="major">
						<h2>Mauris vulputate dolor</h2>
						<span className="byline">Integer sit amet pede vel arcu aliquet pretium</span>
					</header>
					<form method="post" action="#">
						<div className="row half">
							<div className="12u">
								<input className="text" type="text" name="name" id="name" placeholder="Name" />
							</div>
						</div>
						<div className="row half">
							<div className="12u">
								<input className="text" type="text" name="email" id="email" placeholder="Email" />
							</div>
						</div>
						<div className="row half">
							<div className="12u">
								<textarea name="message" id="message" placeholder="Message"></textarea>
							</div>
						</div>
						<div className="row half">
							<div className="12u">
								<ul className="actions">
									<li>
										<input type="submit" value="Send Message" className="button alt" />
									</li>
								</ul>
							</div>
						</div>
					</form>
				</section>
			</div>
		</div>
        );
    }
}

export default ContactForm;