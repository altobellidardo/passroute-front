"use client"

import { useState } from "react"
import { Calendar } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

function Button({ children, className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

function Input({ type, placeholder, className, ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`bg-[#1a1a23] border-purple-500/20 text-white ${className}`}
      {...props}
    />
  )
}

function Textarea({ placeholder, className, ...props }: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      placeholder={placeholder}
      className={`bg-[#1a1a23] border-purple-500/20 text-white ${className}`}
      {...props}
    />
  )
}

function Card({ children, className }: React.PropsWithChildren<{ className?: string }>) {
  return <div className={`bg-[#12121a] rounded-lg shadow-lg ${className}`}>{children}</div>
}

function CardHeader({ children, className }: React.PropsWithChildren<{ className?: string }>) {
  return <div className={`bg-[#1a1a23] rounded-t-lg p-6 ${className}`}>{children}</div>
}

function CardTitle({ children, className }: React.PropsWithChildren<{ className?: string }>) {
  return <h3 className={`text-2xl font-bold text-white ${className}`}>{children}</h3>
}

function CardDescription({ children, className }: React.PropsWithChildren<{ className?: string }>) {
  return <p className={`text-purple-400 ${className}`}>{children}</p>
}

function CardContent({ children, className }: React.PropsWithChildren<{ className?: string }>) {
  return <div className={`p-6 ${className}`}>{children}</div>
}

export default function CreateEventForm() {
  const [banner, setBanner] = useState<string | null>(null)

  const handleBannerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      setBanner(URL.createObjectURL(file))
    }
  }

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white p-6">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-white">Crear Nuevo Evento</h1>
          <p className="text-purple-400">Completa los detalles de tu evento</p>
        </div>

        <Card className="border-purple-500/20 bg-[#12121a]">
          <CardHeader>
            <CardTitle className="text-white">Información del Evento</CardTitle>
            <CardDescription className="text-purple-400">Proporciona los detalles básicos de tu evento</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              {/* Banner Upload */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-purple-400">Banner del Evento</label>
                <div className="relative">
                  {banner ? (
                    <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={banner || "/placeholder.svg"}
                        alt="Event banner preview"
                        className="object-cover w-full h-full"
                      />
                      <Button
                        g-variant="secondary"
                        className="absolute bottom-2 right-2 bg-purple-600 hover:bg-purple-700"
                        onClick={() => setBanner(null)}
                      >
                        Cambiar
                      </Button>
                    </div>
                  ) : (
                    <div className="border-2 border-dashed border-purple-500/50 rounded-lg p-8">
                      <div className="text-center">
                        <Input
                          type="file"
                          accept="image/*"
                          onChange={handleBannerChange}
                          className="hidden"
                          id="banner-upload"
                        />
                        <label
                          htmlFor="banner-upload"
                          className="cursor-pointer inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-purple-400 bg-purple-600/20 rounded-md hover:bg-purple-600/30 transition-colors"
                        >
                          Subir Banner
                        </label>
                        <p className="mt-2 text-sm text-purple-400">Recomendado: 1920x1080px</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Event Name */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-purple-400">Nombre del Evento</label>
                <Input
                  type="text"
                  placeholder="ej. Summer Electronic Festival"
                  className="bg-[#1a1a23] border-purple-500/20 text-white"
                />
              </div>

              {/* Date and Time */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-purple-400">Fecha</label>
                  <div className="relative">
                    <Input type="date" className="bg-[#1a1a23] border-purple-500/20 text-white" />
                    <Calendar className="absolute right-3 top-2.5 h-5 w-5 text-purple-400" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-purple-400">Hora</label>
                  <Input type="time" className="bg-[#1a1a23] border-purple-500/20 text-white" />
                </div>
              </div>

              {/* Capacity and Attendance */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-purple-400">Capacidad Total</label>
                  <Input
                    type="number"
                    min="1"
                    placeholder="ej. 1000"
                    className="bg-[#1a1a23] border-purple-500/20 text-white"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-purple-400">Asistencia Mínima</label>
                  <Input
                    type="number"
                    min="1"
                    placeholder="ej. 500"
                    className="bg-[#1a1a23] border-purple-500/20 text-white"
                  />
                </div>
              </div>

              {/* DJs */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-purple-400">DJs Principal y Soporte</label>
                <Textarea
                  placeholder="ej. Main: DJ Shadow&#10;Soporte: DJ Logic, DJ Krush"
                  className="bg-[#1a1a23] border-purple-500/20 text-white min-h-[100px]"
                />
              </div>

              {/* Event Description */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-purple-400">Descripción del Evento</label>
                <Textarea
                  placeholder="Describe tu evento..."
                  className="bg-[#1a1a23] border-purple-500/20 text-white min-h-[150px]"
                />
              </div>

              {/* Additional Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-purple-400">Categoría</label>
                  <Input
                    type="text"
                    placeholder="ej. Electrónica, House, Techno"
                    className="bg-[#1a1a23] border-purple-500/20 text-white"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-purple-400">Ubicación</label>
                  <Input
                    type="text"
                    placeholder="ej. Club XYZ"
                    className="bg-[#1a1a23] border-purple-500/20 text-white"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                Crear Evento
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
