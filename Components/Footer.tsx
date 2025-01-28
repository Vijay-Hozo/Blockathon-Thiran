"use client"
// import { MapPin } from "lucide-react";
// import { Card, CardContent } from "@/components/ui/card";

export default function Footer() {
  return (
    <section id="contact" className="bg-gray-900 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        <div>
          <h2 className="text-xl font-bold mb-4">Blockathon</h2>
          <p className="mb-2">An Blockchain and Cybersecuity Hackathon organized as part of Thiran 2025</p>
          <p className="mb-2">Inter-college techno-cultural-sports fest</p>
          <p>Sri Eshwar College of Engineering</p>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-4">Contact Us</h2>
          <div className="mb-2">
            <p className="font-semibold">Faculty Coordinator</p>
            <p>Mr. U.PRAKASH, AP/IT SECE: +9942932159</p>
          </div>
          <div className="mb-2">
            <p className="font-semibold">Student Coordinator</p>
            <p>MR. AKSHAY RAM: +91 63742 95841</p>
            <p>A.VIJAY: +91 88387 25310</p>
          </div>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-white hover:text-gray-400">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-4">Location</h2>
          <div className="bg-gray-800">
            <div className="flex items-center p-2">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3596.8117979180533!2d77.06021780098219!3d10.826680637430053!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba84ee37569ae7f%3A0x3c5b1824b6e79192!2sSri%20Eshwar%20College%20of%20Engineering%2C%20Coimbatore!5e1!3m2!1sen!2sin!4v1738041684033!5m2!1sen!2sin"
                //  width="600" height="450"
                width="100%"
                height="150"
                style={{ border: 0 }}
                // allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Location Map"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-8 text-sm">
        For more details of our institution please visit <a href="https://www.sece.ac.in" className="text-blue-400 hover:underline">www.sece.ac.in</a>
      </div>
    </section>
  );
}
