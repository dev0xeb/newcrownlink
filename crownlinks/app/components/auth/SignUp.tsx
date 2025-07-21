'use client'
import React from 'react';
import Link from 'next/link';
import { useState } from 'react';

const GoogleIcon = () => (
  <svg className="w-5 h-5 mr-2" viewBox="0 0 48 48"><g><path fill="#4285F4" d="M44.5 20H24v8.5h11.7C34.7 33.1 30.1 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c2.7 0 5.2.9 7.2 2.5l6.4-6.4C33.5 6.1 28.1 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20c11 0 19.7-8 19.7-20 0-1.3-.1-2.7-.3-4z"/><path fill="#34A853" d="M6.3 14.7l7 5.1C15.1 16.1 19.2 13 24 13c2.7 0 5.2.9 7.2 2.5l6.4-6.4C33.5 6.1 28.1 4 24 4c-7.2 0-13.3 4.1-16.7 10.7z"/><path fill="#FBBC05" d="M24 44c6.1 0 11.2-2 14.9-5.4l-6.9-5.7C30.2 34.9 27.3 36 24 36c-6.1 0-11.3-3.9-13.2-9.3l-7 5.4C7.1 39.9 14.9 44 24 44z"/><path fill="#EA4335" d="M44.5 20H24v8.5h11.7c-1.1 3.1-4.2 7.5-11.7 7.5-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 6 .9 8.2 2.6l6.2-6.2C36.7 6.1 30.7 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20c11 0 19.7-8 19.7-20 0-1.3-.1-2.7-.3-4z"/></g></svg>
);

const SignUp: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    try {
      const res = await fetch('http://localhost:3000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.message || 'Registration failed');
      }
      setSuccess('Registration successful! Please log in.');
      setForm({ name: '', email: '', password: '' });
    } catch (err: any) {
      setError(err.message || 'Something went wrong');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-6 text-center">Create an Account</h2>
        {/* <button className="flex items-center justify-center w-full border border-gray-300 rounded-lg py-2 mb-4 hover:bg-gray-100 transition-colors font-semibold">
          <GoogleIcon /> Sign up with Google
        </button> */}
        <div className="flex items-center my-4">
          <div className="flex-grow h-px bg-gray-200" />
          <span className="mx-3 text-gray-400 text-sm">or</span>
          <div className="flex-grow h-px bg-gray-200" />
        </div>
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-700 mb-1" htmlFor="name">Name</label>
            <input id="name" type="text" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-200 outline-none" placeholder="Your Name" value={form.name} onChange={handleChange} />
          </div>
          <div>
            <label className="block text-gray-700 mb-1" htmlFor="email">Email</label>
            <input id="email" type="email" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-200 outline-none" placeholder="you@email.com" value={form.email} onChange={handleChange} />
          </div>
          <div>
            <label className="block text-gray-700 mb-1" htmlFor="password">Password</label>
            <input id="password" type="password" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-200 outline-none" placeholder="Password" value={form.password} onChange={handleChange} />
          </div>
          <button type="submit" className="w-full bg-[#1A6EDC] text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition-colors">Sign Up</button>
          {error && <div className="text-red-500 text-sm mt-2">{error}</div>}
          {success && <div className="text-green-500 text-sm mt-2">{success}</div>}
        </form>
        <p className="mt-6 text-center text-gray-600 text-sm">
          Already have an account?{' '}
          <Link href="/login" className="text-[#1A6EDC] hover:underline">Sign In</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp; 