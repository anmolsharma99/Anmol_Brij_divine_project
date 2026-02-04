import { Link } from "react-router-dom";
import { Quote, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
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
    <section className="py-12 sm:py-16 md:py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <p className="text-primary font-medium tracking-widest text-xs sm:text-sm mb-3 sm:mb-4">SPIRITUAL WISDOM</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            <span className="gradient-text">Sadhu Vaani</span>
          </h2>
          <div className="section-divider" />
          <p className="text-muted-foreground mt-4 sm:mt-6 px-4">
            Divine teachings and wisdom from the revered saints of Vrindavan
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
          {quotes.map((quote, index) => (
            <motion.div
              key={quote.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card-divine bg-card relative overflow-hidden p-4 sm:p-6"
            >
              <Quote className="absolute top-3 right-3 sm:top-4 sm:right-4 w-8 h-8 sm:w-12 sm:h-12 text-primary/10" />
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <img
                  src={quote.image}
                  alt={quote.author}
                  className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full object-cover border-4 border-primary/20 mx-auto sm:mx-0 flex-shrink-0"
                />
                <div className="flex-1 text-center sm:text-left">
                  <p className="text-base sm:text-lg leading-relaxed mb-3 sm:mb-4 font-medium italic">
                    "{quote.text}"
                  </p>
                  <p className="text-primary font-display font-semibold text-sm sm:text-base">
                    — {quote.author}
                  </p>
                </div>
              </div>
            </motion.div>
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
