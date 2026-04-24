'use client';

import Link from 'next/link';
import { useState } from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import ServiceCard from '@/components/service-card';
import { Mail, Phone, MapPin, CheckCircle, FlaskConical, Beaker, Syringe, TestTube } from 'lucide-react';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const services = [
    {
      title: 'Clinical Research Operations (CRO)',
      description:
        'Comprehensive clinical trial management and oversight designed to ensure patient safety, regulatory compliance, and research integrity.',
      icon: <FlaskConical />,
      details: [
        'Clinical trial design and management',
        'Patient safety monitoring and reporting',
        'Regulatory compliance and documentation',
        'Data collection and quality assurance',
        'Protocol development and optimization',
      ],
    },
    {
      title: 'Research & Development',
      description:
        'Advanced drug development and pharmaceutical formulation improvement to accelerate your path to market.',
      icon: <Beaker />,
      details: [
        'Drug discovery and development',
        'Formulation optimization',
        'Process improvement',
        'Stability testing and validation',
        'Bioavailability enhancement',
      ],
    },
    {
      title: 'Injectable Formulation Development',
      description:
        'Specialized expertise in sterile injectable formulations with rigorous testing and stability protocols.',
      icon: <Syringe />,
      details: [
        'Sterile injectable formulation design',
        'Lyophilization and reconstitution studies',
        'Stability testing and shelf-life determination',
        'Particulate and pyrogen testing',
        'Container closure system analysis',
      ],
    },
    {
      title: 'Bio-Study Data Research',
      description:
        'Comprehensive biological and clinical data research to support evidence-based decision making.',
      icon: <TestTube />,
      details: [
        'Biological study design and execution',
        'Clinical data collection and analysis',
        'Literature review and meta-analysis',
        'Biostatistical analysis',
        'Regulatory submission support',
      ],
    },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log('Form submitted:', formData);

    setSubmitted(true);
    setLoading(false);

    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />

      {/* ===== HERO SECTION ===== */}
      <section id="hero" className="bg-gradient-to-r from-orange-50 to-blue-50 py-20 md:py-32 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight text-balance">
            Advancing Healthcare Innovation with <span className="text-orange-500">Precision and Purpose</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed text-pretty">
            Trisolpharma provides comprehensive scientific support to pharmaceutical companies across Clinical Research Operations, Drug Development, Injectable Formulation Engineering, and Advanced Bio-Study Research. We combine expertise, innovation, and dedication to accelerate your path to market.
          </p>

          <a
            href="#services"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-200 text-lg shadow-lg hover:shadow-xl cursor-pointer"
          >
            Learn More About Our Expertise
          </a>
        </div>
      </section>

      {/* ===== WHY CHOOSE US SECTION ===== */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">Why Choose Trisolpharma?</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-orange-500 text-5xl mb-4">🔬</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Scientific Excellence</h3>
              <p className="text-gray-700">
                Our team of experts brings decades of combined experience in pharmaceutical research and development.
              </p>
            </div>

            <div className="text-center">
              <div className="text-blue-600 text-5xl mb-4">⚙️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Technical Innovation</h3>
              <p className="text-gray-700">
                We leverage cutting-edge technologies and methodologies to deliver superior formulations and research results.
              </p>
            </div>

            <div className="text-center">
              <div className="text-orange-500 text-5xl mb-4">✓</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Regulatory Compliance</h3>
              <p className="text-gray-700">
                Every solution meets stringent regulatory standards and industry best practices for your peace of mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES SECTION ===== */}
      <section id="services" className="py-16 md:py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-orange-500 text-center">Our Services</h1>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">Comprehensive pharmaceutical solutions tailored to your needs</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                details={service.details}
              />
            ))}
          </div>

          {/* Why Our Services */}
          <div className="bg-gray-50 py-16 px-4 rounded-lg">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Why Choose Our Services?</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-orange-500 mb-3">Expertise</h3>
                <p className="text-gray-700 leading-relaxed">
                  Our team combines decades of experience in pharmaceutical research, formulation science, and regulatory affairs.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-blue-600 mb-3">Quality Assurance</h3>
                <p className="text-gray-700 leading-relaxed">
                  We maintain rigorous quality standards and adhere to GMP, GCP, and other regulatory requirements throughout all projects.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-orange-500 mb-3">Timely Delivery</h3>
                <p className="text-gray-700 leading-relaxed">
                  We understand the importance of timelines in pharmaceutical development and consistently deliver results on schedule.
                </p>
              </div>
            </div>
          </div>

          {/* Integrated Approach */}
          <div className="max-w-3xl mx-auto bg-orange-50 p-8 rounded-lg border-l-4 border-orange-500 mt-16">
            <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">Our Integrated Approach</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              At Trisolpharma, we don&apos;t just provide individual services—we offer an integrated approach that brings all components of pharmaceutical development together seamlessly.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Whether you need comprehensive CRO support, innovative R&D solutions, specialized injectable formulation expertise, or rigorous bio-study research, our team works collaboratively to ensure every aspect of your project meets the highest standards of scientific excellence and regulatory compliance.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Partner with Trisolpharma and experience the difference that true scientific excellence and dedication can make in your pharmaceutical journey.
            </p>
          </div>
        </div>
      </section>

      {/* ===== ABOUT SECTION ===== */}
      <section id="about" className="py-16 md:py-24 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-orange-500 text-center">About Trisolpharma</h1>
          <p className="text-xl text-gray-600 text-center mb-16">Leading pharmaceutical innovation through science and dedication</p>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 text-orange-500">Our Mission</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                To provide comprehensive, innovative, and reliable scientific support that empowers pharmaceutical companies to accelerate drug development, ensure regulatory compliance, and ultimately deliver life-changing medicines to patients worldwide.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 text-orange-500">Our Vision</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                To be the trusted partner of choice for pharmaceutical companies seeking excellence in research operations, formulation development, and clinical data integrity. We envision a future where scientific precision and innovation lead to breakthrough therapies that improve global health.
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Our Core Values</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-orange-500">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Science</h3>
                <p className="text-gray-700 leading-relaxed">
                  We are driven by rigorous scientific methodology, evidence-based decision making, and a commitment to advancing our understanding of pharmaceutical formulations and clinical research processes.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-blue-600">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Technology</h3>
                <p className="text-gray-700 leading-relaxed">
                  We leverage cutting-edge analytical tools, advanced formulation techniques, and modern data management systems to deliver superior results and maintain competitive advantages for our partners.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-orange-500">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Innovation</h3>
                <p className="text-gray-700 leading-relaxed">
                  We continuously pursue novel solutions, adopt emerging methodologies, and challenge conventional approaches to deliver breakthrough results and unlock new possibilities in pharmaceutical development.
                </p>
              </div>
            </div>
          </div>

          {/* History */}
          <div className="bg-white p-8 rounded-lg shadow-md mb-16">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Our History</h2>

            <div className="max-w-3xl mx-auto space-y-6 text-gray-700 leading-relaxed">
              <p className="text-lg">
                Trisolpharma was founded with a singular vision: to provide pharmaceutical companies with the scientific expertise and technical precision needed to accelerate drug development and achieve market success. Our journey began with a small team of passionate scientists and researchers who recognized a critical gap in the pharmaceutical industry.
              </p>

              <p className="text-lg">
                Over the years, we have grown into a trusted partner for leading pharmaceutical companies across the globe. Our success is built on three pillars: unwavering commitment to scientific excellence, continuous investment in technology and talent, and a deep understanding of our clients' needs and challenges.
              </p>

              <p className="text-lg">
                Today, Trisolpharma stands as a beacon of innovation in pharmaceutical research and development. We have successfully supported hundreds of drug development programs, contributed to numerous regulatory approvals, and helped bring life-changing medicines to patients worldwide. Yet, we remain grounded in our founding principles and committed to driving the industry forward through groundbreaking research and exceptional service.
              </p>

              <p className="text-lg font-semibold text-orange-500 text-center">
                Our success is your success. Together, we transform pharmaceutical challenges into opportunities for innovation and growth.
              </p>
            </div>
          </div>

          {/* Key Achievements */}
          <div className="bg-orange-50 p-8 rounded-lg">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Why Companies Trust Us</h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-4xl font-bold text-orange-500 mb-2">500+</div>
                <p className="text-gray-700">Projects Completed</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-orange-500 mb-2">100+</div>
                <p className="text-gray-700">Regulatory Approvals</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-orange-500 mb-2">50+</div>
                <p className="text-gray-700">Team Experts</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-orange-500 mb-2">99%</div>
                <p className="text-gray-700">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="bg-orange-500 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Partner with Trisolpharma?</h2>
          <p className="text-lg mb-8 opacity-90">
            Let&apos;s discuss how we can accelerate your pharmaceutical innovations and achieve your research goals.
          </p>
          <a
            href="#contact"
            className="inline-block bg-white text-orange-500 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-colors duration-200 text-lg shadow-lg cursor-pointer"
          >
            Get in Touch Today
          </a>
        </div>
      </section>

      {/* ===== CONTACT SECTION ===== */}
      <section id="contact" className="py-16 md:py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-orange-500 text-center">Contact Us</h1>
          <p className="text-xl text-gray-600 text-center mb-16">We&apos;d love to hear from you. Get in touch with our team today.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Location */}
            <div className="bg-orange-50 p-8 rounded-lg border-l-4 border-orange-500 text-center">
              <div className="text-orange-500 text-4xl mb-4 flex justify-center">
                <MapPin size={40} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Location</h3>
              <p className="text-gray-700">123 Pharma Street, Medical City, MC 12345</p>
            </div>

            {/* Email */}
            <div className="bg-orange-50 p-8 rounded-lg border-l-4 border-blue-600 text-center">
              <div className="text-blue-600 text-4xl mb-4 flex justify-center">
                <Mail size={40} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
              <a href="mailto:info@trisolpharma.com" className="text-orange-500 hover:text-orange-600 font-medium">
                info@trisolpharma.com
              </a>
            </div>

            {/* Phone */}
            <div className="bg-orange-50 p-8 rounded-lg border-l-4 border-orange-500 text-center">
              <div className="text-orange-500 text-4xl mb-4 flex justify-center">
                <Phone size={40} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Phone</h3>
              <a href="tel:+1234567890" className="text-orange-500 hover:text-orange-600 font-medium">
                +1 (234) 567-890
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto bg-gray-50 p-8 rounded-lg shadow-md">
            {submitted ? (
              <div className="text-center py-12">
                <CheckCircle size={64} className="text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
                <p className="text-gray-700 text-lg">
                  Your message has been received. We&apos;ll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-900 font-semibold mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white text-gray-900"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-900 font-semibold mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white text-gray-900"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-gray-900 font-semibold mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white text-gray-900"
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-900 font-semibold mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white text-gray-900"
                    placeholder="Please share your inquiry or questions..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-gray-400 text-white font-bold py-3 rounded-lg transition-colors duration-200 text-lg"
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
