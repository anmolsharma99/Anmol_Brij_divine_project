import { useState, useMemo } from "react";
import { format, isWeekend, addDays, differenceInDays } from "date-fns";
import { Calendar, Users, MapPin, Clock, AlertCircle, Sparkles, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";

// Special festival dates with extra surcharge
const festivalDates = [
  { date: "2025-03-14", name: "Holi", surcharge: 50 },
  { date: "2025-08-16", name: "Janmashtami", surcharge: 100 },
  { date: "2025-03-30", name: "Ram Navami", surcharge: 30 },
  { date: "2025-10-21", name: "Diwali", surcharge: 40 },
  { date: "2025-11-05", name: "Govardhan Puja", surcharge: 25 },
];

interface Package {
  id: string;
  name: string;
  nameHi: string;
  duration: number;
  basePrice: number;
  features: string[];
  popular?: boolean;
}

const packages: Package[] = [
  {
    id: "day-trip",
    name: "Divine Day Trip",
    nameHi: "दिव्य एक दिवसीय यात्रा",
    duration: 1,
    basePrice: 1499,
    features: ["7 Thakur Ji Darshan", "E-Rickshaw", "Temple Guide", "Prasad Lunch"],
  },
  {
    id: "weekend",
    name: "Weekend Pilgrimage",
    nameHi: "सप्ताहांत तीर्थ यात्रा",
    duration: 2,
    basePrice: 3499,
    features: ["Hotel Stay", "All Aarti", "Yamuna Boat Ride", "All Meals"],
    popular: true,
  },
  {
    id: "complete",
    name: "Complete Vrindavan",
    nameHi: "संपूर्ण वृंदावन",
    duration: 3,
    basePrice: 4999,
    features: ["Premium Hotel", "All Temples", "Meet Sadhu", "Photography", "All Meals"],
  },
  {
    id: "braj-yatra",
    name: "Braj 84 Kos Yatra",
    nameHi: "ब्रज 84 कोस यात्रा",
    duration: 7,
    basePrice: 14999,
    features: ["Complete Circuit", "AC Bus", "Expert Guide", "All Meals", "Premium Hotels"],
  },
];

const TripPlanner = () => {
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();
  const [guests, setGuests] = useState("2");
  const [selectedPackage, setSelectedPackage] = useState<string>("");
  const { toast } = useToast();
  const navigate = useNavigate();

  const calculatePricing = useMemo(() => {
    if (!startDate || !selectedPackage) return null;

    const pkg = packages.find((p) => p.id === selectedPackage);
    if (!pkg) return null;

    const actualEndDate = endDate || addDays(startDate, pkg.duration - 1);
    const days = differenceInDays(actualEndDate, startDate) + 1;
    const numGuests = parseInt(guests) || 2;

    let baseTotal = pkg.basePrice * numGuests;
    let weekendDays = 0;
    let festivalSurcharge = 0;
    let festivalName = "";

    // Calculate weekend and festival surcharges
    for (let i = 0; i < days; i++) {
      const currentDate = addDays(startDate, i);
      if (isWeekend(currentDate)) {
        weekendDays++;
      }

      const dateStr = format(currentDate, "yyyy-MM-dd");
      const festival = festivalDates.find((f) => f.date === dateStr);
      if (festival) {
        festivalSurcharge += (festival.surcharge / 100) * baseTotal;
        festivalName = festival.name;
      }
    }

    const weekendSurcharge = weekendDays > 0 ? (weekendDays * 0.15 * baseTotal) / days : 0;
    const totalSurcharge = weekendSurcharge + festivalSurcharge;
    const finalTotal = baseTotal + totalSurcharge;

    return {
      baseTotal,
      weekendDays,
      weekendSurcharge: Math.round(weekendSurcharge),
      festivalSurcharge: Math.round(festivalSurcharge),
      festivalName,
      totalSurcharge: Math.round(totalSurcharge),
      finalTotal: Math.round(finalTotal),
      days,
      savings: Math.round(finalTotal * 0.2),
    };
  }, [startDate, endDate, guests, selectedPackage]);

  const handleBooking = () => {
    if (!startDate || !selectedPackage) {
      toast({
        title: "Please complete your selection",
        description: "Choose dates and package to continue",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "🙏 Booking Initiated!",
      description: "Redirecting to confirm your divine journey...",
    });

    // Navigate to services page with booking details
    navigate("/services", {
      state: {
        booking: {
          startDate,
          endDate,
          guests,
          package: selectedPackage,
          pricing: calculatePricing,
        },
      },
    });
  };

  const pkg = packages.find((p) => p.id === selectedPackage);

  return (
    <div className="bg-gradient-to-br from-muted via-background to-muted rounded-3xl p-8 border border-border">
      <div className="text-center mb-8">
        <Badge className="bg-primary/10 text-primary border-0 mb-4">
          <Sparkles className="w-3 h-3 mr-1" />
          Plan Your Divine Journey
        </Badge>
        <h2 className="font-display text-3xl font-bold mb-2">
          Flexible <span className="gradient-text">Trip Planner</span>
        </h2>
        <p className="text-muted-foreground">Choose your dates and we'll create the perfect itinerary</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Selection Panel */}
        <div className="space-y-6">
          {/* Package Selection */}
          <div className="space-y-3">
            <Label className="text-base font-semibold flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" />
              Choose Your Package
            </Label>
            <div className="grid grid-cols-2 gap-3">
              {packages.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setSelectedPackage(p.id)}
                  className={cn(
                    "relative p-4 rounded-xl border-2 text-left transition-all hover:scale-[1.02]",
                    selectedPackage === p.id
                      ? "border-primary bg-primary/5 shadow-md"
                      : "border-border hover:border-primary/50"
                  )}
                >
                  {p.popular && (
                    <Badge className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs">
                      Popular
                    </Badge>
                  )}
                  <h4 className="font-semibold text-sm mb-1">{p.name}</h4>
                  <p className="text-xs text-muted-foreground mb-2">{p.nameHi}</p>
                  <div className="flex items-baseline gap-1">
                    <span className="font-bold text-primary">₹{p.basePrice.toLocaleString()}</span>
                    <span className="text-xs text-muted-foreground">/{p.duration} days</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Date Selection */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-primary" />
                Start Date
              </Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="w-full justify-start text-left">
                    {startDate ? format(startDate, "PPP") : "Pick date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <CalendarComponent
                    mode="single"
                    selected={startDate}
                    onSelect={setStartDate}
                    disabled={(date) => date < new Date()}
                    className="pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div className="space-y-2">
              <Label className="flex items-center gap-2">
                <Users className="w-4 h-4 text-primary" />
                Guests
              </Label>
              <Select value={guests} onValueChange={setGuests}>
                <SelectTrigger>
                  <SelectValue placeholder="Select guests" />
                </SelectTrigger>
                <SelectContent>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 10, 15, 20].map((n) => (
                    <SelectItem key={n} value={n.toString()}>
                      {n} {n === 1 ? "Guest" : "Guests"}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Weekend/Holiday Notice */}
          {startDate && calculatePricing && (calculatePricing.weekendDays > 0 || calculatePricing.festivalSurcharge > 0) && (
            <div className="flex items-start gap-3 p-4 bg-gold/10 rounded-xl border border-gold/30">
              <AlertCircle className="w-5 h-5 text-gold shrink-0 mt-0.5" />
              <div className="text-sm">
                <p className="font-medium text-gold">Special Period Pricing</p>
                <p className="text-muted-foreground">
                  {calculatePricing.weekendDays > 0 && (
                    <span>{calculatePricing.weekendDays} weekend day(s) (+15% each). </span>
                  )}
                  {calculatePricing.festivalName && (
                    <span>{calculatePricing.festivalName} festival period included. </span>
                  )}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Pricing Summary */}
        <Card className="bg-card/80 backdrop-blur border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-primary" />
              Trip Summary
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {pkg && calculatePricing ? (
              <>
                <div className="space-y-1">
                  <h3 className="font-display text-xl font-bold">{pkg.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {calculatePricing.days} days • {guests} guests
                  </p>
                </div>

                <div className="space-y-2">
                  {pkg.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-tulsi" />
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="border-t pt-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Base Price ({guests} guests)</span>
                    <span>₹{calculatePricing.baseTotal.toLocaleString()}</span>
                  </div>
                  {calculatePricing.weekendSurcharge > 0 && (
                    <div className="flex justify-between text-sm text-gold">
                      <span>Weekend Surcharge</span>
                      <span>+₹{calculatePricing.weekendSurcharge.toLocaleString()}</span>
                    </div>
                  )}
                  {calculatePricing.festivalSurcharge > 0 && (
                    <div className="flex justify-between text-sm text-accent">
                      <span>Festival Surcharge</span>
                      <span>+₹{calculatePricing.festivalSurcharge.toLocaleString()}</span>
                    </div>
                  )}
                  <div className="flex justify-between font-bold text-lg border-t pt-2">
                    <span>Total</span>
                    <span className="text-primary">₹{calculatePricing.finalTotal.toLocaleString()}</span>
                  </div>
                  <p className="text-xs text-tulsi">
                    You save ₹{calculatePricing.savings.toLocaleString()} with this package!
                  </p>
                </div>

                <Button onClick={handleBooking} className="w-full btn-divine text-lg py-6">
                  Book Now <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </>
            ) : (
              <div className="text-center py-8 text-muted-foreground">
                <MapPin className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p>Select a package and date to see pricing</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TripPlanner;
