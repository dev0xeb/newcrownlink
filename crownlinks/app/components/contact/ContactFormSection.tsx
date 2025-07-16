'use client';
import { useState } from "react";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const ContactFormSection = () => {
  const [country, setCountry] = useState('gb');
  const [phone, setPhone] = useState('');
  const [dialCode, setDialCode] = useState('44');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:ade@crownlinksinternational.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: +${dialCode}${phone.replace(/^\\d+/, '')}\n\n${message}`
    )}`;
    window.location.href = mailto;
  };

  return (
    <section className="bg-white py-16 xl:py-24">
      <div className="max-w-2xl xl:max-w-3xl mx-auto px-4 md:px-12 xl:px-32">
        <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold text-center mb-2 xl:mb-4">Kindly fill our contact form</h2>
        <p className="text-gray-600 text-center mb-8 xl:mb-12 text-lg md:text-xl xl:text-2xl">
          If you have any questions about our services, would like to schedule an appointment, or just want more information, don't hesitate to contact us — we're here to help.
        </p>
        <form className="space-y-4 xl:space-y-6" onSubmit={handleSubmit}>
          <input
            className="w-full rounded-lg bg-gray-100 px-4 py-3 xl:px-6 xl:py-4 outline-none text-base xl:text-lg"
            placeholder="Enter your first name"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
          <input
            className="w-full rounded-lg bg-gray-100 px-4 py-3 xl:px-6 xl:py-4 outline-none text-base xl:text-lg"
            placeholder="Enter your email address"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            type="email"
          />
          <div className="flex">
            <div className="rounded-l-lg bg-gray-100 flex items-center px-4 py-3 xl:px-6 xl:py-4 border-r border-gray-200 min-w-[110px] xl:min-w-[130px]">
              <PhoneInput
                country={country}
                value={phone}
                inputClass="!hidden"
                buttonClass="!bg-gray-100 !border-0 !rounded-l-lg"
                containerClass="!m-0 !p-0"
                dropdownClass="!rounded-lg !bg-white"
                disableCountryCode
                disableDropdown={false}
                onChange={(value, data: any) => {
                  setPhone(value);
                  setCountry(data?.countryCode || 'gb');
                  setDialCode(data?.dialCode || '44');
                }}
              />
              <span className="ml-2 text-base xl:text-lg">+{dialCode}</span>
            </div>
            <input
              className="w-full rounded-r-lg bg-gray-100 px-4 py-3 xl:px-6 xl:py-4 outline-none text-base xl:text-lg"
              placeholder="Enter your phone number"
              value={phone.replace(/^\d+/, '')}
              onChange={e => setPhone(e.target.value)}
              required
            />
          </div>
          <input
            className="w-full rounded-lg bg-gray-100 px-4 py-3 xl:px-6 xl:py-4 outline-none text-base xl:text-lg"
            placeholder="Enter the subject"
            value={subject}
            onChange={e => setSubject(e.target.value)}
            required
          />
          <textarea
            className="w-full rounded-lg bg-gray-100 px-4 py-3 xl:px-6 xl:py-4 outline-none text-base xl:text-lg"
            placeholder="Write your message"
            rows={4}
            value={message}
            onChange={e => setMessage(e.target.value)}
            required
          />
          <button
            type="submit"
            className="mx-auto block bg-[#1976d2] text-white font-semibold py-3 px-8 xl:py-4 xl:px-12 rounded-lg hover:bg-[#1557B0] transition-colors text-lg xl:text-xl mt-6 xl:mt-8"
            disabled={!name || !email || !subject || !message}
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactFormSection;