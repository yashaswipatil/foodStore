import React, { Component } from "react";

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
    a: "Live tracking is available after placing your order.",
  },
  {
    q: "Can I cancel my order?",
    a: "Yes, within 2 minutes of placing it.",
  },
  {
    q: "What if food is wrong?",
    a: "We’ll refund or re-deliver immediately.",
  },
];

/* ---------------- Contact Form ---------------- */

class ContactForm extends Component {
  state = {
    form: { name: "", email: "", subject: "", message: "" },
    submitted: false,
  };

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
      form: { name: "", email: "", subject: "", message: "" },
    });
  };

  render() {
    const { form, submitted } = this.state;

    return (
      <div className="w-full rounded-2xl bg-white p-6 shadow-md">
        <p className="text-xs uppercase tracking-widest text-orange-500">
          Send A Message
        </p>

        <h2 className="mb-6 text-2xl font-bold">Drop us a line</h2>

        {submitted ? (
          <div className="text-center">
            <div className="mb-4 text-4xl">✅</div>

            <h3 className="mb-2 text-lg font-semibold">Message Sent!</h3>

            <p className="mb-6 text-sm text-slate-500">
              Thanks {form.name}, we’ll reply to {form.email} soon.
            </p>

            <button
              onClick={this.resetForm}
              className="rounded-full border border-orange-500 px-5 py-2 text-sm text-orange-500 hover:bg-orange-50"
            >
              Send Another
            </button>
          </div>
        ) : (
          <form onSubmit={this.handleSubmit} className="space-y-3">
            <input
              name="name"
              value={form.name}
              onChange={this.handleChange}
              placeholder="Your Name"
              className="w-full rounded-xl border px-4 py-2 outline-none focus:border-orange-500"
            />

            <input
              name="email"
              value={form.email}
              onChange={this.handleChange}
              placeholder="Your Email"
              className="w-full rounded-xl border px-4 py-2 outline-none focus:border-orange-500"
            />

            <input
              name="subject"
              value={form.subject}
              onChange={this.handleChange}
              placeholder="Subject (optional)"
              className="w-full rounded-xl border px-4 py-2 outline-none focus:border-orange-500"
            />

            <textarea
              name="message"
              value={form.message}
              onChange={this.handleChange}
              placeholder="Your Message"
              rows="5"
              className="w-full rounded-xl border px-4 py-2 outline-none focus:border-orange-500"
            />

            <button
              type="submit"
              className="w-full rounded-xl bg-orange-500 py-2 text-white hover:bg-orange-600"
            >
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
  state = { openFaq: null };

  toggleFaq = (index) => {
    this.setState({
      openFaq: this.state.openFaq === index ? null : index,
    });
  };

  render() {
    const { openFaq } = this.state;

    return (
      <div className="w-full rounded-2xl bg-white p-6 shadow-md">
        <p className="text-xs uppercase tracking-widest text-orange-500">FAQ</p>

        <h2 className="mb-6 text-2xl font-bold">Quick answers</h2>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div key={index} className="rounded-xl border p-3">
              <button
                onClick={() => this.toggleFaq(index)}
                className="flex w-full items-center justify-between text-left font-medium"
              >
                {faq.q}
                <span>{openFaq === index ? "−" : "+"}</span>
              </button>

              {openFaq === index && (
                <p className="mt-2 text-sm text-slate-500">{faq.a}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

/* ---------------- Page ---------------- */

class Contact extends Component {
  render() {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Hero */}
        <section className="bg-orange-500 px-6 py-16 text-center text-white">
          <p className="text-xs uppercase tracking-widest text-white/70">
            Get In Touch
          </p>

          <h1 className="mt-3 text-4xl font-bold md:text-5xl">
            We'd love to{" "}
            <span className="text-yellow-200 italic">hear from you</span>
          </h1>

          <p className="mx-auto mt-4 max-w-md text-sm text-white/70">
            Questions, feedback, or support — we’re here for you.
          </p>
        </section>

        {/* Contact Cards */}
        <section className="mx-auto grid max-w-5xl grid-cols-1 gap-4 px-6 py-10 md:grid-cols-3">
          {contactInfo.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl bg-white p-6 text-center shadow-md"
            >
              <div className="text-3xl">{item.icon}</div>

              <h3 className="mt-2 font-semibold">{item.label}</h3>

              <p className="text-sm text-slate-700">{item.value}</p>

              <p className="text-xs text-slate-500">{item.sub}</p>
            </div>
          ))}
        </section>

        {/* Form + FAQ */}
        <section className="mx-auto grid max-w-5xl grid-cols-1 gap-6 px-6 pb-16 md:grid-cols-2">
          <ContactForm />
          <FAQ />
        </section>

        {/* CTA */}
        <section className="bg-orange-500 px-6 py-16 text-center text-white">
          <h2 className="text-3xl font-bold">Hungry right now?</h2>

          <p className="mt-2 text-white/70">
            Skip the wait — order from top restaurants instantly.
          </p>

          <button className="mt-6 rounded-full border border-white px-6 py-2 hover:bg-white hover:text-orange-500">
            Explore Restaurants
          </button>
        </section>
      </div>
    );
  }
}

export default Contact;
