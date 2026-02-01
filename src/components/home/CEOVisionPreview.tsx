import { Link } from "react-router-dom";
import { ArrowRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import ceoAnmol from "@/assets/ceo-anmol.jpg";
import radhaKrishna from "@/assets/radha-krishna.jpg";
import heroKrishna from "@/assets/hero-krishna.jpg";

const CEOVisionPreview = () => {
  return (
    <section className="py-20 bg-foreground text-background relative overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0 opacity-10">
        <img src={heroKrishna} alt="" className="w-full h-full object-cover" />
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* CEO Image & Info */}
          <div className="relative">
            <div className="relative">
              <img
                src={ceoAnmol}
                alt="Mr. Anmol Sharma - CEO"
                className="w-80 h-96 object-cover rounded-2xl mx-auto shadow-2xl border-4 border-primary/30"
              />
              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-primary/30 rounded-2xl" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-primary/30 rounded-2xl" />
            </div>

            {/* Thakur Ji Images */}
            <div className="flex justify-center gap-4 mt-8">
              <img
                src={radhaKrishna}
                alt="Thakur Ji"
                className="w-16 h-16 rounded-full object-cover border-2 border-primary"
              />
              <img
                src={heroKrishna}
                alt="Thakur Ji"
                className="w-16 h-16 rounded-full object-cover border-2 border-gold"
              />
              <img
                src={radhaKrishna}
                alt="Thakur Ji"
                className="w-16 h-16 rounded-full object-cover border-2 border-primary"
              />
            </div>
          </div>

          {/* Vision Content */}
          <div className="space-y-6">
            <div>
              <p className="text-primary font-medium tracking-widest text-sm mb-4">FOUNDER'S VISION</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                Meet Our <span className="text-primary">Founder</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-divine rounded-full" />
            </div>

            <div className="relative">
              <Quote className="absolute -top-4 -left-4 w-10 h-10 text-primary/30" />
              <p className="text-xl leading-relaxed text-background/80 italic pl-8">
                "My dream is to bring the divine essence of Vrindavan to every devotee's doorstep. 
                ANMOL BRIJ is not just a platform—it's a bridge between devotees and the sacred land of Braj."
              </p>
            </div>

            <div className="bg-background/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="font-display text-2xl font-bold text-primary mb-2">
                Mr. Anmol Sharma
              </h3>
              <p className="text-background/60 mb-4">Founder & CEO, ANMOL BRIJ</p>
              <p className="text-background/70 text-sm leading-relaxed">
                A devoted follower of Shri Krishna and Vrindavan lover, Mr. Anmol Sharma founded 
                ANMOL BRIJ with a vision to make spiritual products and Vrindavan services accessible 
                to devotees worldwide. His mission is to spread the bhakti of Braj to every corner of the world.
              </p>
            </div>

            <Link to="/ceo-vision">
              <Button className="btn-divine group">
                Read Full Vision
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CEOVisionPreview;
