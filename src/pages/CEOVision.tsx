import Layout from "@/components/layout/Layout";
import { Quote, Target, Heart, Globe, Users, Award } from "lucide-react";
import ceoAnmol from "@/assets/ceo-anmol.jpg";
import cofounderSakshi from "@/assets/cofounder-sakshi.jpg";
import heroKrishna from "@/assets/hero-krishna.jpg";
import radhaKrishna from "@/assets/radha-krishna.jpg";
import ladduGopal from "@/assets/laddu-gopal.jpg";
import sadhuSaint from "@/assets/sadhu-saint.jpg";

const values = [
  { icon: Heart, title: "Bhakti First", desc: "Every product and service is infused with devotion" },
  { icon: Globe, title: "Vrindavan to World", desc: "Bringing the divine essence globally" },
  { icon: Users, title: "Community", desc: "Building a family of Krishna devotees" },
  { icon: Award, title: "Authenticity", desc: "100% genuine products from trusted sources" },
];

const thakurjis = [
  { name: "Shri Banke Bihari Ji", image: heroKrishna },
  { name: "Shri Radha Vallabh Ji", image: radhaKrishna },
  { name: "Shri Govind Dev Ji", image: heroKrishna },
  { name: "Shri Radha Raman Ji", image: ladduGopal },
  { name: "Shri Radha Damodar Ji", image: radhaKrishna },
  { name: "Shri Radha Gokulanand Ji", image: heroKrishna },
  { name: "Shri Radha Shyamsundar Ji", image: ladduGopal },
];

const CEOVision = () => {
  return (
    <Layout>
      {/* Hero */}
      <div className="relative py-20 bg-foreground text-background overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src={heroKrishna} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-primary font-medium tracking-widest text-sm">FOUNDERS' VISION</p>
              <h1 className="font-display text-5xl font-bold">
                The Vision Behind <span className="text-primary">ANMOL BRIJ</span>
              </h1>
              <p className="text-background/80 text-lg leading-relaxed">
                A journey that began with a simple dream—to bring the divine blessings of Vrindavan 
                to every devotee's doorstep, regardless of where they are in the world.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              <div className="relative">
                <img
                  src={ceoAnmol}
                  alt="Mr. Anmol Sharma"
                  className="w-56 h-72 object-cover rounded-2xl shadow-2xl border-4 border-primary/30"
                />
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-card text-foreground rounded-xl px-4 py-2 shadow-lg whitespace-nowrap">
                  <p className="font-display font-bold">Mr. Anmol Sharma</p>
                  <p className="text-xs text-muted-foreground">Founder & CEO</p>
                </div>
              </div>
              <div className="relative">
                <img
                  src={cofounderSakshi}
                  alt="Ms. Sakshi Mishra"
                  className="w-56 h-72 object-cover rounded-2xl shadow-2xl border-4 border-primary/30"
                />
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-card text-foreground rounded-xl px-4 py-2 shadow-lg whitespace-nowrap">
                  <p className="font-display font-bold">Ms. Sakshi Mishra</p>
                  <p className="text-xs text-muted-foreground">Co-Founder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CEO Message */}
      <section className="py-20">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <Quote className="w-16 h-16 text-primary/20 mx-auto mb-6" />
            <p className="font-display text-2xl md:text-3xl leading-relaxed italic mb-8">
              "Our dream is to bring the divine essence of Vrindavan to every devotee's doorstep. 
              ANMOL BRIJ is not just a platform—it's a bridge between devotees and the sacred land of Braj. 
              Every product we sell, every service we provide, is an offering to Shri Radha-Krishna."
            </p>
            <p className="text-primary font-display font-semibold text-xl">— Mr. Anmol Sharma & Ms. Sakshi Mishra</p>
          </div>

          <div className="prose prose-lg mx-auto text-muted-foreground">
            <p>
              Growing up in a family deeply connected to Krishna consciousness, we spent countless hours 
              in the lanes of Vrindavan, experiencing the divine energy that flows through this sacred land. 
              Every temple visit, every aarti, every darshan left an indelible mark on our souls.
            </p>
            <p>
              But we realized that millions of devotees around the world yearn to experience this divine 
              connection but cannot always travel to Vrindavan. That's when the vision of ANMOL BRIJ was born—
              a platform that brings authentic spiritual products, genuine services, and the true essence 
              of Braj to devotees everywhere.
            </p>
            <p>
              Our mission is simple: to ensure that every devotee, whether in a remote village or a bustling 
              city, can access authentic Vrindavan products, plan their pilgrimage seamlessly, and stay 
              connected to the spiritual wisdom of our saints.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold mb-4">Our <span className="gradient-text">Values</span></h2>
            <div className="section-divider" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="card-divine text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seven Thakur Ji */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-primary font-medium tracking-widest text-sm mb-4">DIVINE BLESSINGS</p>
            <h2 className="font-display text-4xl font-bold mb-4">
              The Seven <span className="gradient-text">Thakur Ji</span> of Vrindavan
            </h2>
            <div className="section-divider" />
            <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
              Our platform operates under the divine blessings of the seven most revered deities of Vrindavan
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
            {thakurjis.map((thakur) => (
              <div key={thakur.name} className="text-center group">
                <div className="relative mb-4">
                  <img src={thakur.image} alt={thakur.name} className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover mx-auto border-4 border-primary/30 group-hover:border-primary transition-colors" />
                  <div className="absolute inset-0 rounded-full bg-gradient-divine opacity-0 group-hover:opacity-20 transition-opacity" />
                </div>
                <p className="font-display text-sm font-semibold leading-tight">{thakur.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Saints Gallery */}
      <section className="py-20 bg-foreground text-background">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-primary font-medium tracking-widest text-sm mb-4">SPIRITUAL GUIDANCE</p>
            <h2 className="font-display text-4xl font-bold mb-4">
              Guided by <span className="text-primary">Saints</span>
            </h2>
            <p className="text-background/60 max-w-2xl mx-auto">
              We are blessed to receive guidance from revered Sadhus and spiritual masters of Vrindavan
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-background/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                <img src={sadhuSaint} alt="Saint" className="w-32 h-32 rounded-full object-cover mx-auto mb-4 border-4 border-primary/30" />
                <h3 className="font-display text-xl font-semibold text-primary mb-1">Shri Vrindavan Das Ji</h3>
                <p className="text-background/60 text-sm mb-4">Braj Rasik Sant</p>
                <p className="text-background/80 text-sm italic">"Guiding ANMOL BRIJ with blessings for spreading Krishna consciousness"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20">
        <div className="container text-center max-w-4xl">
          <Target className="w-16 h-16 text-primary mx-auto mb-8" />
          <h2 className="font-display text-4xl font-bold mb-6">Our <span className="gradient-text">Mission</span></h2>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            To become the most trusted platform for authentic spiritual products and Vrindavan services, 
            connecting millions of devotees to the divine land of Braj while upholding the values of 
            bhakti, authenticity, and service to humanity.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="text-center">
              <p className="font-display text-4xl font-bold text-primary">1M+</p>
              <p className="text-muted-foreground">Devotees to Serve</p>
            </div>
            <div className="text-center">
              <p className="font-display text-4xl font-bold text-primary">50+</p>
              <p className="text-muted-foreground">Countries to Reach</p>
            </div>
            <div className="text-center">
              <p className="font-display text-4xl font-bold text-primary">∞</p>
              <p className="text-muted-foreground">Blessings to Share</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CEOVision;
