import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      aria-labelledby="contact-form-heading"
      className="bg-gray-100 p-6 sm:p-8 rounded-lg space-y-6"
    >
      <h2 id="contact-form-heading" className="text-2xl font-bold">
        Send Your Requirements to Us
      </h2>

      {/* Inputs */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="text-sm font-medium">Name</label>
          <input
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full bg-white px-4 py-2 rounded outline-none"
          />
        </div>

        <div>
          <label className="text-sm font-medium">Email</label>
          <input
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-white px-4 py-2 rounded outline-none"
          />
        </div>

        <div>
          <label className="text-sm font-medium">Phone</label>
          <input
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            className="w-full bg-white px-4 py-2 rounded outline-none"
          />
        </div>

        <div>
          <label className="text-sm font-medium">Subject</label>
          <input
            name="subject"
            type="text"
            value={formData.subject}
            onChange={handleChange}
            className="w-full bg-white px-4 py-2 rounded outline-none"
          />
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="text-sm font-medium">Message</label>
        <textarea
          name="message"
          rows={4}
          required
          value={formData.message}
          onChange={handleChange}
          className="w-full bg-white px-4 py-2 rounded outline-none resize-none"
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="
          bg-red-500 text-white
          px-6 py-3 rounded
          uppercase font-medium
          hover:bg-red-600 transition
        "
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
