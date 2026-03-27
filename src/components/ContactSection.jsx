import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter, X } from "lucide-react";

export const ContactSection = () => {
   return (
      <section
      id="contact"
      className="py-24 px-4 relative bg-secondary/300"
      >
         <div
         className="container mx-auto max-w-5xl"
         >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
               Get In <span className="text-primary"> Touch </span>
            </h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
               Whether you have a question, want to discuss a project, or just want to say hello, feel free to reach out.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
               <div className="space-y-8">
                  <h3 className="text-2xl font-semibold mb-6">
                     Contact Information
                  </h3>

                  <div className="space-y-6 justify-center">

                     {/* Email */}
                     <div className="flex items-start space-x-4">
                        <div className="p-3 rounded-full bg-primary/10">
                           <Mail className="h-6 w-6 text-primary" />{" "}
                        </div>
                        <div>
                           <h4 className="font-medium"> Email</h4>
                           <a 
                           href="mailto:ershubhcsofficial@gmail.com"
                           className="text-muted-foreground hover:text-primary transition-colors"
                           >
                              ershubhcsofficial@gmail.com
                           </a>
                        </div>                       
                     </div>

                     {/* Phone */}
                     <div className="flex items-start space-x-4">
                        <div className="p-3 rounded-full bg-primary/10">
                           <Phone className="h-6 w-6 text-primary" />{" "}
                        </div>
                        <div>
                           <h4 className="font-medium"> Phone</h4>
                           <a
                              href="tel:+917645860144"
                              className="text-muted-foreground hover:text-primary transition-colors"
                           >
                              +91 76458 60144
                           </a>
                        </div>
                     </div>

                     {/* Address */}
                     <div className="flex items-start space-x-4">
                        <div className="p-3 rounded-full bg-primary/10">
                           <MapPin className="h-6 w-6 text-primary" />{" "}
                        </div>
                        <div>
                           <h4 className="font-medium"> Location</h4>
                           <a className="text-muted-foreground hover:text-primary transition-colors">
                              Patna, Bihar, India
                           </a>
                        </div>
                     </div>
                  </div>

                  {/* Social Links */}
                  <div className="pt-8">
                     <h4 className="font-medium mb-4">Connect With Me</h4>
                     <div className="flex space-x-4 justify-center">
                        <a href="https://www.linkedin.com/in/shubham1811/" target="_blank" rel="noopener noreferrer"> 
                           <Linkedin />
                        </a>
                        <a href="https://x.com/shubhamraj1811" target="_blank" rel="noopener noreferrer">
                           <X />
                        </a>
                        <a href="https://www.instagram.com/shubh.m18/?hl=en" target="_blank" rel="noopener noreferrer">
                           <Instagram />
                        </a>

                        {/* <a href="#">
                           <Facebook />
                        </a> */}
                     </div>
                  </div>
               </div>

               {/* Contact Form */}
               <div className="bg-card p-8 rounded-lg shadow-xs">
                  <h3 className="text-2xl font-semibold mb-6">
                     Send Me A Message
                  </h3>
                  
                  <form action="#" className="space-y-6">
                     <div>
                        <label htmlFor="name" className="block text-sm font-medium "> Your Name </label>
                        <input
                           type="text"
                           id="name"
                           name="name"
                           required
                           className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                           placeholder="Shubham Raj..."
                        />
                     </div>
                  </form>

               </div>

            </div>
         </div>
      </section>
   );
};
