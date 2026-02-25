import { useState } from "react";
import { Forminit } from "forminit";

const forminit = new Forminit();
const FORM_ID = import.meta.env.VITE_FORM_ID;

const initialState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const ContactForm = () => {
  const [formData, setFormData] = useState(initialState);
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!FORM_ID) {
      setStatus("error");
      setError("Form configuration error. Please try again later.");
      return;
    }

    try {
      setStatus("loading");
      setError("");

      const response = await forminit.submit(FORM_ID, {
        blocks: [
          {
            type: "sender",
            properties: {
              fullName: formData.name,
              email: formData.email,
            },
          },
          {
            type: "text",
            name: "subject",
            value: formData.subject,
          },
          {
            type: "text",
            name: "message",
            value: formData.message,
          },
        ],
      });

      if (response?.error) {
        throw new Error(response.error.message);
      }

      setStatus("success");
      setFormData(initialState);
    } catch (err) {
      setStatus("error");
      setError(err.message || "Something went wrong.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      aria-labelledby="contact-form-heading"
      className="bg-gray-100 p-6 sm:p-8 rounded-lg space-y-6 shadow-sm"
      noValidate
    >
      <h2
        id="contact-form-heading"
        className="text-2xl font-bold text-gray-800"
      >
        Send Your Requirements to Us
      </h2>

      {/* Name + Email */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1">
          <label htmlFor="name" className="text-sm font-medium text-gray-700">
            Name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full bg-white px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        <div className="space-y-1">
          <label htmlFor="email" className="text-sm font-medium text-gray-700">
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-white px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>
      </div>

      {/* Subject */}
      <div className="space-y-1">
        <label htmlFor="subject" className="text-sm font-medium text-gray-700">
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          value={formData.subject}
          onChange={handleChange}
          className="w-full bg-white px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
        />
      </div>

      {/* Message */}
      <div className="space-y-1">
        <label htmlFor="message" className="text-sm font-medium text-gray-700">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          value={formData.message}
          onChange={handleChange}
          className="w-full bg-white px-4 py-2 rounded border border-gray-300 resize-none focus:outline-none focus:ring-2 focus:ring-red-500"
        />
      </div>

      {/* Status Messages */}
      {status === "error" && (
        <p role="alert" className="text-sm text-red-600 font-medium">
          {error}
        </p>
      )}

      {status === "success" && (
        <p role="status" className="text-sm text-green-600 font-medium">
          Message sent successfully!
        </p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "loading"}
        className="
          bg-red-500 text-white
          px-6 py-3 rounded
          uppercase font-medium tracking-wide
          hover:bg-red-600
          disabled:opacity-50 disabled:cursor-not-allowed
          transition-colors
        "
      >
        {status === "loading" ? "Sending..." : "Submit"}
      </button>
    </form>
  );
};

export default ContactForm;
