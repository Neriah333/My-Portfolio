import { Card, CardContent, CardFooter } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Textarea } from '../components/ui/textarea'
import { useState } from "react";
import emailjs from "emailjs-com";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      "service_y2e7zug",      
      "template_2880juo",     
      form,                   
      "Z9uuL0iaNGsGDjWz8"       
    )
    .then(() => {
      alert("Message sent successfully!");
      setForm({ name: "", email: "", subject: "", message: "" });
    })
    .catch((error) => {
      console.error("EmailJS error:", error);
      alert("Failed to send message. Please try again.");
    });
  };

  return (
    <div className="flex flex-col md:flex-row gap-8 p-6 mt-15">
      
      {/* LEFT SIDE - CONTACT INFO */}
      <div className="flex-1 space-y-4">
        <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
          Get in Touch
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          Feel free to reach out through the form or via my contact details below.
        </p>
        <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
          <FaPhoneAlt className="text-blue-400" />
          <span>+254 794 040 980</span>
        </div>
        <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
          <FaEnvelope className="text-blue-400" />
          <span>pheobenyawanda@gmail.com</span>
        </div>
        <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
          <FaMapMarkerAlt className="text-blue-400" />
          <span>Nairobi, Kenya</span>
        </div>
      </div>

      {/* RIGHT SIDE - CONTACT FORM */}
      <div className="flex-1">
        <Card>
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700">Name</label>
                <Input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700">Email</label>
                <Input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700">Subject</label>
                <Input
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Your Subject"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <Textarea
                  className="h-20"
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Write a message..."
                  required
                />
              </div>
            </CardContent>

            <CardFooter>
              <Button type="submit" className="w-full bg-slate-900 mt-5 text-white hover:bg-blue-400">Send</Button>
            </CardFooter>
          </form>
        </Card>
      </div>

    </div>
  );
}
