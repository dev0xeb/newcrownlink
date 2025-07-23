'use client';
import { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';


interface CustomerInfoFormProps {
  onSubmit: (data: any) => void;
  isLoading?: boolean;
}

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  country: '',
  countryCode: '',
  cardNumber: '',
  cvv: '',
};


const CustomerInfoForm: React.FC<CustomerInfoFormProps> = ({ onSubmit, isLoading }) => {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState<any>({});
  const [country, setCountry] = useState('gb');
  const [phone, setPhone] = useState('');
  const [dialCode, setDialCode] = useState('44');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCountryCodeChange = (selected: any) => {
    setForm({ ...form, countryCode: selected ? selected.value : '' });
  };

  const validate = () => {
    const errs: any = {};
    if (!form.firstName) errs.firstName = 'First name is required';
    if (!form.lastName) errs.lastName = 'Last name is required';
    if (!form.email) errs.email = 'Email is required';
    if (!form.phone) errs.phone = 'Phone is required';
    if (!form.country) errs.country = 'Country is required';
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      onSubmit(form);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow p-4 sm:p-6 xl:p-10 w-full max-w-xl flex flex-col gap-3 sm:gap-4 xl:gap-6">
      <h2 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-4 xl:text-3xl">Customer Information</h2>
      <input
        name="firstName"
        value={form.firstName}
        onChange={handleChange}
        placeholder="Enter your first name"
        className={`rounded-lg bg-gray-100 px-3 py-2 sm:px-4 sm:py-3 xl:px-6 xl:py-4 outline-none text-sm sm:text-base xl:text-lg ${errors.firstName ? 'border border-red-500' : ''}`}
      />
      {errors.firstName && <span className="text-red-500 text-xs">{errors.firstName}</span>}
      <input
        name="lastName"
        value={form.lastName}
        onChange={handleChange}
        placeholder="Enter your last name"
        className={`rounded-lg bg-gray-100 px-3 py-2 sm:px-4 sm:py-3 xl:px-6 xl:py-4 outline-none text-sm sm:text-base xl:text-lg ${errors.lastName ? 'border border-red-500' : ''}`}
      />
      {errors.lastName && <span className="text-red-500 text-xs">{errors.lastName}</span>}
      <input
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Enter your email address"
        className={`rounded-lg bg-gray-100 px-3 py-2 sm:px-4 sm:py-3 xl:px-6 xl:py-4 outline-none text-sm sm:text-base xl:text-lg ${errors.email ? 'border border-red-500' : ''}`}
      />
      {errors.email && <span className="text-red-500 text-xs">{errors.email}</span>}
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
              setForm({ ...form, phone: value, countryCode: data?.dialCode || '44' });
            }}
          />
          <span className="ml-2 text-base xl:text-lg">+{dialCode}</span>
        </div>
        <input
          className="w-full rounded-r-lg bg-gray-100 px-4 py-3 xl:px-6 xl:py-4 outline-none text-base xl:text-lg"
          placeholder="Enter your phone number"
          value={phone.replace(/^\d+/, '')}
          onChange={e => {
            setPhone(e.target.value);
            setForm({ ...form, phone: e.target.value });
          }}
          required
        />
      </div>
      {errors.phone && <span className="text-red-500 text-xs">{errors.phone}</span>}
      <div className="flex gap-2">
        <input
          name="cardNumber"
          value={form.cardNumber || ''}
          onChange={handleChange}
          placeholder="Card Number"
          className="flex-1 rounded-lg bg-gray-100 px-3 py-2 sm:px-4 sm:py-3 xl:px-6 xl:py-4 outline-none text-sm sm:text-base xl:text-lg"
          maxLength={19}
          inputMode="numeric"
          autoComplete="cc-number"
        />
        <input
          name="cvv"
          value={form.cvv || ''}
          onChange={handleChange}
          placeholder="CVV"
          className="w-24 rounded-lg bg-gray-100 px-3 py-2 sm:px-4 sm:py-3 xl:px-6 xl:py-4 outline-none text-sm sm:text-base xl:text-lg"
          maxLength={4}
          inputMode="numeric"
          autoComplete="cc-csc"
        />
      </div>
      
      <button
        type="submit"
        className="w-full bg-[#1976d2] text-white font-semibold py-2 sm:py-3 xl:py-4 rounded-full text-base sm:text-lg xl:text-xl mt-3 sm:mt-4 xl:mt-6 hover:bg-[#145bb0] transition"
        disabled={isLoading}
      >
        {isLoading ? 'Processing...' : 'Continue to Pay'}
      </button>
    </form>
  );
};

export default CustomerInfoForm;