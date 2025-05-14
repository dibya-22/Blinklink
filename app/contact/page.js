"use client";
import React, { useState, useEffect } from 'react';

const Contact = () => {
    const [form, setform] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form)
            });
            
            const result = await response.json();
            alert(result.message);
            setform({ name: "", email: "", subject: "", message: "" });
        } catch (error) {
            console.error(error);
            alert("Failed to send message. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    }

    // Add auto-resize effect for textarea
    useEffect(() => {
        const textarea = document.getElementById('message');
        const adjustHeight = () => {
            textarea.style.height = 'inherit';
            const computed = window.getComputedStyle(textarea);
            const height = textarea.scrollHeight + 
                parseInt(computed.paddingTop) + 
                parseInt(computed.paddingBottom);
            
            textarea.style.height = `${Math.min(height, 240)}px`;
        };

        textarea?.addEventListener('input', adjustHeight);
        return () => textarea?.removeEventListener('input', adjustHeight);
    }, []);

    return (
        <div className='min-h-[calc(100vh-9rem)] w-[95vw] sm:w-[80vw] md:w-[70vw] lg:w-[60vw] 
            mx-auto px-4 flex flex-col items-center justify-center'>
                <h1 className='font-bold text-2xl sm:text-3xl md:text-4xl text-white mb-4 text-center'>
                    Get in Touch
                </h1>
                <div className='w-full bg-[#435d6e]/90 backdrop-blur-sm rounded-2xl shadow-xl 
                p-4 sm:p-6 md:p-8 transition-all duration-300 hover:shadow-2xl
                transform hover:-translate-y-1'>
                
                <form onSubmit={handleSubmit} 
                    className='flex flex-col gap-3 sm:gap-4 w-full items-center'>
                    <div className='flex flex-col gap-2 w-full max-w-xl'>
                        <label htmlFor="name" 
                            className='text-base sm:text-lg font-semibold text-white/90 ml-3'>
                            Name
                        </label>
                        <input 
                            type="text" 
                            required
                            onChange={handleChange}
                            value={form.name}
                            name='name'
                            id='name'
                            placeholder='Enter your name'
                            className='bg-white/90 text-black rounded-xl w-full px-5 py-3 
                                outline-none focus:ring-2 focus:ring-blue-500/50
                                transition-all duration-300 hover:scale-[1.02] focus:scale-[1.02]
                                transform-gpu shadow-md hover:shadow-lg'
                        />
                    </div>

                    <div className='flex flex-col gap-2 w-full max-w-xl'>
                        <label htmlFor="email" 
                            className='text-base sm:text-lg font-semibold text-white/90 ml-3'>
                            Email
                        </label>
                        <input 
                            type="email" 
                            required
                            onChange={handleChange}
                            value={form.email}
                            name='email'
                            id='email'
                            placeholder='Enter your email'
                            className='bg-white/90 text-black rounded-xl w-full px-5 py-3 
                                outline-none focus:ring-2 focus:ring-blue-500/50
                                transition-all duration-300 hover:scale-[1.02] focus:scale-[1.02]
                                transform-gpu shadow-md hover:shadow-lg'
                        />
                    </div>

                    <div className='flex flex-col gap-2 w-full max-w-xl'>
                        <label htmlFor="subject" 
                            className='text-base sm:text-lg font-semibold text-white/90 ml-3'>
                            Subject
                        </label>
                        <input 
                            type="text" 
                            required
                            onChange={handleChange}
                            value={form.subject}
                            name='subject'
                            id='subject'
                            placeholder='Enter subject'
                            className='bg-white/90 text-black rounded-xl w-full px-5 py-3 
                                outline-none focus:ring-2 focus:ring-blue-500/50
                                transition-all duration-300 hover:scale-[1.02] focus:scale-[1.02]
                                transform-gpu shadow-md hover:shadow-lg'
                        />
                    </div>

                    <div className='flex flex-col gap-2 w-full max-w-xl'>
                        <label htmlFor="message" 
                            className='text-base sm:text-lg font-semibold text-white/90 ml-3'>
                            Message
                        </label>
                        <textarea 
                            required
                            onChange={handleChange}
                            value={form.message}
                            name='message'
                            id='message'
                            rows={4}
                            placeholder='Type your message here...'
                            className='bg-white/90 text-black rounded-xl w-full px-5 py-3 
                                outline-none focus:ring-2 focus:ring-blue-500/50
                                transition-all duration-300 hover:scale-[1.02] focus:scale-[1.02]
                                transform-gpu shadow-md hover:shadow-lg resize-none
                                h-[100px] overflow-y-auto'
                        />
                    </div>

                    <button 
                        type="submit" 
                        disabled={isSubmitting}
                        className='w-full sm:w-2/3 md:w-1/2 bg-blue-600 hover:bg-blue-700 
                            px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl transition-all duration-300'>
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Contact
