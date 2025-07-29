import React, { useState } from 'react'
import { Mail, Instagram, Phone, Send } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('Failed to send message. Please try again.');
      }
    } catch (error) {
      setSubmitStatus('Error sending message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#9EC5AB] text-[#011502] py-16 px-4 lg:px-24">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-2">Contact</h2>
        <p className="text-[#01200F]">Talk to Me</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* Contact Info Card */}
        <div className="space-y-6">
          <Card className="bg-[#104F55] border-[#32746D] shadow-xl">
            <CardHeader>
              <CardTitle className="text-xl text-[#9EC5AB]">Let's Connect</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-[#9EC5AB]">
              <div className="flex items-center gap-4">
                <Mail className="text-[#32746D]" />
                <div>
                  <p className="font-medium text-lg">ashron@email.com</p>
                  <p className="text-[#9EC5AB]/70 text-sm">Email</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="text-[#32746D]" />
                <div>
                  <p className="font-medium text-lg">+91-8770582558</p>
                  <p className="text-[#9EC5AB]/70 text-sm">WhatsApp</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Instagram className="text-[#32746D]" />
                <div>
                  <p className="font-medium text-lg">@asnronart</p>
                  <p className="text-[#9EC5AB]/70 text-sm">Instagram</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Form Card */}
        <Card className="bg-[#01200F] border-[#32746D] shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-[#9EC5AB]">Write Me Your Project</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <Input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Insert your name"
                required
                className="bg-[#104F55] border-[#32746D] text-[#9EC5AB] placeholder:text-[#9EC5AB]/60"
              />
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Insert your email"
                required
                className="bg-[#104F55] border-[#32746D] text-[#9EC5AB] placeholder:text-[#9EC5AB]/60"
              />
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Tell me about your project"
                rows={5}
                required
                className="bg-[#104F55] border-[#32746D] text-[#9EC5AB] placeholder:text-[#9EC5AB]/60"
              />
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="flex gap-2 bg-[#32746D] hover:bg-[#104F55] text-[#9EC5AB] transition-all duration-300 shadow-lg"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <Send size={18} />
              </Button>
              {submitStatus && (
                <p className={`text-sm ${submitStatus.includes('successfully') ? 'text-[#32746D]' : 'text-red-500'}`}>
                  {submitStatus}
                </p>
              )}
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Contact