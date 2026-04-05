import { 
  Flower2, 
  Wind, 
  Droplets, 
  Sparkles, 
  Waves, 
  Sprout 
} from "lucide-react";

export const services = [
  {
    id: 1,
    title: "Full Body Massage",
    description: "Deep relaxation for your entire body, releasing tension from head to toe using premium oils.",
    icon: Flower2,
    image: "https://images.pexels.com/photos/4599422/pexels-photo-4599422.jpeg?cs=srgb&dl=pexels-shkrabaanthony-4599422.jpg&fm=jpg",
    price: "₹1,499 onwards",
    duration: "60 / 90 mins"
  },
  {
    id: 2,
    title: "Aromatic Therapy",
    description: "Indulge your senses with customized essential oils designed to soothe the mind and soul.",
    icon: Wind,
    image: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=2000&auto=format&fit=crop",
    price: "₹1,899 onwards",
    duration: "60 / 90 mins"
  },
  {
    id: 3,
    title: "Deep Tissue Massage",
    description: "Focuses on realigning deeper layers of muscles and connective tissue for intense relief.",
    icon: Droplets,
    image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=2000&auto=format&fit=crop",
    price: "₹1,999 onwards",
    duration: "60 / 90 mins"
  },
  {
    id: 4,
    title: "Facial & Skin Care",
    description: "Rejuvenating treatments that leave your skin glowing, hydrated, and youthful.",
    icon: Sparkles,
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2000&auto=format&fit=crop",
    price: "₹1,299 onwards",
    duration: "45 / 60 mins"
  },
  {
    id: 5,
    title: "Steam & Sauna",
    description: "Detoxify your system and open up pores with our state-of-the-art steam facilities.",
    icon: Waves,
    image: "https://hips.hearstapps.com/hmg-prod/images/interior-of-finnish-sauna-classic-wooden-sauna-royalty-free-image-1677879860.jpg",
    price: "₹499 onwards",
    duration: "30 mins"
  },
  {
    id: 6,
    title: "Thai Massage",
    description: "Traditional healing combining acupressure and assisted yoga postures for flexibility.",
    icon: Sprout,
    image: "https://a.cdn-hotels.com/gdcs/production140/d249/a2d553bb-fefd-49f9-b7c3-32dce91827bb.jpg",
    price: "₹1,799 onwards",
    duration: "60 / 90 mins"
  }
];

export const pricing = [
  {
    title: "Classic Wellness",
    price: "₹3,999",
    features: [
      "Full Body Massage (60 mins)",
      "Express Facial",
      "Steam Session",
      "Welcome Drink & Refreshment"
    ],
    recommended: false
  },
  {
    title: "Royal Rejuvenation",
    price: "₹5,499",
    features: [
      "Deep Tissue Massage (90 mins)",
      "Premium Skin Glow Facial",
      "Full Sauna & Steam Access",
      "Organic Herbal Tea",
      "Complementary Spa Kit"
    ],
    recommended: true
  },
  {
    title: "Ultimate Zen",
    price: "₹8,999",
    features: [
      "Aromatic Therapy (90 mins)",
      "Signature Anti-Aging Facial",
      "Luxury Mani-Pedi Session",
      "Full Body Scrub",
      "Private VIP Lounge Access"
    ],
    recommended: false
  }
];

export const testimonials = [
  {
    name: "Anjali Sharma",
    role: "Regular Client",
    feedback: "The ambiance at Cool Wellness Spa is truly magical. From the moment you walk in, you feel at peace. The Thai massage is a must-try!",
    image: "https://tse2.mm.bing.net/th/id/OIP.5uhzjAnZRJ0HJGQFU1-_CAHaLG?pid=Api&P=0&h=220"
  },
  {
    name: "Rohan Gupta",
    role: "Fitness Enthusiast",
    feedback: "As someone who trains regularly, their Deep Tissue Massage is the best I've had in Ghaziabad. Very professional therapists.",
    image: "https://cdn.pixabay.com/photo/2021/01/02/18/49/indian-5882631_1280.jpg"
  },
  {
    name: "Sneha Varma",
    role: "Business Professional",
    feedback: "Perfect getaway to destress after a hectic week. The staff is polite, and the facilities are very clean and hygienic.",
    image: "https://w0.peakpx.com/wallpaper/225/259/HD-wallpaper-ladies-red-saree-look-traditional-look-indian-girl.jpg"
  },

  {
    name: "Amit Verma",
    role: "Entrepreneur",
    feedback: "I’ve visited multiple spas, but the level of comfort and professionalism here is unmatched. Highly recommended for a premium experience.",
    image: "https://images.pexels.com/photos/938639/pexels-photo-938639.jpeg?cs=srgb&dl=pexels-ravi-k-301762-938639.jpg&fm=jpg"
  },
  {
    name: "Priya Mehta",
    role: "Working Professional",
    feedback: "Loved the aroma therapy session. The environment is so calming, and the staff makes you feel very comfortable throughout.",
    image: "https://cdn.pixabay.com/photo/2021/02/03/09/44/portrait-5977311_1280.jpg"
  },
  {
    name: "Karan Malhotra",
    role: "Gym Trainer",
    feedback: "Their deep tissue therapy really helped with my muscle recovery. Clean setup and skilled therapists.",
    image: "https://i.pinimg.com/originals/85/a1/41/85a141abeb4c84cad5c24128b3cddce7.jpg"
  },
  {
    name: "Neha Kapoor",
    role: "Fashion Designer",
    feedback: "Such a luxurious experience! The interiors, fragrance, and music create a perfect relaxing vibe.",
    image: "https://as2.ftcdn.net/v2/jpg/03/09/15/37/1000_F_309153706_OQHdIyZp9gixDkTOFow3Xa6w5wWkqil4.jpg"
  },
  {
    name: "Rahul Singh",
    role: "IT Professional",
    feedback: "Booked a weekend session and it was totally worth it. The spa is clean, peaceful, and very well maintained.",
    image: "https://cdn.pixabay.com/photo/2021/01/02/18/49/indian-5882625_1280.jpg"
  },
  {
    name: "Pooja Saxena",
    role: "Makeup Artist",
    feedback: "Facial and skincare treatments here are amazing. My skin felt refreshed and glowing after just one session.",
    image: "https://i.pinimg.com/originals/ec/ac/b4/ecacb4754fc4729224fa3cebf4b10479.jpg"
  },
  {
    name: "Vikas Yadav",
    role: "Corporate Employee",
    feedback: "Very relaxing experience. The staff is courteous and the hygiene standards are excellent.",
    image: "https://i.pinimg.com/originals/06/29/8d/06298d548430d752925da79fdc2f8f32.jpg"
  }
];

export const gallery = [
  "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=2000&auto=format&fit=crop",
  "https://tse1.mm.bing.net/th/id/OIP.eX9A9FjS1hUYHKjZVgj10gHaE8?pid=Api&P=0&h=220",
  "https://media.istockphoto.com/id/1262423480/photo/romantic-date-in-spa-salon-with-relaxing-massage.jpg?s=612x612&w=0&k=20&c=eMigkxiHdKvYlKgWqfH7aPJ09Sph8eDUGfWJPwIvI8k=",
  "https://tse1.mm.bing.net/th/id/OIP.WXCcwN7bB09GHdpHYsOIRQHaE8?pid=Api&P=0&h=220"
];
