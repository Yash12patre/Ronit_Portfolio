import React from 'react'
import { Mail, Instagram, Phone, Send } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const Contact = () => {
  return (
    <div className="w-full min-h-screen bg-white text-black py-16 px-4 lg:px-24">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-2">Contact</h2>
        <p className="text-gray-600">Talk to Me</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* Contact Info Card */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Let's Connect</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center gap-4">
                <Mail className="text-blue-600" />
                <div>
                  <p className="font-medium text-lg">ashron@email.com</p>
                  <p className="text-gray-500 text-sm">Email</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="text-green-600" />
                <div>
                  <p className="font-medium text-lg">+91-8770582558</p>
                  <p className="text-gray-500 text-sm">WhatsApp</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Instagram className="text-pink-500" />
                <div>
                  <p className="font-medium text-lg">@asnronart</p>
                  <p className="text-gray-500 text-sm">Instagram</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Form Card */}
        <Card className="bg-gray-50 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold">Write Me Your Project</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <Input
                type="text"
                placeholder="Insert your name"
              />
              <Input
                type="email"
                placeholder="Insert your email"
              />
              <Textarea
                placeholder="Tell me about your project"
                rows={5}
              />
              <Button type="submit" className="flex gap-2">
                Send Message
                <Send size={18} />
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Contact