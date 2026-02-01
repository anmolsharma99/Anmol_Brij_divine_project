import Layout from "@/components/layout/Layout";
import { Clock, MapPin, Sun, Moon, Bell, Calendar } from "lucide-react";
import vrindavanTemple from "@/assets/vrindavan-temple.jpg";

const temples = [
  {
    name: "Shri Banke Bihari Ji Temple",
    location: "Vrindavan",
    distance: "Main Temple",
    timings: [
      { name: "Morning Darshan", time: "7:45 AM - 12:00 PM" },
      { name: "Evening Darshan", time: "5:30 PM - 9:30 PM" },
    ],
    aarti: ["Mangla Aarti: 7:45 AM", "Shringar Aarti: 8:45 AM", "Raj Bhog: 11:30 AM", "Shayan Aarti: 9:00 PM"],
    special: "No photography allowed inside",
  },
  {
    name: "Shri Radha Vallabh Ji Temple",
    location: "Vrindavan",
    distance: "0.5 km from Banke Bihari",
    timings: [
      { name: "Morning Darshan", time: "8:00 AM - 11:30 AM" },
      { name: "Evening Darshan", time: "5:00 PM - 8:30 PM" },
    ],
    aarti: ["Mangla Aarti: 5:30 AM", "Shringar Aarti: 7:30 AM", "Shayan Aarti: 8:00 PM"],
  },
  {
    name: "Shri Govind Dev Ji Temple",
    location: "Vrindavan",
    distance: "1 km from Banke Bihari",
    timings: [
      { name: "Morning Darshan", time: "5:00 AM - 12:00 PM" },
      { name: "Evening Darshan", time: "4:00 PM - 9:00 PM" },
    ],
    aarti: ["Mangla Aarti: 5:00 AM", "Shringar Aarti: 7:00 AM", "Sandhya Aarti: 6:30 PM"],
  },
  {
    name: "Shri Radha Raman Ji Temple",
    location: "Vrindavan",
    distance: "0.8 km from Banke Bihari",
    timings: [
      { name: "Morning Darshan", time: "9:00 AM - 12:00 PM" },
      { name: "Evening Darshan", time: "5:00 PM - 8:30 PM" },
    ],
    aarti: ["Mangla Aarti: 5:00 AM", "Shringar: 9:00 AM", "Shayan: 8:00 PM"],
    special: "Self-manifested deity",
  },
  {
    name: "Shri Krishna Balram Mandir (ISKCON)",
    location: "Vrindavan",
    distance: "2 km from Banke Bihari",
    timings: [
      { name: "Morning Darshan", time: "4:30 AM - 1:00 PM" },
      { name: "Evening Darshan", time: "4:00 PM - 8:30 PM" },
    ],
    aarti: ["Mangla Aarti: 4:30 AM", "Guru Puja: 7:15 AM", "Gaura Aarti: 7:00 PM"],
  },
  {
    name: "Prem Mandir",
    location: "Vrindavan",
    distance: "3 km from Banke Bihari",
    timings: [
      { name: "Morning Darshan", time: "5:30 AM - 12:00 PM" },
      { name: "Evening Darshan", time: "4:30 PM - 8:30 PM" },
    ],
    aarti: ["Aarti: 5:30 AM, 8:30 PM"],
    special: "Beautiful light show at 7:30 PM",
  },
];

const MandirTimings = () => {
  return (
    <Layout>
      {/* Header */}
      <div className="relative h-[40vh] flex items-center">
        <img src={vrindavanTemple} alt="Vrindavan Temple" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 to-foreground/50" />
        <div className="container relative z-10 text-background">
          <p className="text-primary font-medium tracking-widest text-sm mb-4">TEMPLE GUIDE</p>
          <h1 className="font-display text-5xl font-bold mb-4">
            Mandir <span className="text-primary">Timings</span>
          </h1>
          <p className="text-xl text-background/80 max-w-xl">
            Darshan and Aarti schedules for all major temples in Vrindavan
          </p>
        </div>
      </div>

      {/* Info Banner */}
      <div className="bg-primary/10 py-4">
        <div className="container flex flex-wrap items-center justify-center gap-8 text-sm">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-primary" />
            <span>Timings may vary on festivals</span>
          </div>
          <div className="flex items-center gap-2">
            <Bell className="w-5 h-5 text-primary" />
            <span>Arrive 30 mins before Aarti</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-primary" />
            <span>Last updated: Today</span>
          </div>
        </div>
      </div>

      {/* Temple Cards */}
      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
            {temples.map((temple) => (
              <div key={temple.name} className="card-divine">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🛕</span>
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold">{temple.name}</h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                      <MapPin className="w-4 h-4" />
                      <span>{temple.location} • {temple.distance}</span>
                    </div>
                  </div>
                </div>

                {/* Darshan Timings */}
                <div className="space-y-3 mb-6">
                  <h4 className="font-semibold flex items-center gap-2">
                    <Clock className="w-4 h-4 text-primary" />
                    Darshan Timings
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    {temple.timings.map((timing) => (
                      <div key={timing.name} className="bg-muted rounded-lg p-3">
                        <div className="flex items-center gap-2 mb-1">
                          {timing.name.includes("Morning") ? (
                            <Sun className="w-4 h-4 text-gold" />
                          ) : (
                            <Moon className="w-4 h-4 text-secondary" />
                          )}
                          <span className="text-xs text-muted-foreground">{timing.name}</span>
                        </div>
                        <p className="font-semibold">{timing.time}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Aarti Schedule */}
                <div className="space-y-3">
                  <h4 className="font-semibold flex items-center gap-2">
                    <Bell className="w-4 h-4 text-primary" />
                    Aarti Schedule
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {temple.aarti.map((aarti) => (
                      <span key={aarti} className="bg-primary/10 text-primary text-xs font-medium px-3 py-1 rounded-full">
                        {aarti}
                      </span>
                    ))}
                  </div>
                </div>

                {temple.special && (
                  <div className="mt-4 pt-4 border-t border-border">
                    <p className="text-sm text-accent font-medium">⭐ {temple.special}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="py-16 bg-muted">
        <div className="container">
          <h2 className="font-display text-3xl font-bold text-center mb-12">
            Temple Visit <span className="gradient-text">Tips</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Dress Code", desc: "Wear modest, traditional clothing. Remove shoes before entering." },
              { title: "Best Time", desc: "Early morning (before 9 AM) or evening for less crowd." },
              { title: "Photography", desc: "Most temples don't allow photography inside. Respect the rules." },
            ].map((tip) => (
              <div key={tip.title} className="card-divine text-center">
                <h3 className="font-display text-lg font-semibold mb-2">{tip.title}</h3>
                <p className="text-muted-foreground text-sm">{tip.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MandirTimings;
