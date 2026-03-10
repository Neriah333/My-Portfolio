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

  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      "service_y2e7zug",
      "template_2880juo",
      {
        from_name: form.name,
        from_email: form.email,
        subject: form.subject,
        message: form.message
      },
      "Z9uuL0iaNGsGDjWz8"
    )
    .then(() => {
      setStatus("Message sent successfully!");
      setForm({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => {
      setStatus("");
    }, 4000); // disappears after 4 seconds
    })
    .catch((error) => {
      console.error(error);
      setStatus("Failed to send message.");
      setTimeout(() => {
        setStatus("");
      }, 4000); // disappears after 4 seconds
    });
  };

  return (
    <section id="contact" className="py-24 px-8 bg-slate-950 text-white">
      <div className="flex flex-col md:flex-row gap-16 max-w-5xl mx-auto">

        {/* LEFT SIDE */}
        <div className="flex-1 space-y-8">
          <h2 className="text-4xl font-black tracking-tighter">
            GET IN <span className="text-slate-500">TOUCH.</span>
          </h2>

          <p className="text-slate-400 text-lg">
            Have a project in mind or want to collaborate? My inbox is always open.
          </p>

          <div className="space-y-6">
            {[
              { icon: FaPhoneAlt, text: "+254 794 040 980" },
              { icon: FaEnvelope, text: "pheobenyawanda@gmail.com" },
              { icon: FaMapMarkerAlt, text: "Nairobi, Kenya" }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 text-slate-300">
                <div className="p-3 rounded-lg bg-blue-500/10 text-blue-500">
                  <item.icon />
                </div>
                <span className="font-mono">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex-1">
          <Card className="bg-white/[0.02] border border-white/5 p-2">
            <form onSubmit={handleSubmit}>
              {status && (
                <p className="text-green-400 text-sm text-center mt-2">
                  {status}
                </p>
              )}
              <CardContent className="space-y-4 pt-6">

                {['name','email','subject'].map((field) => (
                  <div key={field}>
                    <label className="block text-xs font-mono uppercase text-slate-500 mb-2">
                      {field}
                    </label>

                    <Input
                      name={field}
                      value={form[field]}
                      onChange={handleChange}
                      className="bg-slate-900 border-white/10 text-white"
                      required
                    />
                  </div>
                ))}

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-500 mb-2">
                    message
                  </label>

                  <Textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    className="bg-slate-900 border-white/10 text-white h-32"
                    required
                  />
                </div>

              </CardContent>

              <CardFooter>
                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold tracking-widest uppercase py-6 mt-5"
                >
                  Send Message
                </Button>
              </CardFooter>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}