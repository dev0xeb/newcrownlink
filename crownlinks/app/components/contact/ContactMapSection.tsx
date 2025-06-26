// app/components/contact/ContactMapSection.tsx
const ContactMapSection = () => (
    <section className="bg-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19800.123456789!2d-0.1277583!3d51.5073509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b3333333333%3A0x123456789abcdef!2sLondon!5e0!3m2!1sen!2suk!4v1680000000000!5m2!1sen!2suk"
          width="100%"
          height="350"
          className="w-full rounded-lg"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Crownlinks Academy Location"
        ></iframe>
      </div>
    </section>
  );
  
  export default ContactMapSection;