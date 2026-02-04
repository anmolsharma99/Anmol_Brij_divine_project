import Layout from "@/components/layout/Layout";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ShoppingCart, BookOpen, Download, Eye, Star, Search, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import ladduGopal from "@/assets/laddu-gopal.jpg";
import radhaKrishna from "@/assets/radha-krishna.jpg";

const categories = [
  { id: "all", name: "All Books" },
  { id: "gita", name: "Bhagavad Gita" },
  { id: "purana", name: "Puranas" },
  { id: "saints", name: "Saints' Writings" },
  { id: "ebooks", name: "E-Books Only" },
];

const books = [
  {
    id: 1,
    title: "Bhagavad Gita As It Is",
    author: "A.C. Bhaktivedanta Swami Prabhupada",
    price: 350,
    originalPrice: 500,
    rating: 4.9,
    reviews: 2456,
    image: ladduGopal,
    category: "gita",
    hasEbook: true,
    ebookPrice: 99,
    pages: 892,
    language: "Hindi/English",
    badge: "Bestseller",
    description: "The definitive translation and commentary on the Bhagavad Gita by the founder of ISKCON.",
    preview: `अध्याय 1 - अर्जुन विषाद योग

धृतराष्ट्र उवाच।
धर्मक्षेत्रे कुरुक्षेत्रे समवेता युयुत्सवः।
मामकाः पाण्डवाश्चैव किमकुर्वत सञ्जय॥1॥

Dhritarashtra said: O Sanjaya, what did my sons and the sons of Pandu do when they assembled on the holy field of Kurukshetra, eager to fight?

This opening verse sets the scene for the entire Bhagavad Gita. Dhritarashtra, the blind king, asks his secretary Sanjaya about the events on the battlefield. The use of "dharma-kshetra" (field of righteousness) is significant as it indicates that the outcome will favor the righteous Pandavas...`
  },
  {
    id: 2,
    title: "श्रीमद् भागवत पुराण",
    author: "Ved Vyasa",
    price: 599,
    originalPrice: 899,
    rating: 4.8,
    reviews: 1234,
    image: radhaKrishna,
    category: "purana",
    hasEbook: true,
    ebookPrice: 149,
    pages: 1500,
    language: "Sanskrit/Hindi",
    badge: "Sacred",
    description: "The complete Srimad Bhagavatam with Hindi translation describing Lord Krishna's pastimes.",
    preview: `स्कन्ध 1, अध्याय 1

जन्माद्यस्य यतोऽन्वयादितरतश्चार्थेष्वभिज्ञः स्वराट्।
तेने ब्रह्म हृदा य आदिकवये मुह्यन्ति यत्सूरयः॥

The Absolute Truth, from whom everything emanates, is the source of all creation. He imparted Vedic knowledge unto the heart of Brahmaji, the original created being...`
  },
  {
    id: 3,
    title: "Radha Krishna - Divine Love",
    author: "Swami Vivekananda",
    price: 299,
    originalPrice: 450,
    rating: 4.7,
    reviews: 567,
    image: ladduGopal,
    category: "saints",
    hasEbook: true,
    ebookPrice: 79,
    pages: 320,
    language: "English",
    description: "Exploring the divine love between Radha and Krishna through spiritual lens.",
    preview: `Chapter 1: The Eternal Love

The love between Radha and Krishna is not ordinary human love. It is the highest form of divine consciousness manifesting as the eternal dance of the soul with the Supreme...`
  },
  {
    id: 4,
    title: "Vishnu Purana - Complete",
    author: "Ved Vyasa",
    price: 450,
    originalPrice: 650,
    rating: 4.8,
    reviews: 892,
    image: radhaKrishna,
    category: "purana",
    hasEbook: true,
    ebookPrice: 129,
    pages: 980,
    language: "Hindi",
    description: "The Vishnu Purana describing the creation, life cycles, and glories of Lord Vishnu.",
    preview: `अंश 1, अध्याय 1

प्रणम्य शिरसा विष्णुं त्रैलोक्यपतिमीश्वरम्।
वेदव्यासप्रणीतं च पुराणं प्रवदाम्यहम्॥

Having bowed down to Vishnu, the Lord of the three worlds, I shall narrate this Purana as composed by Vedavyasa...`
  },
  {
    id: 5,
    title: "Chaitanya Charitamrita",
    author: "Krishnadas Kaviraj",
    price: 699,
    originalPrice: 999,
    rating: 4.9,
    reviews: 678,
    image: ladduGopal,
    category: "saints",
    hasEbook: true,
    ebookPrice: 199,
    pages: 1200,
    language: "Bengali/Hindi",
    badge: "Premium",
    description: "The biography of Lord Chaitanya Mahaprabhu and his teachings.",
    preview: `आदि-लीला, अध्याय 1

वन्दे गुरून् ईश-भक्तान्
ईशम् ईशावतारकान्
तत्-प्रकाशांश्च तच्-छक्तीः
कृष्ण-चैतन्य-संज्ञकम्

I offer my respectful obeisances unto the spiritual masters, the devotees of the Lord, the Lord's incarnations, His plenary portions, His energies, and the primeval Lord Himself, Sri Krishna Chaitanya...`
  },
  {
    id: 6,
    title: "Gita Govinda",
    author: "Jayadeva Goswami",
    price: 250,
    originalPrice: 400,
    rating: 4.8,
    reviews: 345,
    image: radhaKrishna,
    category: "saints",
    hasEbook: true,
    ebookPrice: 69,
    pages: 180,
    language: "Sanskrit/Hindi",
    description: "The beautiful poem describing the love of Radha and Krishna.",
    preview: `सर्ग 1 - सामोद-दामोदरम्

मेघैर्मेदुरमम्बरं वनभुवः श्यामास्तमालद्रुमैः
नक्तं भीरुरयं त्वमेव तदिमं राधे गृहं प्रापय।
इत्थं नन्दनिदेशतश्चलितयोः प्रत्यध्वकुञ्जद्रुमं
राधामाधवयोर्जयन्ति यमुनाकूले रहःकेलयः॥

The clouds have covered the sky, the forest is dark with Tamala trees. O timid one, you alone should take Radha home. Thus instructed by Nanda, on the banks of the Yamuna, the secret pastimes of Radha and Madhava triumph...`
  },
];

const SpiritualBooks = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [previewBook, setPreviewBook] = useState<typeof books[0] | null>(null);
  const { toast } = useToast();

  const filteredBooks = books.filter(book => {
    const matchesCategory = selectedCategory === "all" || 
      (selectedCategory === "ebooks" ? book.hasEbook : book.category === selectedCategory);
    const matchesSearch = book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const addToCart = (title: string, type: "physical" | "ebook") => {
    toast({
      title: `${type === "ebook" ? "E-Book" : "Book"} Added to Cart! 📚`,
      description: `${title} has been added to your cart.`,
    });
  };

  return (
    <Layout>
      {/* Hero */}
      <div className="relative bg-gradient-to-r from-primary/20 via-background to-secondary/20 py-16">
        <div className="container text-center">
          <span className="inline-block px-4 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium mb-4">
            📚 Sacred Knowledge
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Spiritual <span className="gradient-text">Books & E-Books</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our collection of sacred texts, scriptures, and spiritual writings. 
            Order physical books or read e-books instantly online.
          </p>
        </div>
      </div>

      <div className="container py-12">
        {/* Search & Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Search books or authors..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <Button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                variant={selectedCategory === cat.id ? "default" : "outline"}
                size="sm"
                className={selectedCategory === cat.id ? "btn-divine" : ""}
              >
                {cat.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBooks.map((book) => (
            <div key={book.id} className="card-divine group">
              {/* Badge */}
              {book.badge && (
                <span className="absolute top-4 left-4 z-10 bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
                  {book.badge}
                </span>
              )}

              {/* Image */}
              <div className="relative h-64 mb-4 overflow-hidden rounded-lg">
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {book.hasEbook && (
                  <span className="absolute top-4 right-4 bg-tulsi text-white text-xs font-medium px-2 py-1 rounded-full">
                    E-Book Available
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="space-y-2">
                <h3 className="font-display font-semibold text-lg leading-tight line-clamp-2 group-hover:text-primary transition-colors">
                  {book.title}
                </h3>
                <p className="text-sm text-muted-foreground">{book.author}</p>
                <p className="text-xs text-muted-foreground line-clamp-2">{book.description}</p>

                {/* Meta */}
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span>{book.pages} pages</span>
                  <span>•</span>
                  <span>{book.language}</span>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 fill-gold text-gold" />
                  <span className="text-sm font-medium">{book.rating}</span>
                  <span className="text-xs text-muted-foreground">({book.reviews})</span>
                </div>

                {/* Prices */}
                <div className="space-y-2 pt-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-primary" />
                      <span className="text-sm">Physical Book:</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-display font-bold text-primary">₹{book.price}</span>
                      <span className="text-xs text-muted-foreground line-through">₹{book.originalPrice}</span>
                    </div>
                  </div>

                  {book.hasEbook && (
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Download className="w-4 h-4 text-tulsi" />
                        <span className="text-sm">E-Book:</span>
                      </div>
                      <span className="font-display font-bold text-tulsi">₹{book.ebookPrice}</span>
                    </div>
                  )}
                </div>

                {/* Actions */}
                <div className="flex gap-2 pt-3">
                  <Button 
                    onClick={() => addToCart(book.title, "physical")} 
                    className="flex-1 btn-divine"
                    size="sm"
                  >
                    <ShoppingCart className="w-4 h-4 mr-1" />
                    Buy Book
                  </Button>
                  {book.hasEbook && (
                    <Button
                      onClick={() => setPreviewBook(book)}
                      variant="outline"
                      size="sm"
                      className="btn-outline-divine"
                    >
                      <Eye className="w-4 h-4 mr-1" />
                      Read
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredBooks.length === 0 && (
          <div className="text-center py-16">
            <BookOpen className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="font-display text-xl font-bold mb-2">No Books Found</h3>
            <p className="text-muted-foreground">Try a different search or category.</p>
          </div>
        )}
      </div>

      {/* E-Book Preview Dialog */}
      <Dialog open={!!previewBook} onOpenChange={() => setPreviewBook(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="font-display text-2xl flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-primary" />
              {previewBook?.title}
            </DialogTitle>
            <DialogDescription>
              by {previewBook?.author}
            </DialogDescription>
          </DialogHeader>
          
          <div className="mt-4">
            <div className="bg-muted rounded-lg p-6 font-serif text-lg leading-relaxed whitespace-pre-wrap">
              {previewBook?.preview}
            </div>
            
            <div className="mt-6 p-4 bg-primary/10 rounded-lg">
              <p className="text-center text-sm text-muted-foreground mb-4">
                📖 This is a preview. Purchase the full e-book to continue reading.
              </p>
              <div className="flex gap-3 justify-center">
                <Button 
                  onClick={() => {
                    addToCart(previewBook?.title || "", "ebook");
                    setPreviewBook(null);
                  }}
                  className="btn-divine"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Buy E-Book - ₹{previewBook?.ebookPrice}
                </Button>
                <Button 
                  onClick={() => {
                    addToCart(previewBook?.title || "", "physical");
                    setPreviewBook(null);
                  }}
                  variant="outline"
                >
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Buy Physical - ₹{previewBook?.price}
                </Button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default SpiritualBooks;
