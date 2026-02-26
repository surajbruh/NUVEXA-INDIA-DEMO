import React from "react";
import ContactForm from "../components/ContactForm";
import useDataContext from "../contexts/DataContext";

const ContactDetails = () => {
  const { contactInfo } = useDataContext();

  return (
    <section className="bg-gray-50" aria-labelledby="contact-heading">
      <div className="max-w-7xl mx-auto px-4 py-14 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left: Header */}
        <div>
          <div className="max-w-xl space-y-4 mb-8">
            <span className="inline-block uppercase font-bold bg-red-600 text-white px-4 py-1">
              Contact Us
            </span>

            <h2
              id="contact-heading"
              className="font-bold text-2xl sm:text-3xl md:text-4xl leading-tight"
            >
              Get in Touch With Our Office
            </h2>
          </div>

          {/* Contact Info Grid */}
          <ul className="grid grid-cols-1">
            {contactInfo.map((item) => (
              <li
                key={item.label}
                className="flex items-start gap-4 p-5"
              >
                {/* Icon */}
                <figure className="flex items-center justify-center bg-zinc-200 w-16 h-16 rounded-full shrink-0">
                  <img
                    src={item.icon}
                    alt={`${item.label} icon`}
                    className="w-8 h-8 object-contain"
                    loading="lazy"
                  />
                </figure>

                {/* Text */}
                <div className="space-y-1">
                  <span className="block text-sm uppercase text-gray-600">
                    {item.label}
                  </span>

                  {/* Value */}
                  {item.type === "email" ? (
                    <a
                      href={`mailto:${item.value}`}
                      className="font-medium hover:underline"
                    >
                      {item.value}
                    </a>
                  ) : item.type === "phone" ? (
                    <a
                      href={`tel:${item.value}`}
                      className="font-medium hover:underline"
                    >
                      {item.value}
                    </a>
                  ) : item.type === "time" ? (
                    item.value.map((time) => (
                      <p key={time} className="leading-tight font-medium">
                        {time}
                      </p>
                    ))
                  ) : (
                    <p className="font-medium">{item.value}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Contact Form */}
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactDetails;
