import { Link } from "react-router-dom";
import ladduGopal from "@/assets/laddu-gopal.jpg";
import poojaItems from "@/assets/pooja-items.jpg";
import radhaKrishna from "@/assets/radha-krishna.jpg";

const categories = [
  {
    id: 1,
    name: "Laddu Gopal Collection",
    description: "Royal dresses & accessories for your beloved Thakur Ji",
    image: ladduGopal,
    link: "/laddu-gopal",
    featured: true,
  },
  {
    id: 2,
    name: "Divine Murtis",
    description: "Krishna, Radha, Shiv & more sacred deities",
    image: radhaKrishna,
    link: "/shop?category=murtis",
  },
  {
    id: 3,
    name: "Pooja Samagri",
    description: "Complete pooja essentials & sacred items",
    image: poojaItems,
    link: "/shop?category=pooja",
  },
];

const ProductCategories = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary font-medium tracking-widest text-sm mb-4">DIVINE COLLECTIONS</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Shop by <span className="gradient-text">Category</span>
          </h2>
          <div className="section-divider" />
          <p className="text-muted-foreground mt-6">
            Explore our curated collection of authentic spiritual products from the holy land of Vrindavan
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Link
              key={category.id}
              to={category.link}
              className={`group relative overflow-hidden rounded-2xl ${
                category.featured ? "md:row-span-2" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`relative ${category.featured ? "h-full min-h-[500px]" : "h-64"}`}>
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-background">
                  <h3 className="font-display text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-background/70 text-sm mb-4">{category.description}</p>
                  <span className="inline-flex items-center text-primary font-medium text-sm group-hover:gap-2 transition-all">
                    Explore Collection
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
