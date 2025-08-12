import  { Card, CardContent, CardFooter } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Textarea } from '../components/ui/textarea'
import { useState } from "react";
import emailjs from "emailjs-com";


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
      "service_y2e7zug",      // Service ID
      "template_2880juo",     // Template ID
      form,                   // Data from the form
      "Z9uuL0iaNGsGDjWz8"       // Public key
    )
    .then((result) => {
      alert("Message sent successfully!");
      setForm({ name: "", email: "", subject: "", message: "" });
    })
    .catch((error) => {
      console.error("EmailJS error:", error);
      alert("Failed to send message. Please try again.");
    });
  };


  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <Input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
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
              <label className="block text-sm font-medium text-gray-700">Subject</label>
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
              <Textarea className="h-20"
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
            <Button type="Submit" className="w-full">Send</Button>
          </CardFooter>

      </form>
    </Card>
  
  )
}