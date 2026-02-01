import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import ProductCategories from "@/components/home/ProductCategories";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import VrindavanServices from "@/components/home/VrindavanServices";
import SadhuVaaniPreview from "@/components/home/SadhuVaaniPreview";
import CEOVisionPreview from "@/components/home/CEOVisionPreview";
import ContactCTA from "@/components/home/ContactCTA";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ProductCategories />
      <FeaturedProducts />
      <VrindavanServices />
      <SadhuVaaniPreview />
      <CEOVisionPreview />
      <ContactCTA />
    </Layout>
  );
};

export default Index;
