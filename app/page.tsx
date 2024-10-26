import * as React from "react";
import Link from "next/link";
import { ArrowRight, Leaf, Menu, Recycle, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Navbar = () => {
  const NavItems = () => (
    <>
      <Link href="#features" className="text-white hover:text-gray-200">
        Características
      </Link>
      <Link href="#how-it-works" className="text-white hover:text-gray-200">
        Cómo funciona
      </Link>
      <Link href="#contact" className="text-white hover:text-gray-200">
        Contacto
      </Link>
    </>
  );

  return (
    <nav className="bg-[#006e32] p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-2xl font-bold">
          Easy Pack
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
          <SheetContent side="right" className="w-[240px] bg-[#006e32]">
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
      <section className="bg-[#006e32] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Easy Pack</h1>
            <p className="text-xl md:text-2xl mb-8">
              La solución sustentable para tus compras en el supermercado
            </p>
            <Button className="bg-white text-[#006e32] hover:bg-gray-100">
              Descubre más <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20" id="features">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            ¿Por qué elegir Easy Pack?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Leaf className="w-12 h-12 text-[#006e32]" />}
              title="Sustentable"
              description="Hecha de cartón reciclable, reduce el uso de plástico en tus compras."
            />
            <FeatureCard
              icon={<Recycle className="w-12 h-12 text-[#006e32]" />}
              title="Reutilizable"
              description="Diseñada para ser usada una y otra vez, ahorrando recursos y dinero."
            />
            <FeatureCard
              icon={<ShoppingBag className="w-12 h-12 text-[#006e32]" />}
              title="Práctica"
              description="Fácil de plegar y guardar en tu auto para tus próximas compras."
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-gray-100 py-20" id="how-it-works">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Cómo funciona Easy Pack
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StepCard
              number={1}
              description="Guarda Easy Pack plegada en tu auto"
            />
            <StepCard
              number={2}
              description="Despliégala al llegar al supermercado"
            />
            <StepCard
              number={3}
              description="Llénala con tus compras y llévatela a casa"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20" id="contact">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Listo para hacer la diferencia?
          </h2>
          <p className="text-xl mb-8">
            Únete a la revolución sustentable con Easy Pack
          </p>
          <Button className="bg-[#006e32] text-white hover:bg-[#005a2a]">
            Obtén tu Easy Pack ahora <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>
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

function StepCard({ number, description }: any) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <div className="w-12 h-12 bg-[#006e32] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
        {number}
      </div>
      <p>{description}</p>
    </div>
  );
}
