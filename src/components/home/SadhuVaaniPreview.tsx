import { Link } from "react-router-dom";
import { Quote, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import sadhuSaint from "@/assets/sadhu-saint.jpg";

const quotes = [
  {
    id: 1,
    text: "भक्ति में जो आनंद है, वो किसी और चीज़ में नहीं। कृष्ण को प्रेम से पुकारो, वो ज़रूर सुनेंगे।",
    author: "Shri Radha Baba Ji",
    image: sadhuSaint,
  },
  {
    id: 2,
    text: "वृंदावन की धूल में वो शक्ति है जो संसार में कहीं नहीं। यहाँ आने वाला धन्य हो जाता है।",
    author: "Shri Vrindavan Das Ji",
    image: sadhuSaint,
  },
];

const SadhuVaaniPreview = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary font-medium tracking-widest text-sm mb-4">SPIRITUAL WISDOM</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Sadhu Vaani</span>
          </h2>
          <div className="section-divider" />
          <p className="text-muted-foreground mt-6">
            Divine teachings and wisdom from the revered saints of Vrindavan
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {quotes.map((quote) => (
            <div
              key={quote.id}
              className="card-divine bg-card relative overflow-hidden"
            >
              <Quote className="absolute top-4 right-4 w-12 h-12 text-primary/10" />
              <div className="flex gap-6">
                <img
                  src={quote.image}
                  alt={quote.author}
                  className="w-24 h-24 rounded-full object-cover border-4 border-primary/20"
                />
                <div className="flex-1">
                  <p className="text-lg leading-relaxed mb-4 font-medium italic">
                    "{quote.text}"
                  </p>
                  <p className="text-primary font-display font-semibold">
                    — {quote.author}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/sadhu-vaani">
            <Button className="btn-divine group">
              Read More Wisdom
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SadhuVaaniPreview;
