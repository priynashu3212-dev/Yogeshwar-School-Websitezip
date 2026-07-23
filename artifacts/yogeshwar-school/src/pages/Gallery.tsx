import React from 'react';
import Layout from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { Image as ImageIcon } from 'lucide-react';

import imgBuilding from '@assets/image_1784784644604.png';
import imgDance from '@assets/image_1784784658855.png';
import imgMerit from '@assets/image_1784784669429.png';
import imgLibrary from '@assets/image_1784784678674.png';
import imgMusicRoom from '@assets/image_1784784692373.png';
import imgAdd1 from '@assets/image_1784784701488.png';
import imgAdd2 from '@assets/image_1784784713330.png';
import imgAdd3 from '@assets/image_1784784741738.png';
import imgAdd4 from '@assets/image_1784784761550.png';
import imgAdd5 from '@assets/Screenshot_(1)_1784784855115.png';

const galleryImages = [
  { src: imgBuilding, alt: 'School Building Exterior', colSpan: 'md:col-span-2', rowSpan: 'md:row-span-2' },
  { src: imgDance, alt: 'Students doing cultural dance performance', colSpan: 'md:col-span-1', rowSpan: 'md:row-span-1' },
  { src: imgLibrary, alt: 'Library with students studying', colSpan: 'md:col-span-1', rowSpan: 'md:row-span-1' },
  { src: imgMusicRoom, alt: 'Dance and music room', colSpan: 'md:col-span-1', rowSpan: 'md:row-span-1' },
  { src: imgAdd1, alt: 'School Event Activity', colSpan: 'md:col-span-1', rowSpan: 'md:row-span-1' },
  { src: imgAdd2, alt: 'Campus View', colSpan: 'md:col-span-1', rowSpan: 'md:row-span-2' },
  { src: imgAdd3, alt: 'Student Assembly', colSpan: 'md:col-span-1', rowSpan: 'md:row-span-1' },
  { src: imgAdd4, alt: 'Classroom Environment', colSpan: 'md:col-span-1', rowSpan: 'md:row-span-1' },
  { src: imgAdd5, alt: 'School Details', colSpan: 'md:col-span-2', rowSpan: 'md:row-span-1' },
  { src: imgMerit, alt: 'Merit List Poster', colSpan: 'md:col-span-1', rowSpan: 'md:row-span-1' },
];

export default function Gallery() {
  return (
    <Layout>
      <section className="bg-primary text-primary-foreground py-16 text-center border-b-[6px] border-secondary">
        <div className="container mx-auto px-4">
          <ImageIcon className="w-12 h-12 text-secondary mx-auto mb-4" />
          <motion.h1 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif font-bold mb-4"
          >
            Photo Gallery
          </motion.h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            A glimpse into the vibrant life, events, and facilities at Yogeshwar Sr. Sec. School.
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[250px]">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (index % 4) * 0.1 }}
                className={`group relative rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all ${image.colSpan} ${image.rowSpan} bg-muted`}
              >
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <p className="text-white font-medium p-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {image.alt}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
