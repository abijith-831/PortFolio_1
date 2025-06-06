import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/6572420_3301603.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { useSnackbar } from 'notistack';

export const Contact = () => {

  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [isLoading, setIsLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formDetails.firstName || !formDetails.email || !formDetails.message) {
      enqueueSnackbar('Please fill in all required fields (name, email, message).', { variant: 'warning' });
      return;
    }

    setButtonText("Sending...");
    setIsLoading(true);

    try {

      //================ hosted on vercel ===================
      const response = await fetch("https://portfolio-1-server.onrender.com/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formDetails),
      });

      //================localhost =======================
      // const response = await fetch("http://localhost:5000/contact", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(formDetails),
      // });

      if (!response.ok) {
        throw new Error(`Server responded with status: ${response.status}`);
      }

      const result = await response.json();

      if (result.status === 'Message Sent') {
        enqueueSnackbar('Message sent successfully!', { variant: 'success' });
        setFormDetails(formInitialDetails);
      } else {
        enqueueSnackbar(result.error || 'Something went wrong, please try again later.', { variant: 'error' });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      enqueueSnackbar(`Connection error: ${error.message}`, { variant: 'error' });
    } finally {
      setButtonText("Send");
      setIsLoading(false);
    }
  };

  return (
    <section className="contact" id="connect" style={{ background: 'linear-gradient(to top, #031f13, #036444 )' }}>
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Get In Touch</h2>
                  <form onSubmit={handleSubmit}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" value={formDetails.firstName} placeholder="First Name *"  onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)} />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="email" value={formDetails.email} placeholder="Email Address *"  onChange={(e) => onFormUpdate('email', e.target.value)} />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="tel" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)} />
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea rows="6" value={formDetails.message} placeholder="Message *"  onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                        <div className="text-center mt-3">
                          <button type="submit" disabled={isLoading}><span>{buttonText}</span></button>
                        </div>
                      </Col>
                    </Row>
                  </form>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
