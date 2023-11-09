import React, { useState } from "react";
import { database } from "../../firebase/config";
import "./Contact.css";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSubmitting(true);

    try {
      await database.ref("contacts").push({
        name,
        email,
        message,
        eventDate,
        timestamp: new Date().toString(),
      });

      // Clear form fields
      setName("");
      setEmail("");
      setMessage("");
      setEventDate("");

      alert("Message submitted successfully!");
    } catch (error) {
      console.error("Error submitting message:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div id="contact-container d-flex justify-content-center">
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Message:</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Date of the Event:</label>
          <input
            type="date"
            value={eventDate}
            onChange={(e) => setEventDate(e.target.value)}
            required
          />
        </div>
        <button type="submit" disabled={submitting}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
