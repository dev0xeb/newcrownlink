'use client';
import { useState } from "react";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const ContactFormSection = () => {
  const [country, setCountry] = useState('gb');
  const [phone, setPhone] = useState('');
  const [dialCode, setDialCode] = useState('44');

  return (
    <section className="bg-white py-16">
      <div className="max-w-2xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-2">Kindly fill our contact form</h2>
        <p className="text-gray-600 text-center mb-8 text-lg">
          If you have any questions about our services, would like to schedule an appointment, or just want more information, don't hesitate to contact us — we're here to help.
        </p>
        <form className="space-y-4">
          <input
            className="w-full rounded-lg bg-gray-100 px-4 py-3 outline-none text-base"
            placeholder="Enter your first name"
          />
          <input
            className="w-full rounded-lg bg-gray-100 px-4 py-3 outline-none text-base"
            placeholder="Enter your email address"
          />
          <div className="flex">
            <div className="rounded-l-lg bg-gray-100 flex items-center px-4 py-3 border-r border-gray-200 min-w-[110px]">
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
              <span className="ml-2 text-base">+{dialCode}</span>
            </div>
            <input
              className="w-full rounded-r-lg bg-gray-100 px-4 py-3 outline-none text-base"
              placeholder="Enter your phone number"
              value={phone.replace(/^\\d+/, '')}
              onChange={e => setPhone(e.target.value)}
            />
          </div>
          <input
            className="w-full rounded-lg bg-gray-100 px-4 py-3 outline-none text-base"
            placeholder="Enter the subject"
          />
          <textarea
            className="w-full rounded-lg bg-gray-100 px-4 py-3 outline-none text-base"
            placeholder="Write your message"
            rows={4}
          />
          <button
            type="submit"
            className="mx-auto block bg-[#1976d2] text-white font-semibold py-3 px-8 rounded-lg hover:bg-[#1557B0] transition-colors text-lg mt-6"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactFormSection;