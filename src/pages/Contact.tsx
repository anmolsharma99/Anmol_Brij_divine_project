import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  { icon: Phone, title: "Phone", value: "+91 98765 43210", link: "tel:+919876543210" },
  { icon: Mail, title: "Email", value: "radhe@anmolbrij.com", link: "mailto:radhe@anmolbrij.com" },
  { icon: MapPin, title: "Address", value: "Near Banke Bihari Temple, Vrindavan, Mathura - 281121" },
  { icon: Clock, title: "Working Hours", value: "24/7 - We're always here for you!" },
];

const faqs = [
  { q: "How long does delivery take?", a: "Standard delivery takes 5-7 business days. Express delivery is 2-3 days." },
  { q: "Are products authentic?", a: "Yes! All products are sourced directly from Vrindavan artisans and verified temples." },
  { q: "Can I cancel my order?", a: "Orders can be cancelled within 24 hours of placing. Contact our support team." },
  { q: "Do you ship internationally?", a: "Yes, we ship to 50+ countries. Shipping charges vary by location." },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent! 🙏",
      description: "Our team will respond within 24 hours. Radhe Radhe!",
    });
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <Layout>
      {/* Header */}
      <div className="bg-gradient-divine py-16 text-background">
        <div className="container text-center">
          <MessageCircle className="w-16 h-16 mx-auto mb-6 opacity-80" />
          <h1 className="font-display text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-background/80 max-w-xl mx-auto">
            Have questions? Need help? Our team is here to assist you 24/7. Radhe Radhe! 🙏
          </p>
        </div>
      </div>

      {/* Contact Info Cards */}
      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info) => (
              <div key={info.title} className="card-divine text-center hover:border-primary border border-transparent transition-colors">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold mb-2">{info.title}</h3>
                {info.link ? (
                  <a href={info.link} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {info.value}
                  </a>
                ) : (
                  <p className="text-muted-foreground text-sm">{info.value}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Support */}
      <section className="py-16 bg-muted">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="card-divine">
              <h2 className="font-display text-2xl font-bold mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="How can we help?"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us more..."
                    rows={5}
                    required
                  />
                </div>
                <Button type="submit" className="w-full btn-divine">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Support Info */}
            <div className="space-y-8">
              <div className="card-divine bg-foreground text-background">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Headphones className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold mb-2">24/7 Support</h3>
                    <p className="text-background/70 text-sm mb-4">
                      Our dedicated team is available round the clock to help you with any queries. 
                      We guarantee a response within 24 hours!
                    </p>
                    <a href="tel:+919876543210">
                      <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                        <Phone className="w-4 h-4 mr-2" />
                        Call Now
                      </Button>
                    </a>
                  </div>
                </div>
              </div>

              {/* FAQs */}
              <div>
                <h3 className="font-display text-xl font-bold mb-6">Frequently Asked Questions</h3>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div key={index} className="card-divine p-4">
                      <h4 className="font-semibold mb-2">{faq.q}</h4>
                      <p className="text-muted-foreground text-sm">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-96 bg-muted relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
            <h3 className="font-display text-2xl font-bold mb-2">Visit Us in Vrindavan</h3>
            <p className="text-muted-foreground">Near Banke Bihari Temple, Vrindavan, Mathura - 281121</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
