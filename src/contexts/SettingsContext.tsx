import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Language } from "@/components/settings/LanguageSwitcher";
import { ThemeColor, ThemeMode, applyTheme } from "@/components/settings/ThemeSwitcher";

interface SettingsContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  theme: ThemeColor;
  setTheme: (theme: ThemeColor) => void;
  mode: ThemeMode;
  setMode: (mode: ThemeMode) => void;
  t: (key: string) => string;
}

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

// Translation strings
const translations: Record<Language, Record<string, string>> = {
  en: {
    // Header
    home: "Home",
    shop: "Shop",
    ladduGopal: "Laddu Gopal",
    vrindavanServices: "Vrindavan Services",
    mandirTimings: "Mandir Timings",
    sadhuVaani: "Sadhu Vaani",
    ceoVision: "CEO Vision",
    contact: "Contact",
    login: "Login",
    signUp: "Sign Up",
    cart: "Cart",
    wishlist: "Wishlist",
    profile: "Profile",
    
    // Common
    bookNow: "Book Now",
    shopNow: "Shop Now",
    learnMore: "Learn More",
    viewAll: "View All",
    addToCart: "Add to Cart",
    buyNow: "Buy Now",
    
    // Hero
    heroTitle: "Experience the Divine",
    heroSubtitle: "Your spiritual journey to Vrindavan begins here",
    
    // Services
    planTrip: "Plan Your Trip",
    flexibleDates: "Flexible Dates",
    weekendSurcharge: "Weekend/Holiday Surcharge",
    
    // Footer
    radheRadhe: "Radhe Radhe",
    freeShipping: "Free Shipping on Orders Above ₹999",
  },
  hi: {
    // Header
    home: "होम",
    shop: "दुकान",
    ladduGopal: "लड्डू गोपाल",
    vrindavanServices: "वृंदावन सेवाएं",
    mandirTimings: "मंदिर समय",
    sadhuVaani: "साधु वाणी",
    ceoVision: "सीईओ विजन",
    contact: "संपर्क",
    login: "लॉगिन",
    signUp: "साइन अप",
    cart: "कार्ट",
    wishlist: "पसंदीदा",
    profile: "प्रोफ़ाइल",
    
    // Common
    bookNow: "अभी बुक करें",
    shopNow: "अभी खरीदें",
    learnMore: "और जानें",
    viewAll: "सब देखें",
    addToCart: "कार्ट में डालें",
    buyNow: "अभी खरीदें",
    
    // Hero
    heroTitle: "दिव्य अनुभव",
    heroSubtitle: "वृंदावन की आपकी आध्यात्मिक यात्रा यहाँ से शुरू होती है",
    
    // Services
    planTrip: "अपनी यात्रा की योजना बनाएं",
    flexibleDates: "लचीली तिथियाँ",
    weekendSurcharge: "सप्ताहांत/छुट्टी अधिभार",
    
    // Footer
    radheRadhe: "राधे राधे",
    freeShipping: "₹999 से ऊपर के ऑर्डर पर मुफ्त शिपिंग",
  },
  bn: {
    home: "হোম",
    shop: "দোকান",
    ladduGopal: "লাড্ডু গোপাল",
    vrindavanServices: "বৃন্দাবন সেবা",
    mandirTimings: "মন্দির সময়",
    sadhuVaani: "সাধু বাণী",
    ceoVision: "সিইও ভিশন",
    contact: "যোগাযোগ",
    login: "লগইন",
    signUp: "সাইন আপ",
    cart: "কার্ট",
    wishlist: "পছন্দ",
    profile: "প্রোফাইল",
    bookNow: "এখনই বুক করুন",
    shopNow: "এখনই কিনুন",
    learnMore: "আরও জানুন",
    viewAll: "সব দেখুন",
    addToCart: "কার্টে যোগ করুন",
    buyNow: "এখনই কিনুন",
    heroTitle: "দিব্য অভিজ্ঞতা",
    heroSubtitle: "বৃন্দাবনে আপনার আধ্যাত্মিক যাত্রা এখান থেকে শুরু",
    planTrip: "আপনার ভ্রমণ পরিকল্পনা করুন",
    flexibleDates: "নমনীয় তারিখ",
    weekendSurcharge: "সাপ্তাহিক ছুটি/ছুটির অতিরিক্ত চার্জ",
    radheRadhe: "রাধে রাধে",
    freeShipping: "₹999 এর উপরে অর্ডারে বিনামূল্যে শিপিং",
  },
  ta: {
    home: "முகப்பு",
    shop: "கடை",
    ladduGopal: "லட்டு கோபால்",
    vrindavanServices: "விருந்தாவன் சேவைகள்",
    mandirTimings: "கோவில் நேரம்",
    sadhuVaani: "சாது வாணி",
    ceoVision: "CEO தரிசனம்",
    contact: "தொடர்பு",
    login: "உள்நுழை",
    signUp: "பதிவு செய்",
    cart: "வண்டி",
    wishlist: "விருப்பப்பட்டியல்",
    profile: "சுயவிவரம்",
    bookNow: "இப்போது புக் செய்",
    shopNow: "இப்போது வாங்கு",
    learnMore: "மேலும் அறிய",
    viewAll: "அனைத்தையும் காண",
    addToCart: "வண்டியில் சேர்",
    buyNow: "இப்போது வாங்கு",
    heroTitle: "தெய்வீக அனுபவம்",
    heroSubtitle: "விருந்தாவனுக்கான உங்கள் ஆன்மீக பயணம் இங்கே தொடங்குகிறது",
    planTrip: "உங்கள் பயணத்தை திட்டமிடுங்கள்",
    flexibleDates: "நெகிழ்வான தேதிகள்",
    weekendSurcharge: "வார இறுதி/விடுமுறை கட்டணம்",
    radheRadhe: "ராதே ராதே",
    freeShipping: "₹999 க்கு மேல் இலவச ஷிப்பிங்",
  },
  gu: {
    home: "હોમ",
    shop: "દુકાન",
    ladduGopal: "લાડુ ગોપાલ",
    vrindavanServices: "વૃંદાવન સેવાઓ",
    mandirTimings: "મંદિર સમય",
    sadhuVaani: "સાધુ વાણી",
    ceoVision: "CEO વિઝન",
    contact: "સંપર્ક",
    login: "લોગિન",
    signUp: "સાઇન અપ",
    cart: "કાર્ટ",
    wishlist: "પસંદગીની યાદી",
    profile: "પ્રોફાઇલ",
    bookNow: "હમણાં બુક કરો",
    shopNow: "હમણાં ખરીદો",
    learnMore: "વધુ જાણો",
    viewAll: "બધું જુઓ",
    addToCart: "કાર્ટમાં ઉમેરો",
    buyNow: "હમણાં ખરીદો",
    heroTitle: "દિવ્ય અનુભવ",
    heroSubtitle: "વૃંદાવન માટે તમારી આધ્યાત્મિક યાત્રા અહીંથી શરૂ થાય છે",
    planTrip: "તમારી યાત્રાનું આયોજન કરો",
    flexibleDates: "લવચીક તારીખો",
    weekendSurcharge: "વીકએન્ડ/રજાનો વધારાનો ચાર્જ",
    radheRadhe: "રાધે રાધે",
    freeShipping: "₹999 થી ઉપરના ઓર્ડર પર મફત શિપિંગ",
  },
  mr: {
    home: "होम",
    shop: "दुकान",
    ladduGopal: "लाडू गोपाल",
    vrindavanServices: "वृंदावन सेवा",
    mandirTimings: "मंदिर वेळ",
    sadhuVaani: "साधू वाणी",
    ceoVision: "CEO व्हिजन",
    contact: "संपर्क",
    login: "लॉगिन",
    signUp: "साइन अप",
    cart: "कार्ट",
    wishlist: "आवडीची यादी",
    profile: "प्रोफाइल",
    bookNow: "आता बुक करा",
    shopNow: "आता खरेदी करा",
    learnMore: "अधिक जाणून घ्या",
    viewAll: "सर्व पहा",
    addToCart: "कार्टमध्ये जोडा",
    buyNow: "आता खरेदी करा",
    heroTitle: "दिव्य अनुभव",
    heroSubtitle: "वृंदावनसाठी तुमचा आध्यात्मिक प्रवास येथून सुरू होतो",
    planTrip: "तुमच्या प्रवासाचे नियोजन करा",
    flexibleDates: "लवचिक तारखा",
    weekendSurcharge: "आठवड्याच्या शेवटी/सुट्टीचा अतिरिक्त शुल्क",
    radheRadhe: "राधे राधे",
    freeShipping: "₹999 वरील ऑर्डरवर मोफत शिपिंग",
  },
};

export const SettingsProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem("anmol-brij-language");
    return (saved as Language) || "en";
  });
  
  const [theme, setTheme] = useState<ThemeColor>(() => {
    const saved = localStorage.getItem("anmol-brij-theme");
    return (saved as ThemeColor) || "saffron";
  });
  
  const [mode, setMode] = useState<ThemeMode>(() => {
    const saved = localStorage.getItem("anmol-brij-mode");
    return (saved as ThemeMode) || "light";
  });

  useEffect(() => {
    localStorage.setItem("anmol-brij-language", language);
  }, [language]);

  useEffect(() => {
    localStorage.setItem("anmol-brij-theme", theme);
    localStorage.setItem("anmol-brij-mode", mode);
    applyTheme(theme, mode);
  }, [theme, mode]);

  const t = (key: string): string => {
    return translations[language]?.[key] || translations.en[key] || key;
  };

  return (
    <SettingsContext.Provider value={{ language, setLanguage, theme, setTheme, mode, setMode, t }}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error("useSettings must be used within a SettingsProvider");
  }
  return context;
};
