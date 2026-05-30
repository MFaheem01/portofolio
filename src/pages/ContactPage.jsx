import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import { toast } from 'sonner';
import Sidebar from '../components/Sidebar.jsx';
import ScrollDots from '../components/ScrollDots.jsx';
import SocialIcons from '../components/SocialIcons.jsx';
import Button from '../components/Button.jsx';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const handleChange = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    const handleSubmit = async e => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.message) {
            toast.error('Please fill in all required fields');
            return;
        }
        setIsSubmitting(true);
        setTimeout(() => {
            toast.success('Message sent successfully');
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: ''
            });
            setIsSubmitting(false);
        }, 1000);
    };
    const contactInfo = [{
        icon: Mail,
        label: 'Email',
        value: 'mf7227164@gmail.com',
        href: 'mailto:mf7227164@gmail.com'
    }, {
        icon: Phone,
        label: 'Phone',
        value: '+92 315 4937411',
        href: 'tel:+923154937411'
    }, {
        icon: MapPin,
        label: 'Location',
        value: 'Lahore, Pakistan',
        href: null
    }];
    return <>
        <Helmet>
            <title>Contact - Muhammad Faheem</title>
            <meta name="description" content="Get in touch with Muhammad Faheem for full stack web development and SEO projects. Contact via email, phone, or the contact form." />
        </Helmet>

        <div className="flex min-h-screen bg-background">
            <Sidebar />

            <main className="flex-1 overflow-y-auto">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <motion.div initial={{
                        opacity: 0,
                        y: 20
                    }} animate={{
                        opacity: 1,
                        y: 0
                    }} className="mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6" style={{
                            letterSpacing: '-0.02em'
                        }}>
                            Contact
                        </h1>
                        <p className="text-lg leading-relaxed text-muted-foreground max-w-3xl">
                            Have a project in mind or just want to say hello? I'd love to hear from you. Please fill out the form below or contact us through one of the methods listed.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                        <motion.div initial={{
                            opacity: 0,
                            x: -30
                        }} animate={{
                            opacity: 1,
                            x: 0
                        }} transition={{
                            delay: 0.2
                        }}>
                            <h2 className="text-2xl font-semibold text-foreground mb-8">Get in touch</h2>

                            <div className="space-y-6 mb-12">
                                {contactInfo.map((info, index) => <motion.div key={info.label} initial={{
                                    opacity: 0,
                                    y: 20
                                }} animate={{
                                    opacity: 1,
                                    y: 0
                                }} transition={{
                                    delay: 0.3 + index * 0.1
                                }} className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                                        <info.icon className="text-primary" size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                                        {info.href ? <a href={info.href} className="text-foreground font-medium hover:text-primary transition-colors duration-200">
                                            {info.value}
                                        </a> : <p className="text-foreground font-medium">{info.value}</p>}
                                    </div>
                                </motion.div>)}
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold text-foreground mb-4">Follow me</h3>
                                <SocialIcons className="flex-row wrap" />
                            </div>
                        </motion.div>

                        <motion.div initial={{
                            opacity: 0,
                            x: 30
                        }} animate={{
                            opacity: 1,
                            x: 0
                        }} transition={{
                            delay: 0.2
                        }}>
                            <h2 className="text-2xl font-semibold text-foreground mb-8">Send a message</h2>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <Label htmlFor="name" className="text-foreground">Name *</Label>
                                    <Input id="name" name="name" type="text" value={formData.name} onChange={handleChange} required className="mt-2 text-foreground" placeholder="Your name" />
                                </div>

                                <div>
                                    <Label htmlFor="email" className="text-foreground">Email *</Label>
                                    <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required className="mt-2 text-foreground" placeholder="your.email@example.com" />
                                </div>

                                <div>
                                    <Label htmlFor="subject" className="text-foreground">Subject</Label>
                                    <Input id="subject" name="subject" type="text" value={formData.subject} onChange={handleChange} className="mt-2 text-foreground" placeholder="Project inquiry" />
                                </div>

                                <div>
                                    <Label htmlFor="message" className="text-foreground">Message *</Label>
                                    <Textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={6} className="mt-2 text-foreground" placeholder="Tell me about your project..." />
                                </div>

                                <Button type="submit" disabled={isSubmitting} className="w-full">
                                    {isSubmitting ? 'Sending...' : 'Send message'}
                                </Button>
                            </form>
                        </motion.div>
                    </div>

                    <motion.div initial={{
                        opacity: 0,
                        y: 20
                    }} whileInView={{
                        opacity: 1,
                        y: 0
                    }} viewport={{
                        once: true
                    }} className="text-center py-12 border-t border-border">
                        <p className="text-3xl font-semibold text-primary">Thanks for your patience!</p>
                        <p className="text-muted-foreground mt-2">I'll get back to you as soon as possible.</p>
                    </motion.div>
                </div>
            </main>

            <ScrollDots />
        </div>
    </>;
};
export default ContactPage;