import React from "react";

const stats = [
  { value: "50K+", label: "Happy Customers" },
  { value: "200+", label: "Partner Restaurants" },
  { value: "30 min", label: "Avg. Delivery Time" },
  { value: "4.9★", label: "App Rating" },
];

const features = [
  {
    icon: "🍔",
    title: "Top Local Restaurants",
    desc: "We partner only with the best-rated local spots.",
  },
  {
    icon: "⚡",
    title: "Fast Delivery",
    desc: "Hot and fresh food delivered quickly.",
  },
  {
    icon: "📍",
    title: "Live Tracking",
    desc: "Track your order in real-time.",
  },
  {
    icon: "🎁",
    title: "Exclusive Offers",
    desc: "Discounts and rewards for users.",
  },
];

const team = [
  { initials: "AK", name: "Yashaswi Patil", role: "Co-Founder & CEO" },
  { initials: "PS", name: "Yesashwini", role: "Head of Operations" },
  { initials: "RN", name: "Yashaswi K Patil", role: "Lead Product Designer" },
];

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-slate-800">
      {/* Hero */}
      <section className="bg-orange-500 px-6 py-16 text-center text-white">
        <p className="mb-3 text-xs uppercase tracking-widest text-white/70">
          Our Story
        </p>

        <h1 className="mx-auto mb-4 max-w-2xl text-4xl font-bold md:text-5xl">
          Food made for{" "}
          <span className="text-yellow-200 italic">real life.</span>
        </h1>

        <p className="mx-auto max-w-md text-sm text-white/70">
          Chef's Food was built on a simple belief — everyone deserves a great
          meal, delivered without the fuss.
        </p>
      </section>

      {/* Stats */}
      <div className="grid grid-cols-2 border-b bg-white md:grid-cols-4">
        {stats.map((s) => (
          <div
            key={s.label}
            className="border-r p-6 text-center last:border-none"
          >
            <div className="text-2xl font-bold text-orange-500">{s.value}</div>
            <div className="mt-1 text-xs uppercase tracking-wider text-slate-500">
              {s.label}
            </div>
          </div>
        ))}
      </div>

      {/* Story */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <p className="text-xs uppercase tracking-widest text-orange-500">
          Who We Are
        </p>

        <h2 className="mt-2 text-3xl font-bold md:text-4xl">
          Born from hunger, built with care.
        </h2>

        <p className="mt-6 leading-relaxed text-slate-600">
          It started with a late-night craving and a frustrating app experience.
          We built Chef's Food to make ordering simple and reliable.
        </p>

        <p className="mt-4 text-slate-500">
          Today we serve thousands of customers across the city with 200+
          restaurant partners.
        </p>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <p className="text-xs uppercase tracking-widest text-orange-500">
          What We Offer
        </p>

        <h2 className="mt-2 text-3xl font-bold md:text-4xl">
          Everything you need, nothing you don't.
        </h2>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl bg-white p-6 shadow-md transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="text-3xl">{f.icon}</div>
              <h3 className="mt-3 text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-slate-500">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <p className="text-xs uppercase tracking-widest text-orange-500">
          The Team
        </p>

        <h2 className="mt-2 text-3xl font-bold md:text-4xl">
          People behind the plate.
        </h2>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {team.map((t) => (
            <div
              key={t.name}
              className="flex items-center gap-4 rounded-2xl bg-white p-4 shadow-md transition hover:-translate-y-1"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-orange-500 text-sm font-bold text-white">
                {t.initials}
              </div>

              <div>
                <p className="font-semibold">{t.name}</p>
                <p className="text-sm text-slate-500">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-orange-500 px-6 py-16 text-center text-white">
        <h2 className="text-3xl font-bold md:text-4xl">Ready to order?</h2>

        <p className="mt-3 text-white/70">
          Crave it, tap it, get it — anytime, anywhere.
        </p>

        <button className="mt-6 rounded-full border border-white px-6 py-2 font-medium transition hover:bg-white hover:text-orange-500">
          Explore Restaurants
        </button>
      </section>
    </div>
  );
};

export default About;
