import React from "react";
import { motion } from "framer-motion";
import image1 from "../assets/Aonla-new-mobile.jpg";
import image2 from "../assets/Bagging Plant under construction.jpg";
import image3 from "../assets/DSC_0212.jpg";
import image4 from "../assets/img1.jpg";
import image5 from "../assets/img2.jpg";
import image6 from "../assets/img3.jpg";
import image7 from "../assets/img4.jpg";
import image8 from "../assets/img5.jpg";
import image9 from "../assets/img6.jpg";
import image10 from "../assets/img7.jpg";
import image11 from "../assets/leaves.jpg";
import image12 from "../assets/Newly constructed Technical Buildin.jpg";
import image13 from "../assets/Proposed Site for Aonla -  Inspection with OECF Team.jpg";

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
  image13,
];

export const Gallery = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-100 via-green-50 to-green-100">
      {/* Header */}
      <header className="py-12 text-center">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-green-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Photo Gallery
        </motion.h1>
        <motion.p
          className="text-xl text-gray-700 mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Explore our collection of moments and milestones.
        </motion.p>
      </header>

      {/* Gallery Section */}
      <main className="px-6 md:px-12">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.2 },
              },
            }}
          >
            {images.map((image, index) => (
              <motion.div
                key={index}
                className="relative overflow-hidden rounded-xl shadow-lg border border-green-200 bg-white hover:shadow-2xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <img
                  src={image}
                  alt={`Gallery Image ${index + 1}`}
                  className="w-full h-60 object-cover"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Gallery;
