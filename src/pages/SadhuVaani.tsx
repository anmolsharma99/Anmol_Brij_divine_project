import Layout from "@/components/layout/Layout";
import { Quote, BookOpen, Heart } from "lucide-react";
import sadhuSaint from "@/assets/sadhu-saint.jpg";

const saints = [
  {
    id: 1,
    name: "Shri Radha Baba Ji",
    title: "Vrindavan Mahatma",
    image: sadhuSaint,
    quotes: [
      "भक्ति में जो आनंद है, वो किसी और चीज़ में नहीं। कृष्ण को प्रेम से पुकारो, वो ज़रूर सुनेंगे।",
      "जब तक राधा रानी की कृपा नहीं, कृष्ण भी नहीं मिलते।",
    ],
  },
  {
    id: 2,
    name: "Shri Vrindavan Das Ji",
    title: "Braj Rasik Sant",
    image: sadhuSaint,
    quotes: [
      "वृंदावन की धूल में वो शक्ति है जो संसार में कहीं नहीं। यहाँ आने वाला धन्य हो जाता है।",
      "प्रेम ही परमात्मा है, प्रेम ही कृष्ण है।",
    ],
  },
  {
    id: 3,
    name: "Shri Govind Das Ji",
    title: "Harinam Preacher",
    image: sadhuSaint,
    quotes: [
      "हरे कृष्ण महामंत्र में वो शक्ति है जो सारे पापों को धो देती है।",
      "भगवान को पाने के लिए कुछ छोड़ना नहीं, बस उनको अपनाना है।",
    ],
  },
];

const dailyQuote = {
  text: "जीवन में सुख-दुख आते रहते हैं, पर जो कृष्ण की शरण में है, उसे कोई चिंता नहीं। वो हर परिस्थिति में प्रसन्न रहता है क्योंकि उसे पता है कि सब कुछ भगवान की इच्छा से हो रहा है।",
  author: "Shri Radha Baba Ji",
  date: "Today's Wisdom",
};

const SadhuVaani = () => {
  return (
    <Layout>
      {/* Header */}
      <div className="bg-muted py-16">
        <div className="container text-center">
          <p className="text-primary font-medium tracking-widest text-sm mb-4">SPIRITUAL WISDOM</p>
          <h1 className="font-display text-5xl font-bold mb-4">
            <span className="gradient-text">Sadhu Vaani</span>
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Divine teachings and eternal wisdom from the revered saints of Vrindavan
          </p>
        </div>
      </div>

      {/* Daily Quote */}
      <section className="py-16">
        <div className="container max-w-4xl">
          <div className="bg-gradient-divine rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
            <Quote className="w-16 h-16 text-background/20 mx-auto mb-6" />
            <p className="font-display text-2xl md:text-3xl text-background leading-relaxed mb-6 italic">
              "{dailyQuote.text}"
            </p>
            <p className="text-background/80 font-semibold">— {dailyQuote.author}</p>
            <p className="text-background/60 text-sm mt-2">📅 {dailyQuote.date}</p>
          </div>
        </div>
      </section>

      {/* Saints & Teachings */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold mb-4">
              Words of <span className="gradient-text">Wisdom</span>
            </h2>
            <div className="section-divider" />
          </div>

          <div className="space-y-12">
            {saints.map((saint, index) => (
              <div
                key={saint.id}
                className={`grid md:grid-cols-3 gap-8 items-center ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Saint Info */}
                <div className={`text-center ${index % 2 === 1 ? "md:order-3" : ""}`}>
                  <img
                    src={saint.image}
                    alt={saint.name}
                    className="w-48 h-48 rounded-full object-cover mx-auto border-4 border-primary/30 mb-4"
                  />
                  <h3 className="font-display text-2xl font-bold text-primary">{saint.name}</h3>
                  <p className="text-muted-foreground">{saint.title}</p>
                </div>

                {/* Quotes */}
                <div className={`md:col-span-2 space-y-6 ${index % 2 === 1 ? "md:order-1" : ""}`}>
                  {saint.quotes.map((quote, qIndex) => (
                    <div key={qIndex} className="card-divine relative">
                      <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/10" />
                      <p className="text-lg leading-relaxed italic pr-12">"{quote}"</p>
                      <div className="flex items-center gap-2 mt-4 text-sm text-muted-foreground">
                        <Heart className="w-4 h-4 text-accent" />
                        <span>{Math.floor(Math.random() * 500) + 100} devotees found this helpful</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Daily Practices */}
      <section className="py-16 bg-muted">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold mb-4">
              Daily <span className="gradient-text">Practices</span>
            </h2>
            <p className="text-muted-foreground">Simple spiritual practices recommended by our saints</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Morning Japa", desc: "108 rounds of Hare Krishna Mahamantra", time: "Brahma Muhurta" },
              { title: "Tulsi Seva", desc: "Water and worship Tulsi Maharani daily", time: "Morning" },
              { title: "Evening Aarti", desc: "Light diya and offer prayers", time: "Sunset" },
            ].map((practice) => (
              <div key={practice.title} className="card-divine text-center">
                <BookOpen className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-display text-xl font-semibold mb-2">{practice.title}</h3>
                <p className="text-muted-foreground text-sm mb-2">{practice.desc}</p>
                <p className="text-xs text-primary font-medium">⏰ {practice.time}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SadhuVaani;
