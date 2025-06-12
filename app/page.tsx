"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  Phone,
  MapPin,
  Clock,
  Star,
  AlertTriangle,
  Shield,
  Users,
  Award,
  DollarSign,
  Sun,
  Stethoscope,
  Zap,
  CheckCircle,
  MessageCircle,
  Calendar,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function DermatologiaLP() {
  return (
    <div className="min-h-screen" style={{ background: "linear-gradient(to bottom, #8dbf4410, white)" }}>
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Image
              src="/atendja.png"
              alt="Atend Já Logo"
              width={120}
              height={40}
              className="h-14 w-auto"
            />
          </div>
          <div className="hidden md:flex items-center space-x-6 text-sm">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" style={{ color: "#008B47" }} />
              <span style={{ color: "#3B3F3D" }}>(75) 3026-8494</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4" style={{ color: "#008B47" }} />
              <span style={{ color: "#3B3F3D" }}>Seg-Sáb: 7h às 19h</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="text-white py-16 md:py-14 relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, #008B47 0%, #2EA55C 50%, #8dbf44 100%)`,
        }}
      >
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to right, rgba(0,139,71,0.2), rgba(46,165,92,0.2))" }}
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">Sua Pele Merece Cuidado Especializado!</h1>
              <p className="text-xl text-green-100">
                Na Atend Já, você encontra consultas dermatológicas acessíveis, tratamentos estéticos e exames para
                câncer de pele – sem plano de saúde e com agendamento rápido.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="https://wa.me/557530268494" target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    className="bg-white font-bold shadow-lg hover:bg-green-50"
                    style={{ color: "#008B47" }}
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    AGENDAR CONSULTA
                  </Button>
                </Link>
            
              </div>
            </div>
            <div className="relative justify-self-end">
              <Image
                src="/medicobanner.png?height=500&width=500"
                alt="Dermatologista examinando pele com equipamento especializado"
                width={500}
                height={500}
                className="rounded-3xl"
              />
             
            </div>
          </div>
        </div>
      </section>

      {/* Principais Tratamentos */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#3b3f3d" }}>
              Problemas de Pele? Temos a Solução!
            </h2>
            <p className="text-xl text-gray-600">Tratamentos especializados com dermatologistas experientes</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card
              className="hover:shadow-xl transition-all duration-300 border-2 hover:border-opacity-50 flex flex-col justify-between h-full"
              style={{
                borderColor: "#8dbf44",
                background: "linear-gradient(135deg, white 0%, #8dbf4410 100%)",
              }}
            >
              <CardHeader className="text-center">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md"
                  style={{ background: "linear-gradient(135deg, #8dbf44, #2EA55C)" }}
                >
                  <Stethoscope className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-lg">Consulta Dermatológica Completa</CardTitle>
                <CardDescription className="min-h-[40px]">Avaliação de manchas, acne e doenças de pele</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Link href="https://wa.me/557530268494" target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    className="bg-white font-bold shadow-lg hover:bg-green-50"
                    style={{ color: "#008B47" }}
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    AGENDAR CONSULTA
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card
              className="hover:shadow-xl transition-all duration-300 border-2 hover:border-opacity-50 flex flex-col justify-between h-full"
              style={{
                borderColor: "#8dbf44",
                background: "linear-gradient(135deg, white 0%, #8dbf4410 100%)",
              }}
            >
              <CardHeader className="text-center">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md"
                  style={{ background: "linear-gradient(135deg, #8dbf44, #2EA55C)" }}
                >
                  <Shield className="w-8 h-8 text-white"/>
                </div>
                <CardTitle className="text-lg">Exame de Dermatoscopia</CardTitle>
                <CardDescription className="min-h-[40px]">Detecção precoce de câncer de pele</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Link href="https://wa.me/557530268494" target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    className="bg-white font-bold shadow-lg hover:bg-green-50"
                    style={{ color: "#008B47" }}
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    AGENDAR CONSULTA
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card
              className="hover:shadow-xl transition-all duration-300 border-2 hover:border-opacity-50 flex flex-col justify-between h-full"
              style={{
                borderColor: "#8dbf44",
                background: "linear-gradient(135deg, white 0%, #8dbf4410 100%)",
              }}
            >
              <CardHeader className="text-center">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md"
                  style={{ background: "linear-gradient(135deg, #8dbf44, #2EA55C)" }}
                >
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-lg">Limpeza de Pele Profissional</CardTitle>
                <CardDescription className="min-h-[40px]">Tratamento para acne e cravos</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Link href="https://wa.me/557530268494" target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    className="bg-white font-bold shadow-lg hover:bg-green-50"
                    style={{ color: "#008B47" }}
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    AGENDAR CONSULTA
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card
              className="hover:shadow-xl transition-all duration-300 border-2 hover:border-opacity-50 flex flex-col justify-between h-full"
              style={{
                borderColor: "#8dbf44",
                background: "linear-gradient(135deg, white 0%, #8dbf4410 100%)",
              }}
            >
              <CardHeader className="text-center">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md"
                  style={{ background: "linear-gradient(135deg, #8dbf44, #2EA55C)" }}
                >
                  <CheckCircle className="w-8 h-8 text-white"  />
                </div>
                <CardTitle className="text-lg">Remoção de Lesões</CardTitle>
                <CardDescription className="min-h-[40px]">Verrugas, sinais e queratoses</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Link href="https://wa.me/557530268494" target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    className="bg-white font-bold shadow-lg hover:bg-green-50"
                    style={{ color: "#008B47" }}
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    AGENDAR CONSULTA
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          <div className="bg-[#8DBF44]/10 border-l-4 border-[#008B47] p-6 rounded-lg">
            <div className="flex items-center">
              <AlertTriangle className="w-6 h-6 mr-3" style={{ color: "#008B47" }} />
              <div>
                <h3 className="text-lg font-semibold" style={{ color: "#3B3F3D" }}>
                  ⚠️ Mancha nova ou ferida que não cicatriza? Agende hoje mesmo!
                </h3>
                <p className="mt-1" style={{ color: "#3B3F3D" }}>A detecção precoce pode salvar vidas. Não deixe para depois!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pacote Promocional */}
     

      {/* Sinais de Alerta */}
      <section className="py-16" style={{ backgroundColor: "#8DBF44" + "10" }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#3b3f3d" }}>
              Quando Procurar um Dermatologista?
            </h2>
            <p className="text-xl" style={{ color: "#3b3f3d" }}>Não ignore os sinais que sua pele está dando</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm">
                <AlertTriangle className="w-6 h-6 mt-1 flex-shrink-0" style={{ color: "#008B47" }} />
                <div>
                  <h3 className="font-semibold" style={{ color: "#3b3f3d" }}>Manchas que coçam, doem ou crescem</h3>
                  <p className="text-sm" style={{ color: "#3b3f3d" }}>Mudanças em pintas ou manchas podem indicar problemas sérios</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm">
                <AlertTriangle className="w-6 h-6 mt-1 flex-shrink-0" style={{ color: "#008B47" }} />
                <div>
                  <h3 className="font-semibold" style={{ color: "#3b3f3d" }}>Espinhas persistentes ou cicatrizes de acne</h3>
                  <p className="text-sm" style={{ color: "#3b3f3d" }}>Acne severa requer tratamento especializado</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm">
                <AlertTriangle className="w-6 h-6 mt-1 flex-shrink-0" style={{ color: "#008B47" }} />
                <div>
                  <h3 className="font-semibold" style={{ color: "#3b3f3d" }}>Queda de cabelo excessiva</h3>
                  <p className="text-sm" style={{ color: "#3b3f3d" }}>Pode indicar problemas hormonais ou dermatológicos</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm">
                <AlertTriangle className="w-6 h-6 mt-1 flex-shrink-0" style={{ color: "#008B47" }} />
                <div>
                  <h3 className="font-semibold" style={{ color: "#3b3f3d" }}>Unhas fracas ou com alterações</h3>
                  <p className="text-sm" style={{ color: "#3b3f3d" }}>Mudanças nas unhas podem revelar problemas de saúde</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link href="https://wa.me/557530268494" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="text-white font-bold" style={{ backgroundColor: "#008B47" }}>
                <AlertTriangle className="w-5 h-5 mr-2" />
                AGENDAR CONSULTA
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#3b3f3d" }}>
              Por Que Escolher a Atend Já para Sua Pele?
            </h2>
            <p className="text-xl" style={{ color: "#3b3f3d" }}>Cuidado especializado com preços acessíveis</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg"
                style={{ background: "linear-gradient(135deg, #8dbf44, #2EA55C)" }}
              >
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: "#3b3f3d" }}>
                Dermatologistas Experientes
              </h3>
              <p className="text-gray-600">
                Diagnóstico preciso e tratamento personalizado com mais de 10 anos de experiência
              </p>
            </div>

            <div className="text-center">
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg"
                style={{ background: "linear-gradient(135deg, #8dbf44, #2EA55C)" }}
              >
                <Zap className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: "#3b3f3d" }}>
                Procedimentos no Mesmo Dia
              </h3>
              <p className="text-gray-600">Remoção de lesões e aplicação de ácidos sem necessidade de retorno</p>
            </div>

            <div className="text-center">
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg"
                style={{ background: "linear-gradient(135deg, #8dbf44, #2EA55C)" }}
              >
                <DollarSign className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: "#3b3f3d" }}>
                Preços Acessíveis
              </h3>
              <p className="text-gray-600">Consulta com preço acessível, sem plano de saúde</p>
            </div>

            <div className="text-center">
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg"
                style={{ background: "linear-gradient(135deg, #8dbf44, #2EA55C)" }}
              >
                <Sun className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: "#3b3f3d" }}>
                Foco em Prevenção
              </h3>
              <p className="text-gray-600">Orientação completa sobre proteção solar e cuidados diários para sua pele</p>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-16" style={{ backgroundColor: "#8DBF44" + "10" }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#3b3f3d" }}>
              O que dizem nossos pacientes:
            </h2>
            <div className="flex items-center justify-center space-x-4">
              <Badge className="text-white" style={{ backgroundColor: "#008B47" }}>
                <Award className="w-4 h-4 mr-1" />
                10+ anos de experiência
              </Badge>
              <Badge className="text-white" style={{ backgroundColor: "#2EA55C" }}>
                <Star className="w-4 h-4 mr-1" />
                99% de satisfação
              </Badge>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5" style={{ color: "#008B47" }} fill="currentColor" />
                  ))}
                </div>
                <p className="mb-4" style={{ color: "#3b3f3d" }}>
                  "Minha acne melhorou 90% em 2 meses! O tratamento foi personalizado e os resultados superaram minhas
                  expectativas. Recomendo demais!"
                </p>
                <div className="flex items-center">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center mr-3"
                    style={{ backgroundColor: "#008B47" }}
                  >
                    <span className="text-white font-semibold">M</span>
                  </div>
                  <div>
                    <p className="font-semibold" style={{ color: "#3b3f3d" }}>Maria Silva</p>
                    <p className="text-sm" style={{ color: "#3b3f3d" }}>Tratamento de Acne</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5" style={{ color: "#008B47" }} fill="currentColor" />
                  ))}
                </div>
                <p className="mb-4" style={{ color: "#3b3f3d" }}>
                  "Descobri um melanoma cedo graças ao exame de dermatoscopia aqui. A equipe foi muito atenciosa e o
                  diagnóstico precoce salvou minha vida!"
                </p>
                <div className="flex items-center">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center mr-3"
                    style={{ backgroundColor: "#2EA55C" }}
                  >
                    <span className="text-white font-semibold">J</span>
                  </div>
                  <div>
                    <p className="font-semibold" style={{ color: "#3b3f3d" }}>João Santos</p>
                    <p className="text-sm" style={{ color: "#3b3f3d" }}>Exame Preventivo</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5" style={{ color: "#008B47" }} fill="currentColor" />
                  ))}
                </div>
                <p className="mb-4" style={{ color: "#3b3f3d" }}>
                  "Atendimento excelente e preços justos. Fiz a remoção de várias verrugas no mesmo dia. Equipe muito
                  profissional e cuidadosa!"
                </p>
                <div className="flex items-center">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center mr-3"
                    style={{ backgroundColor: "#8DBF44" }}
                  >
                    <span className="text-white font-semibold">A</span>
                  </div>
                  <div>
                    <p className="font-semibold" style={{ color: "#3b3f3d" }}>Ana Costa</p>
                    <p className="text-sm" style={{ color: "#3b3f3d" }}>Remoção de Lesões</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-12">
            <Link href="https://wa.me/557530268494" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="font-bold shadow-lg hover:opacity-90"
                style={{ backgroundColor: "#2EA55C", color: "white" }}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                AGENDAR CONSULTA
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#3b3f3d" }}>
              Tire Suas Dúvidas Sobre Saúde da Pele
            </h2>
            <p className="text-xl" style={{ color: "#3b3f3d" }}>Respostas para as perguntas mais frequentes</p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left">Preciso de encaminhamento para consulta?</AccordionTrigger>
                <AccordionContent>
                  Não! Você pode agendar diretamente conosco, sem necessidade de encaminhamento médico ou plano de
                  saúde. Basta ligar ou enviar mensagem no WhatsApp.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left">A remoção de sinais dói?</AccordionTrigger>
                <AccordionContent>
                  Usamos anestesia local para garantir seu máximo conforto durante o procedimento. A maioria dos
                  pacientes relata apenas um leve desconforto.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left">Como preparar a pele antes da limpeza?</AccordionTrigger>
                <AccordionContent>
                  Evite exposição solar e esfoliação 3 dias antes do procedimento. Não use produtos com ácidos 48h
                  antes. Nossa equipe fornecerá orientações detalhadas no agendamento.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  Quanto tempo demora uma consulta dermatológica?
                </AccordionTrigger>
                <AccordionContent>
                  Uma consulta completa dura entre 30 a 45 minutos, incluindo anamnese, exame físico e orientações.
                  Exames complementares podem ser realizados no mesmo dia.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left">Vocês atendem emergências dermatológicas?</AccordionTrigger>
                <AccordionContent>
                  Sim! Para casos urgentes como reações alérgicas severas, feridas que não cicatrizam ou mudanças
                  súbitas em pintas, oferecemos atendimento prioritário no mesmo dia.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div className="text-center mt-12">
            <Link href="https://wa.me/557530268494" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="text-white font-semibold hover:opacity-90"
                style={{ backgroundColor: "#008B47" }}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                AGENDAR CONSULTA
              </Button>
            </Link>
          </div>
        </div>
      </section>

     

      {/* Footer */}
      <footer style={{ backgroundColor: "#3b3f3d" }} className="text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Image
                  src="/atendjabranco.png"
                  alt="Atend Já Logo"
                  width={120}
                  height={60}
                  className="h-20 w-auto"
                />
              </div>
              <p className="text-white/70 mb-4">
                Cuidado dermatológico especializado com preços acessíveis. Sua pele em boas mãos.
              </p>
              
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contato</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Phone className="w-5 h-5" style={{ color: "#8DBF44" }} />
                  <span>(75) 3026-8494</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5" style={{ color: "#8DBF44" }} />
                  <span>Rua Cícero Dantas, 221, Ponto Central</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5" style={{ color: "#8DBF44" }} />
                  <span>Segunda a Sábado: 7h às 19h</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Desenvolvido por</h3>
              <div className="flex items-center">
                <Image
                  src="/logo02.png"
                  alt="HW Logo"
                  width={120}
                  height={60}
                  className="h-14 w-auto"
                />
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/50">
            <p>&copy; {new Date().getFullYear()} Atend Já - Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
