"use client";

import * as React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Heart,
  Leaf,
  Mail,
  MapPin,
  Menu,
  Phone,
  Recycle,
  ShoppingBag,
  Target,
  Cloud,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import useEmblaCarousel from 'embla-carousel-react';
import { motion } from "framer-motion";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import CounterCard from "@/components/ui/counter-card";
import TestimonialCard from "@/components/ui/testimonial-card";
import BlogCard from "@/components/ui/blog-card";

const Navbar = () => {
  const NavItems = () => (
    <>
      <Link href="#features" className=" text-[#007036] hover:text-[#C6AF87]">
        Características
      </Link>
      <Link href="#about" className="text-[#007036] hover:text-[#C6AF87]">
        Sobre Nosotros
      </Link>
      <Link href="#how-it-works" className="text-[#007036] hover:text-[#C6AF87]">
        Cómo funciona
      </Link>
      <Link href="#contact" className=" text-[#007036] hover:text-[#C6AF87]">
        Contacto
      </Link>
    </>
  );

  return (
    <nav className="bg-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white">
          <img 
            src="/logoofi.png" 
            alt="Easy Pack Logo" 
            className="h-20 w-auto"
          />
        </Link>
        <div className="hidden md:flex space-x-4">
          <NavItems />
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Abrir menú</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[240px] bg-[#007036]">
            <nav className="flex flex-col space-y-4 mt-4">
              <NavItems />
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

const HeroCarousel = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true, duration: 20 });

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex">
        {[
          {
            image: "/EasyPack11.jpg",
            title: "EASY PACK",
            subtitle: "Soluciones sustentables para el hogar"
          },
          {
            image: "/EasyPack8.jpg",
            title: "Diseño Innovador",
            subtitle: "Práctico y resistente"
          },
          {
            image: "/EasyPack10.jpg",
            title: "100% Ecológico",
            subtitle: "Comprometidos con el medio ambiente"
          }
        ].map((slide, index) => (
          <div key={index} className="flex-[0_0_100%] min-w-0 relative">
            <div className="relative h-[80vh] w-full">
              <img
                src={slide.image}
                alt={slide.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50">
                <div className="container mx-auto h-full flex items-center justify-center text-center">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-white"
                  >
                    <h1 className="text-5xl md:text-7xl font-bold mb-4" 
                        style={{ fontFamily: "NEXA HEAVY, sans-serif" }}>
                      {slide.title}
                    </h1>
                    <p className="text-xl md:text-2xl mb-8">
                      {slide.subtitle}
                    </p>
                    <Button className="bg-white text-[#007036] hover:bg-[#C6AF87] hover:text-white">
                      Descubre más <ArrowRight className="ml-2" />
                    </Button>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function EasyPackLanding() {
  return (
    <div className="bg-white text-gray-900">
      <Navbar />
      {/* Hero Section con nuevo carrusel */}
      <HeroCarousel />

      {/* Features Section */}
      <section className="py-20" id="features">
        <div className="container mx-auto px-4">
          <h2
            className="text-3xl md:text-4xl font-bold text-center mb-12"
            style={{ fontFamily: "NEXA HEAVY, sans-serif" }}
          >
            ¿Por qué elegir EASY PACK?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Leaf className="w-12 h-12 text-[#5D8C3C]" />}
              title="Sustentable"
              description="Hecha de cartón reciclable, reduce el uso de plástico en tus compras."
            />
            <FeatureCard
              icon={<Recycle className="w-12 h-12 text-[#478535]" />}
              title="Reutilizable"
              description="Diseñada para ser usada una y otra vez, ahorrando recursos y dinero."
            />
            <FeatureCard
              icon={<ShoppingBag className="w-12 h-12 text-[#01481C]" />}
              title="Práctica"
              description="Fácil de plegar y guardar en tu auto para tus próximas compras."
            />
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-[#A5D6A7]" id="about">
        <div className="container mx-auto px-4">
          <h2
            className="text-3xl md:text-4xl font-bold text-center mb-12"
            style={{ fontFamily: "NEXA HEAVY, sans-serif" }}
          >
            Sobre EASY PACK
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <Leaf className="w-12 h-12 text-[#007036]" />
                </div>
                <CardTitle
                  className="text-2xl font-bold text-center"
                  style={{ fontFamily: "NEXA HEAVY, sans-serif" }}
                >
                  Visión
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Ser la empresa líder en el mercado de las soluciones
                  domésticas, reconocidos por su compromiso en la mejora del
                  medioambiente y el desarrollo de ideas transformadoras.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="bg-white">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <Target className="w-12 h-12 text-[#007036]" />
                </div>
                <CardTitle
                  className="text-2xl font-bold text-center"
                  style={{ fontFamily: "NEXA HEAVY, sans-serif" }}
                >
                  Misión
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Plantear soluciones a los problemas de compra cotidianos de
                  nuestros clientes buscando su plena satisfacción, colaborando
                  con el medioambiente y su cuidado proponiendo soluciones
                  prácticas y sencillas que nos ayuden a hacer la vida más
                  fácil, a través de una gestión basada en procesos sostenibles.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="bg-white">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <Heart className="w-12 h-12 text-[#007036]" />
                </div>
                <CardTitle
                  className="text-2xl font-bold text-center"
                  style={{ fontFamily: "NEXA HEAVY, sans-serif" }}
                >
                  Valores
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Conducta, Responsabilidad, Respeto, Calidad y Tradición son
                  los pilares que guían nuestras relaciones internas y externas,
                  asegurando la mejor calidad humana y el compromiso con nuestra
                  visión y misión.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20" id="how-it-works">
        <div className="container mx-auto px-4">
          <h2
            className="text-3xl md:text-4xl font-bold text-center mb-12"
            style={{ fontFamily: "NEXA HEAVY, sans-serif" }}
          >
            Cómo funciona EASY PACK
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StepCard
              number={1}
              description="Guarda Easy Pack plegada en tu auto"
              imageUrl="/EasyPack1.jpg"
            />
            <StepCard
              number={2}
              description="Despliégala al llegar al supermercado"
              imageUrl="/EasyPack8.jpg"
            />
            <StepCard
              number={3}
              description="Llénala con tus compras y llévatela a casa"
              imageUrl="/EasyPack10.jpg"
            />
          </div>
        </div>
      </section>

      {/* Impact Counter Section */}
      <ImpactCounter />

      {/* Testimonials Section */}
      <Testimonials />

      {/* FAQ Section */}
      <FAQ />

      {/* Blog Section */}
      <motion.section 
        className="py-20 bg-[#A5D6A7]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Blog y Noticias
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <BlogCard 
              title="Cómo reducir tu huella de carbono"
              excerpt="Descubre cómo pequeños cambios pueden tener un gran impacto..."
              date="2024-03-15"
              image="/EasyPack5.jpg"
            />
            <BlogCard 
              title="Innovaciones en empaques sostenibles"
              excerpt="Explora las últimas tendencias en empaques ecológicos..."
              date="2024-04-10"
              image="/EasyPack8.jpg"
            />
            <BlogCard 
              title="Beneficios de usar Easy Pack"
              excerpt="Conoce cómo Easy Pack puede facilitar tu vida diaria..."
              date="2024-05-05"
              image="/EasyPack11.jpg"
            />
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <section className="py-20 bg-[#007036] text-white" id="contact">
        <div className="container mx-auto px-4 text-center">
          <h2
            className="text-3xl md:text-4xl font-bold mb-2"
            style={{ fontFamily: "NEXA HEAVY, sans-serif" }}
          >
            EASY PACK
          </h2>
          <p
            className="text-xl mb-8"
            style={{ fontFamily: "NEXA EXTRA LIGHT, sans-serif" }}
          >
            soluciones domésticas
          </p>
          <p className="text-xl mb-8">¿Listo para hacer la diferencia?</p>
          <Button className="bg-white text-[#007036] hover:bg-[#C6AF87] hover:text-white">
            <Link
              href="https://wa.me/542236891567"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              Obtén tu EASY PACK ahora <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#007036] text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Contacto</h3>
              <p className="flex items-center mb-2">
                <Phone className="mr-2" size={18} />
                Pablo Inza: +54 223 689-1567
              </p>
              <p className="flex items-center">
                <Mail className="mr-2" size={18} />
                info@easypack.com.ar
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Ubicación</h3>
              <p className="flex items-center">
                <MapPin className="mr-2" size={18} />
                Mar del Plata, Argentina
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Síguenos</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-[#C6AF87]">
                  Facebook
                </a>
                <a href="#" className="hover:text-[#C6AF87]">
                  Instagram
                </a>
                <a href="#" className="hover:text-[#C6AF87]">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>&copy; 2024 EASY PACK. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

//eslint-disable-next-line
function FeatureCard({ icon, title, description }: any) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  );
}

//eslint-disable-next-line
function StepCard({ number, description, imageUrl }: any) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <div className="mb-4">
        <img
          src={imageUrl}
          alt={`Paso ${number}`}
          className="w-64 h-64 object-cover rounded-lg mx-auto"
        />
      </div>
      <div className="w-12 h-12 bg-[#007036] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
        {number}
      </div>
      <p>{description}</p>
    </div>
  );
}

const ImpactCounter = () => {
  return (
    <motion.section 
      className="py-20 bg-[#A5D6A7]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Nuestro Impacto Ambiental
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <CounterCard 
            title="Bolsas Plásticas Ahorradas"
            value={50000}
            icon={<Recycle className="w-12 h-12 text-[#007036]" />}
          />
          <CounterCard 
            title="Árboles Salvados"
            value={1000}
            icon={<Leaf className="w-12 h-12 text-[#007036]" />}
          />
          <CounterCard 
            title="Kg de CO2 Reducidos"
            value={25000}
            icon={<Cloud className="w-12 h-12 text-[#007036]" />}
          />
        </div>
      </div>
    </motion.section>
  );
};

const Testimonials = () => {
  return (
    <motion.section 
      className="py-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Lo que dicen nuestros clientes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <TestimonialCard 
            text="Easy Pack ha revolucionado la forma en que hago mis compras. ¡Es increíble!"
            author="María González"
            role="Cliente Frecuente"
          />
          <TestimonialCard 
            text="Excelente producto, muy resistente y amigable con el medio ambiente."
            author="Juan Pérez"
            role="Comerciante"
          />
          <TestimonialCard 
            text="La mejor inversión para reducir el uso de bolsas plásticas."
            author="Ana Martínez"
            role="Cliente"
          />
        </div>
      </div>
    </motion.section>
  );
};

const FAQ = () => {
  return (
    <section className="py-20 bg-[#A5D6A7]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Preguntas Frecuentes
        </h2>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>¿Cuál es la capacidad de Easy Pack?</AccordionTrigger>
            <AccordionContent>
              Easy Pack tiene capacidad para hasta 15kg de productos.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>¿Cómo se pliega la caja?</AccordionTrigger>
            <AccordionContent>
              La caja se pliega fácilmente siguiendo las líneas de doblez marcadas.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>¿Es resistente al agua?</AccordionTrigger>
            <AccordionContent>
              Easy Pack es resistente a salpicaduras, pero no es completamente impermeable.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>¿Cuánto tiempo dura una Easy Pack?</AccordionTrigger>
            <AccordionContent>
              Con el uso adecuado, una Easy Pack puede durar varios meses.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>¿Dónde puedo comprar una Easy Pack?</AccordionTrigger>
            <AccordionContent>
              Puedes adquirirla a través de nuestra página web o en tiendas seleccionadas.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

