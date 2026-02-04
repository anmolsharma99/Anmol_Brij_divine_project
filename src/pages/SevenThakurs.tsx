import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { MapPin, Clock, Star, History, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import vrindavanTemple from "@/assets/vrindavan-temple.jpg";

const thakurs = [
  {
    id: 1,
    name: "Shri Radha Vallabh Ji",
    temple: "Radha Vallabh Temple",
    location: "Vrindavan",
    established: "1585 AD",
    founder: "Goswami Hit Harivansh Mahaprabhu",
    description: "Shri Radha Vallabh Ji is the beloved deity of Radha Rani. This temple is unique as it has no idol of Radha - only a crown is placed beside the deity symbolizing Her eternal presence. The philosophy here focuses on the supreme love of Radha for Krishna.",
    history: "Founded in 1585 by Hit Harivansh Mahaprabhu, this temple represents the Radha Vallabh Sampradaya. The deity was originally worshipped by Goswami ji himself and was later established in this magnificent temple. The temple architecture reflects the pure devotion of the Vallabh tradition.",
    significance: "The only temple where Krishna is worshipped as the beloved of Radha, emphasizing Radha's supreme position.",
    aarti: ["4:30 AM", "7:30 AM", "12:00 PM", "5:30 PM", "8:30 PM"],
    image: vrindavanTemple,
  },
  {
    id: 2,
    name: "Shri Banke Bihari Ji",
    temple: "Banke Bihari Temple",
    location: "Vrindavan",
    established: "1864 AD",
    founder: "Swami Haridas",
    description: "Shri Banke Bihari Ji is the most famous deity of Vrindavan. 'Banke' means bent in three places and 'Bihari' means supreme enjoyer. The deity stands in the famous Tribhanga posture, captivating millions of devotees with His enchanting form.",
    history: "The deity was discovered by Swami Haridas in Nidhivan during his deep meditation. Originally kept in Nidhivan, the deity was later moved to the present temple built by Goswami descendants. The temple follows unique customs - no bells, no aarti with flames, and the curtain closes every few seconds.",
    significance: "Most visited temple in Vrindavan. The deity is so enchanting that devotees are protected by frequent curtain closings.",
    aarti: ["7:45 AM - Winter", "8:45 AM - Summer", "Sandhya at sunset"],
    image: vrindavanTemple,
  },
  {
    id: 3,
    name: "Shri Radha Raman Ji",
    temple: "Radha Raman Temple",
    location: "Vrindavan",
    established: "1542 AD",
    founder: "Gopal Bhatta Goswami",
    description: "Shri Radha Raman Ji is a self-manifested (swayambhu) deity who appeared from a Shaligram Shila. The deity is extremely beautiful and retains the original form without any restoration for over 480 years.",
    history: "Gopal Bhatta Goswami received 12 Shaligram Shilas from Nepal. On the full moon of Vaishakh 1542, one Shila transformed into the beautiful form of Radha Raman. The deity wears the original clothes and ornaments from that era. No renovation has ever been done to the murti.",
    significance: "One of the rare self-manifested deities. The same clothes and ornaments are used since 1542.",
    aarti: ["4:00 AM", "8:00 AM", "11:30 AM", "5:30 PM", "8:00 PM"],
    image: vrindavanTemple,
  },
  {
    id: 4,
    name: "Shri Radha Damodar Ji",
    temple: "Radha Damodar Temple",
    location: "Vrindavan",
    established: "1542 AD",
    founder: "Jiva Goswami",
    description: "Shri Radha Damodar temple houses the deity worshipped by Rupa Goswami and later by Jiva Goswami. The temple contains the sacred bhajan kutir (meditation room) and samadhi of these great saints.",
    history: "The deity was personally served by Rupa Goswami. After his departure, Jiva Goswami continued the worship and built this temple. The Govardhana Shilas worshipped by Sanatana Goswami are also preserved here. AC Bhaktivedanta Swami Prabhupada stayed in this temple before going to America.",
    significance: "Contains the bhajan kutir of Rupa and Jiva Goswami. Srila Prabhupada's room is preserved as a memorial.",
    aarti: ["4:30 AM", "7:30 AM", "11:30 AM", "6:00 PM", "8:30 PM"],
    image: vrindavanTemple,
  },
  {
    id: 5,
    name: "Shri Radha Gokulananda Ji",
    temple: "Radha Gokulananda Temple",
    location: "Vrindavan",
    established: "Late 16th Century",
    founder: "Lokanath Goswami",
    description: "This temple houses three sets of deities - Radha Gokulananda, Radha Vinod, and Chaitanya Mahaprabhu. The temple is known for its serene atmosphere and beautiful gardens.",
    history: "Lokanath Goswami worshipped Radha Vinod, which was given to him by Lord Chaitanya. Later, Narottam Das Thakur and Vishwanath Chakravarti Thakur added their worshipped deities. All three sets are now worshipped together in this temple.",
    significance: "Houses deities from three great acharyas. Known for its peaceful atmosphere.",
    aarti: ["5:00 AM", "8:00 AM", "12:00 PM", "5:30 PM", "8:30 PM"],
    image: vrindavanTemple,
  },
  {
    id: 6,
    name: "Shri Radha Shyamsundar Ji",
    temple: "Radha Shyamsundar Temple",
    location: "Vrindavan",
    established: "1580 AD",
    founder: "Shyamananda Pandit",
    description: "Shri Radha Shyamsundar temple houses the beautiful deity found by Shyamananda Pandit in the forests of Vrindavan. The deity is known for His mesmerizing dark complexion and beautiful eyes.",
    history: "Shyamananda Pandit found a golden anklet in the forest which belonged to Radha Rani. When he returned it, Radharani blessed him and revealed the location of Shyamsundar deity. The nupur (anklet) mark on his forehead became his identity.",
    significance: "The deity was blessed by Radha Rani herself. Shyamananda's sampradaya continues the worship.",
    aarti: ["4:30 AM", "7:30 AM", "12:00 PM", "5:00 PM", "8:00 PM"],
    image: vrindavanTemple,
  },
  {
    id: 7,
    name: "Shri Radha Madan Mohan Ji",
    temple: "Madan Mohan Temple",
    location: "Vrindavan",
    established: "1580 AD",
    founder: "Sanatana Goswami",
    description: "Shri Radha Madan Mohan is one of the oldest temples of Vrindavan, sitting atop a hill near the Yamuna. The original deity is now in Jaipur, but a pratibhu murti (representative deity) is worshipped here.",
    history: "Sanatana Goswami found the deity buried in the ground near the Yamuna. It was originally worshipped by Advaita Acharya's descendant and given to Sanatana Goswami. During Aurangzeb's invasion, the deity was moved to Jaipur for protection.",
    significance: "One of the first temples established by the Six Goswamis. Represents 'sambandha' - our relationship with Krishna.",
    aarti: ["5:00 AM", "8:00 AM", "11:00 AM", "5:00 PM", "8:00 PM"],
    image: vrindavanTemple,
  },
];

const SevenThakurs = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-primary/20 via-background to-background py-20">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="inline-block px-4 py-1 bg-gold/20 text-gold rounded-full text-sm font-medium mb-4">
              🙏 Divine Darshan
            </span>
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-4">
              The <span className="gradient-text">Seven Thakurs</span>
            </h1>
            <h2 className="font-display text-2xl text-secondary mb-4">सात ठाकुर जी - वृन्दावन धाम</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
              Discover the divine history and significance of the seven principal deities of Vrindavan, 
              each established by the great Goswamis and carrying centuries of devotional tradition.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Vrindavan History */}
      <div className="container py-12">
        <div className="card-divine bg-gradient-to-r from-primary/10 via-card to-secondary/10 mb-16">
          <div className="flex items-start gap-4">
            <History className="w-12 h-12 text-primary flex-shrink-0" />
            <div>
              <h2 className="font-display text-2xl font-bold mb-3">History of Vrindavan</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Vrindavan, meaning "forest of Tulsi (Vrinda) plants," is the eternal abode where Lord Krishna spent His childhood 
                performing divine pastimes (leelas). Located in Mathura district of Uttar Pradesh, this sacred land was lost to time 
                until rediscovered in the 16th century by Lord Chaitanya Mahaprabhu.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Chaitanya Mahaprabhu sent His six principal disciples - Rupa Goswami, Sanatana Goswami, Jiva Goswami, Gopal Bhatta Goswami, 
                Raghunath Bhatta Goswami, and Raghunath Das Goswami - to excavate and restore the lost holy places. These Six Goswamis 
                of Vrindavan established the seven principal temples housing the Sapta Thakurs (Seven Lords).
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, Vrindavan hosts over 5,000 temples and is visited by millions of devotees annually. The town resonates with the 
                eternal chanting of "Radhe Radhe" and remains the spiritual heart of Krishna consciousness worldwide.
              </p>
            </div>
          </div>
        </div>

        {/* Seven Thakurs Grid */}
        <h2 className="font-display text-3xl font-bold text-center mb-12">
          Meet the <span className="gradient-text">Seven Thakurs</span>
        </h2>

        <div className="space-y-12">
          {thakurs.map((thakur, index) => (
            <motion.div
              key={thakur.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card-divine overflow-hidden"
            >
              <div className={`grid md:grid-cols-2 gap-8 ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
                {/* Image */}
                <div className={`relative h-80 md:h-auto ${index % 2 === 1 ? "md:order-2" : ""}`}>
                  <img
                    src={thakur.image}
                    alt={thakur.name}
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent rounded-lg" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block bg-primary text-primary-foreground text-sm font-medium px-3 py-1 rounded-full mb-2">
                      #{thakur.id} of Seven Thakurs
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className={`p-4 ${index % 2 === 1 ? "md:order-1" : ""}`}>
                  <h3 className="font-display text-2xl font-bold text-primary mb-2">{thakur.name}</h3>
                  <p className="text-lg text-secondary font-medium mb-4">{thakur.temple}</p>
                  
                  <div className="flex flex-wrap gap-4 mb-4 text-sm">
                    <span className="flex items-center gap-1 text-muted-foreground">
                      <MapPin className="w-4 h-4" /> {thakur.location}
                    </span>
                    <span className="flex items-center gap-1 text-muted-foreground">
                      <Clock className="w-4 h-4" /> Est. {thakur.established}
                    </span>
                    <span className="flex items-center gap-1 text-muted-foreground">
                      <Star className="w-4 h-4" /> {thakur.founder}
                    </span>
                  </div>

                  <p className="text-muted-foreground mb-4">{thakur.description}</p>
                  
                  <div className="bg-muted/50 rounded-lg p-4 mb-4">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <History className="w-4 h-4 text-primary" /> History
                    </h4>
                    <p className="text-sm text-muted-foreground">{thakur.history}</p>
                  </div>

                  <div className="bg-primary/10 rounded-lg p-4 mb-4">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Heart className="w-4 h-4 text-accent" /> Significance
                    </h4>
                    <p className="text-sm">{thakur.significance}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <span className="text-sm font-medium text-muted-foreground">Aarti Timings:</span>
                    {thakur.aarti.map((time, i) => (
                      <span key={i} className="text-xs bg-secondary/20 text-secondary px-2 py-1 rounded-full">
                        {time}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h3 className="font-display text-2xl font-bold mb-4">Plan Your Divine Yatra</h3>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Visit all seven thakurs with our guided Vrindavan tour packages. Experience the divine blessings in person.
          </p>
          <Link to="/services">
            <Button className="btn-divine">
              Book Vrindavan Tour
            </Button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default SevenThakurs;
