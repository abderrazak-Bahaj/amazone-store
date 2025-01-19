import React, { useState, useEffect } from 'react';
import { ChevronDown, Check, Star } from 'lucide-react';

const subscriptionServices = [
  {
    title: "Amazon Prime Video",
    benefits: [
      "Exclusive shows & movies",
      "4K Ultra HD streaming",
      "Download & watch offline"
    ],
    image: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?auto=format&fit=crop&q=80&w=1000",
    link: "https://www.amazon.com/Prime-Video/b?node=2676882011"
  },
  {
    title: "Amazon Music Unlimited",
    benefits: [
      "90 million songs",
      "HD and Ultra HD audio",
      "Offline listening"
    ],
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=1000",
    link: "https://music.amazon.com/"
  },
  {
    title: "Amazon Channels",
    benefits: [
      "Premium channel subscriptions",
      "Live TV streaming",
      "Add & remove channels anytime"
    ],
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&q=80&w=1000",
    link: "https://www.amazon.com/channels/b?node=2858778011"
  },
  {
    title: "Kindle Unlimited",
    benefits: [
      "Unlimited reading access",
      "Millions of eBooks",
      "Cancel anytime"
    ],
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=1000",
    link: "https://www.amazon.com/kindle-dbs/hz/subscribe/ku"
  },
  {
    title: "Amazon Baby Wishlist",
    benefits: [
      "Create & share wishlists",
      "Special discounts",
      "Easy returns"
    ],
    image: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&q=80&w=1000",
    link: "https://www.amazon.com/baby-reg/homepage"
  }
];

const testimonials = [
  {
    name: "Sarah Johnson",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    rating: 5,
    text: "The best streaming service I've ever used. The content library is massive and the quality is outstanding."
  },
  {
    name: "Michael Chen",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    rating: 5,
    text: "Having all my entertainment in one place has made my life so much easier. Definitely worth every penny!"
  },
];

const features = [
  { title: "4K Streaming", description: "Ultra HD quality streaming on all your favorite shows and movies." },
  { title: "Ad-Free Music", description: "Millions of songs without interruptions, available offline." },
  { title: "Multi-Device", description: "Watch on your TV, laptop, tablet, or phone seamlessly." },
  { title: "Original Content", description: "Exclusive shows and movies you won't find anywhere else." },
];

function App() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-dark">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <img 
            src="/hero.jpg"
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 gradient-overlay"></div>
        </div>
        
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="font-manrope text-5xl md:text-7xl font-bold mb-8">
            All Your Entertainment,<br />One Subscription
          </h1>
          <button className="btn-primary">
            Start Free Trial
          </button>
          
          <div className="absolute bottom-10 scroll-indicator">
            <ChevronDown size={32} className="text-white/50" />
          </div>
        </div>
      </section>

      {/* Subscription Cards */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {subscriptionServices.map((service) => (
              <div key={service.title} className="card">
                {/*
                <div className="h-48 mb-6 rounded-lg overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                */}
                <h3 className="text-2xl font-manrope font-bold mb-4">{service.title}</h3>
                <ul className="space-y-3 mb-6">
                  {service.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Check size={20} className="text-primary" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                <a 
                  href={service.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full block text-center"
                >
                  Try Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 bg-dark-light/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="feature-item">
                <div>
                  <h3 className="font-manrope font-bold text-xl mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="relative h-64">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  index === currentTestimonial ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mx-auto mb-4"
                />
                <div className="flex justify-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} className="fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-lg mb-4">{testimonial.text}</p>
                <p className="font-semibold">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="bg-dark-light/30 py-6 px-4 text-center">
        <p className="text-gray-400">© {new Date().getFullYear()} Amazon Services. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;