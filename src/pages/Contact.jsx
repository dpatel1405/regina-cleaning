import ContactForm from '../components/Contact';

function Contact() {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-green-700 py-20 px-6 text-center">
        <p className="text-green-200 text-sm font-semibold uppercase tracking-widest mb-3">
          Get In Touch
        </p>
        <h1 className="text-5xl font-bold text-white mb-4">
          Contact Us
        </h1>
        <p className="text-green-100 text-lg max-w-xl mx-auto">
          We would love to hear from you. Get a free quote or just ask us anything.
        </p>
      </section>
      <ContactForm />
    </div>
  );
}

export default Contact;