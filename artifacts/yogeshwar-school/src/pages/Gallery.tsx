import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { motion, AnimatePresence } from 'framer-motion';
import { Image as ImageIcon, X, ChevronRight, ZoomIn } from 'lucide-react';
import { Link } from 'wouter';

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
import imgPhysicsLab from '@assets/image_1784871279419.png';
import imgChemLab from '@assets/image_1784871296800.png';
import imgBioLab from '@assets/image_1784871308616.png';
import imgLibraryReal from '@assets/image_1784871323347.png';

const galleryImages = [
  { id: 1,  src: imgBuilding,    alt: 'School Building Exterior',             category: 'Campus'    },
  { id: 2,  src: imgDance,       alt: 'Students cultural dance performance',  category: 'Events'    },
  { id: 3,  src: imgPhysicsLab,  alt: 'Physics Lab — practical session',      category: 'Labs'      },
  { id: 4,  src: imgChemLab,     alt: 'Chemistry Lab — experiment in progress', category: 'Labs'   },
  { id: 5,  src: imgBioLab,      alt: 'Biology Lab — anatomical models',      category: 'Labs'      },
  { id: 6,  src: imgLibraryReal, alt: 'Library — students reading',           category: 'Academics' },
  { id: 7,  src: imgLibrary,     alt: 'Library interior',                     category: 'Academics' },
  { id: 8,  src: imgMusicRoom,   alt: 'Dance and music room',                 category: 'Events'    },
  { id: 9,  src: imgAdd1,        alt: 'School Event Activity',                category: 'Events'    },
  { id: 10, src: imgAdd2,        alt: 'Campus View',                          category: 'Campus'    },
  { id: 11, src: imgAdd3,        alt: 'Student Assembly',                     category: 'Campus'    },
  { id: 12, src: imgAdd4,        alt: 'Classroom Environment',                category: 'Academics' },
  { id: 13, src: imgAdd5,        alt: 'School Details',                       category: 'Campus'    },
  { id: 14, src: imgMerit,       alt: 'Merit List Poster',                    category: 'Academics' },
];

const categories = ['All', 'Campus', 'Labs', 'Events', 'Academics'];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  const filteredImages = activeCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <Layout>
      {/* 1. Page Hero */}
      <section className="bg-primary pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 noise-overlay opacity-20" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 text-secondary font-bold uppercase tracking-widest text-xs mb-6">
            <Link href="/" className="text-white/60 hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3 text-white/40" />
            <span>Gallery</span>
          </div>
          <br/>
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 mb-6 backdrop-blur-md">
            <ImageIcon className="w-8 h-8 text-secondary" />
          </div>
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif font-extrabold text-white mb-6 tracking-tight"
          >
            Life at Yogeshwar
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto font-medium"
          >
            A visual journey through our campus, events, and academic life.
          </motion.p>
        </div>
      </section>

      {/* 2 & 3. Filter Tabs & Masonry Grid */}
      <section className="py-16 bg-background min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-widest transition-all ${
                  activeCategory === cat 
                    ? 'bg-primary text-white shadow-lg scale-105' 
                    : 'bg-muted text-foreground/70 hover:bg-muted/80 hover:text-primary'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* CSS Columns Masonry */}
          <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            <AnimatePresence>
              {filteredImages.map((image) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={image.id}
                  className="break-inside-avoid relative group rounded-2xl overflow-hidden bg-muted cursor-pointer shadow-sm hover:shadow-xl transition-all"
                  onClick={() => setSelectedImage(image)}
                >
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                    loading="lazy"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-primary/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <ZoomIn className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-300 delay-100" />
                  </div>
                  
                  {/* Instagram-style Caption Strip */}
                  <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="inline-block px-2 py-1 bg-secondary text-white text-[10px] font-bold uppercase tracking-wider rounded mb-2">
                      {image.category}
                    </span>
                    <p className="text-white font-medium text-sm line-clamp-2">
                      {image.alt}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          
          {filteredImages.length === 0 && (
            <div className="text-center py-20 text-foreground/50 font-bold">
              No images found in this category.
            </div>
          )}

        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6" />
            </button>
            
            <motion.div 
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="max-w-6xl max-h-full flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedImage.src} 
                alt={selectedImage.alt}
                className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
              />
              <div className="mt-6 text-center">
                <span className="inline-block px-3 py-1 bg-secondary text-white text-xs font-bold uppercase tracking-wider rounded-full mb-3">
                  {selectedImage.category}
                </span>
                <p className="text-white/90 text-lg font-medium">{selectedImage.alt}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
}
