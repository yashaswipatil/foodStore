import React, { Component } from "react";
import "./Contact.css";

const contactInfo = [
  {
    icon: "📧",
    label: "Email Us",
    value: "support@chefsfood.com",
    sub: "We reply within 24 hours",
  },
  {
    icon: "📞",
    label: "Call Us",
    value: "+91 98765 43210",
    sub: "Mon–Sat, 9am – 9pm",
  },
  {
    icon: "📍",
    label: "Find Us",
    value: "Mumbai, Maharashtra",
    sub: "India",
  },
];

const faqs = [
  {
    q: "How do I track my order?",
    a: "Once your order is placed, you'll get a live tracking link via SMS and in-app notifications.",
  },
  {
    q: "Can I cancel or modify my order?",
    a: "Orders can be cancelled within 2 minutes of placing. Modifications are not supported after confirmation.",
  },
  {
    q: "What if my food arrives cold or incorrect?",
    a: "Reach out via the app or email us — we'll make it right with a refund or re-delivery.",
  },
];

/* ---------------- Contact Form ---------------- */

class ContactForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      form: {
        name: "",
        email: "",
        subject: "",
        message: "",
      },
      submitted: false,
    };
  }

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = this.state.form;

    if (name && email && message) {
      this.setState({ submitted: true });
    }
  };

  resetForm = () => {
    this.setState({
      submitted: false,
      form: {
        name: "",
        email: "",
        subject: "",
        message: "",
      },
    });
  };

  render() {
    const { form, submitted } = this.state;

    return (
      <div className="contact-form">
        <p className="section-tag">Send A Message</p>
        <h2 className="section-title">Drop us a line.</h2>

        {submitted ? (
          <div className="success-box">
            <span
              style={{
                fontSize: "40px",
                display: "block",
                marginBottom: "16px",
              }}
            >
              ✅
            </span>

            <h3>Message Sent!</h3>

            <p>
              Thanks {form.name}! We'll get back to you at {form.email}
              within 24 hours.
            </p>

            <button
              className="outline-btn"
              onClick={this.resetForm}
            >
              Send Another
            </button>
          </div>
        ) : (
          <form className="form" onSubmit={this.handleSubmit}>
            <input
              className="form-input"
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={this.handleChange}
            />

            <input
              className="form-input"
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={this.handleChange}
            />

            <input
              className="form-input"
              type="text"
              name="subject"
              placeholder="Subject (optional)"
              value={form.subject}
              onChange={this.handleChange}
            />

            <textarea
              className="form-textarea"
              name="message"
              rows="5"
              placeholder="Your Message..."
              value={form.message}
              onChange={this.handleChange}
            />

            <button type="submit" className="primary-btn">
              Send Message
            </button>
          </form>
        )}
      </div>
    );
  }
}

/* ---------------- FAQ ---------------- */

class FAQ extends Component {
  constructor(props) {
    super(props);

    this.state = {
      openFaq: null,
    };
  }

  toggleFaq = (index) => {
    this.setState({
      openFaq:
        this.state.openFaq === index ? null : index,
    });
  };

  render() {
    const { openFaq } = this.state;

    return (
      <div className="faq-section">
        <p className="section-tag">FAQ</p>
        <h2 className="section-title">Quick answers.</h2>

        {faqs.map((faq, index) => (
          <div className="faq-item" key={index}>
            <button
              className="faq-btn"
              onClick={() => this.toggleFaq(index)}
            >
              <span>{faq.q}</span>

              <span>
                {openFaq === index ? "−" : "+"}
              </span>
            </button>

            {openFaq === index && (
              <p className="faq-answer">{faq.a}</p>
            )}
          </div>
        ))}
      </div>
    );
  }
}

/* ---------------- Contact Page ---------------- */

class Contact extends Component {
  render() {
    return (
      <div className="contact-page">
        {/* Hero */}
        <section className="hero">
          <p className="hero-subtitle">Get In Touch</p>

          <h1 className="hero-title">
            We'd love to{" "}
            <span className="hero-highlight">
              hear from you.
            </span>
          </h1>

          <p className="hero-text">
            Whether it's a question, feedback, or just
            a compliment — our team is here for you.
          </p>
        </section>

        {/* Contact Cards */}
        <section className="contact-info-section">
          <div className="contact-cards">
            {contactInfo.map((item) => (
              <div
                className="contact-card"
                key={item.label}
              >
                <span className="contact-card-icon">
                  {item.icon}
                </span>

                <h3 className="contact-card-title">
                  {item.label}
                </h3>

                <p className="contact-card-value">
                  {item.value}
                </p>

                <p className="contact-card-sub">
                  {item.sub}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Form + FAQ */}
        <section className="contact-content">
          <ContactForm />
          <FAQ />
        </section>

        {/* CTA */}
        <section className="cta">
          <h2>Hungry right now?</h2>

          <p>
            Skip the wait — order from top local
            restaurants instantly.
          </p>

          <button className="cta-btn">
            Explore Restaurants
          </button>
        </section>
      </div>
    );
  }
}

export default Contact;

