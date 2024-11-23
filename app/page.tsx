"use client";

import * as React from "react";
import Link from "next/link";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Heart,
  Leaf,
  Mail,
  MapPin,
  Menu,
  Phone,
  Recycle,
  ShoppingBag,
  Target,
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

const Navbar = () => {
  const NavItems = () => (
    <>
      <Link href="#features" className="text-white hover:text-[#C6AF87]">
        Características
      </Link>
      <Link href="#about" className="text-white hover:text-[#C6AF87]">
        Sobre Nosotros
      </Link>
      <Link href="#how-it-works" className="text-white hover:text-[#C6AF87]">
        Cómo funciona
      </Link>
      <Link href="#contact" className="text-white hover:text-[#C6AF87]">
        Contacto
      </Link>
    </>
  );

  return (
    <nav className="bg-[#007036] p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white">
          <span
            className="text-2xl font-bold"
            style={{ fontFamily: "NEXA HEAVY, sans-serif" }}
          >
            EASY PACK
          </span>
          <br />
          <span
            className="text-sm"
            style={{ fontFamily: "NEXA EXTRA LIGHT, sans-serif" }}
          >
            soluciones domésticas
          </span>
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

export default function EasyPackLanding() {
  return (
    <div className="bg-white text-gray-900">
      <Navbar />
      {/* Hero Section */}
      <section className="bg-[#007036] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1
              className="text-4xl md:text-6xl font-bold mb-2"
              style={{ fontFamily: "NEXA HEAVY, sans-serif" }}
            >
              EASY PACK
            </h1>
            <p
              className="text-xl mb-8"
              style={{ fontFamily: "NEXA EXTRA LIGHT, sans-serif" }}
            >
              soluciones domésticas
            </p>
            <p className="text-xl md:text-2xl mb-8">
              La solución sustentable para tus compras en el supermercado
            </p>
            <Button className="bg-white text-[#007036] hover:bg-[#C6AF87] hover:text-white">
              Descubre más <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

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
      <section className="py-20 bg-[#01481C]" id="about">
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
              imageUrl="/caja4.webp"
            />
            <StepCard
              number={2}
              description="Despliégala al llegar al supermercado"
              imageUrl="/caja3.webp"
            />
            <StepCard
              number={3}
              description="Llénala con tus compras y llévatela a casa"
              imageUrl="/CajaEasypack.webp"
            />
          </div>
        </div>
      </section>

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
      <footer className="bg-[#01481C] text-white py-8">
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
function FeatureCard({ icon, title, description }: any) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function StepCard({ number, description, imageUrl }: any) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <div className="mb-4">
        <img
          src={imageUrl}
          alt={`Paso ${number}`}
          className="w-full h-auto rounded-lg"
        />
      </div>
      <div className="w-12 h-12 bg-[#007036] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
        {number}
      </div>
      <p>{description}</p>
    </div>
  );
}
