'use client';
import { useState } from 'react';

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
};

const CustomerInfoForm: React.FC<CustomerInfoFormProps> = ({ onSubmit, isLoading }) => {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState<any>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
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
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow p-6 xl:p-10 w-full max-w-xl flex flex-col gap-4 xl:gap-6">
      <h2 className="text-2xl font-semibold mb-4 xl:text-3xl">Customer Information</h2>
      <input
        name="firstName"
        value={form.firstName}
        onChange={handleChange}
        placeholder="Enter your first name"
        className={`rounded-lg bg-gray-100 px-4 py-3 xl:px-6 xl:py-4 outline-none text-base xl:text-lg ${errors.firstName ? 'border border-red-500' : ''}`}
      />
      {errors.firstName && <span className="text-red-500 text-xs">{errors.firstName}</span>}
      <input
        name="lastName"
        value={form.lastName}
        onChange={handleChange}
        placeholder="Enter your last name"
        className={`rounded-lg bg-gray-100 px-4 py-3 xl:px-6 xl:py-4 outline-none text-base xl:text-lg ${errors.lastName ? 'border border-red-500' : ''}`}
      />
      {errors.lastName && <span className="text-red-500 text-xs">{errors.lastName}</span>}
      <input
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Enter your email address"
        className={`rounded-lg bg-gray-100 px-4 py-3 xl:px-6 xl:py-4 outline-none text-base xl:text-lg ${errors.email ? 'border border-red-500' : ''}`}
      />
      {errors.email && <span className="text-red-500 text-xs">{errors.email}</span>}
      <div className="flex gap-2">
        <select
          name="country"
          value={form.country}
          onChange={handleChange}
          className={`rounded-lg bg-gray-100 px-4 py-3 xl:px-6 xl:py-4 outline-none text-base xl:text-lg w-32 ${errors.country ? 'border border-red-500' : ''}`}
        >
          <option value="">+44</option>
          {/* Add more country codes as needed */}
        </select>
        <input
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="Enter your phone number"
          className={`flex-1 rounded-lg bg-gray-100 px-4 py-3 xl:px-6 xl:py-4 outline-none text-base xl:text-lg ${errors.phone ? 'border border-red-500' : ''}`}
        />
      </div>
      {errors.phone && <span className="text-red-500 text-xs">{errors.phone}</span>}
      <select
        name="country"
        value={form.country}
        onChange={handleChange}
        className={`rounded-lg bg-gray-100 px-4 py-3 xl:px-6 xl:py-4 outline-none text-base xl:text-lg ${errors.country ? 'border border-red-500' : ''}`}
      >
        <option value="">Select your country</option>
        <option value="uk">United Kingdom</option>
        <option value="us">United States</option>
        <option value="ng">Nigeria</option>
        {/* Add more countries as needed */}
      </select>
      {errors.country && <span className="text-red-500 text-xs">{errors.country}</span>}
      <button
        type="submit"
        className="w-full bg-[#1976d2] text-white font-semibold py-3 xl:py-4 rounded-full text-lg xl:text-xl mt-4 xl:mt-6 hover:bg-[#145bb0] transition"
        disabled={isLoading}
      >
        {isLoading ? 'Processing...' : 'Continue to Pay'}
      </button>
    </form>
  );
};

export default CustomerInfoForm; 