import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search } from 'lucide-react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, Float, ContactShadows, Text } from '@react-three/drei';
import * as THREE from 'three';
import { MENU_CATEGORIES } from '../data';

// Interactive 3D Model Component for Siew Mai
function DimSumScene() {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.15;
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={2} rotationIntensity={0.1} floatIntensity={0.3}>
        {/* Bamboo Steamer Basket */}
        <group position={[0, -0.6, 0]}>
          {/* Base */}
          <mesh position={[0, -0.1, 0]}>
            <cylinderGeometry args={[2.2, 2.2, 0.2, 48]} />
            <meshStandardMaterial color="#d4b886" roughness={0.9} />
          </mesh>
          {/* Rim */}
          <mesh position={[0, 0.4, 0]}>
            <cylinderGeometry args={[2.3, 2.3, 1, 48, 1, true]} />
            <meshStandardMaterial color="#c2a26c" roughness={0.9} side={THREE.DoubleSide} />
          </mesh>
          {/* Inner liner (white cloth/paper) */}
          <mesh position={[0, 0.01, 0]}>
            <cylinderGeometry args={[2.1, 2.1, 0.05, 48]} />
            <meshStandardMaterial color="#ffffff" roughness={1} />
          </mesh>
        </group>

        {/* 3x Siew Mai */}
        {[
          [-0.6, 0, -0.6],
          [0.8, 0, -0.2],
          [-0.2, 0, 0.8]
        ].map((pos, idx) => (
          <group key={idx} position={new THREE.Vector3(...pos)} rotation={[0, Math.random() * Math.PI, 0]}>
            {/* Wrapper (Yellowish) */}
            <mesh position={[0, 0, 0]}>
              <cylinderGeometry args={[0.5, 0.4, 0.8, 16]} />
              <meshStandardMaterial color="#fcd34d" roughness={0.6} />
            </mesh>
            {/* Pork/Shrimp Filling (Pinkish/White) */}
            <mesh position={[0, 0.4, 0]}>
              <sphereGeometry args={[0.48, 16, 16, 0, Math.PI * 2, 0, Math.PI / 2]} />
              <meshStandardMaterial color="#fbcfe8" roughness={0.8} />
            </mesh>
            {/* Roe Garnish (Orange) */}
            <mesh position={[0, 0.85, 0]}>
              <sphereGeometry args={[0.1, 16, 16]} />
              <meshStandardMaterial color="#f97316" roughness={0.4} />
            </mesh>
          </group>
        ))}
        
        {/* 3D Label overlay */}
        <Text
          position={[0, 1.8, 0]}
          fontSize={0.4}
          color="#fcd34d"
          anchorX="center"
          anchorY="middle"
          outlineWidth={0.02}
          outlineColor="#144d42"
          font="https://fonts.gstatic.com/s/spacegrotesk/v15/V8mDoQDjQSkGpb402FFAQ8xW03EOXw.woff2"
        >
          Signature Siew Mai
        </Text>
      </Float>
    </group>
  );
}

export default function MenuVirtualBook() {
  const [activeCategory, setActiveCategory] = useState(MENU_CATEGORIES[0].id);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCategories = MENU_CATEGORIES.map(cat => ({
    ...cat,
    dishes: cat.dishes.filter(dish => 
      dish.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      dish.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(cat => cat.dishes.length > 0);

  const activeData = filteredCategories.find(c => c.id === activeCategory) || filteredCategories[0];

  return (
    <section id="menu" className="py-32 bg-cream-50 relative overflow-hidden text-jade-950">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
          >
            Our Full Menu
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-16 h-1 bg-gold-500 mx-auto rounded mb-10" 
          />
          
          <div className="max-w-md mx-auto relative">
            <input
              type="text"
              placeholder="Search dishes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-jade-900/10 rounded-full px-6 py-4 pl-14 text-jade-950 focus:outline-none focus:border-gold-500 shadow-sm"
            />
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-jade-900/40 w-5 h-5" />
          </div>
        </div>

        {/* Swipeable Tabs for Mobile */}
        <div className="flex overflow-x-auto pb-4 mb-12 -mx-4 px-4 sm:mx-0 sm:px-0 hide-scrollbar space-x-2">
          {MENU_CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`whitespace-nowrap px-8 py-3 rounded-full font-display font-bold text-xs tracking-wider transition-colors cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-jade-950 text-gold-400 shadow-lg shadow-jade-950/20'
                  : 'bg-white text-jade-900/60 hover:bg-jade-50 border border-jade-900/5'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          
          {/* 3D Showcase Area */}
          <div className="lg:col-span-2 h-[400px] lg:h-[600px] bg-jade-900 rounded-3xl overflow-hidden shadow-2xl relative border border-gold-500/10">
            <div className="absolute inset-0 z-10 pointer-events-none p-6 flex flex-col justify-between">
              <div>
                <div className="font-display text-gold-400 font-bold text-[10px] tracking-widest uppercase mb-1">Interactive 3D Preview</div>
                <div className="font-serif text-cream-50 text-2xl font-bold">Drag to Rotate</div>
              </div>
            </div>
            
            <Canvas camera={{ position: [0, 2, 5], fov: 50 }}>
              <ambientLight intensity={0.5} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
              
              <DimSumScene />
              
              <ContactShadows position={[0, -1.5, 0]} opacity={0.5} scale={10} blur={2} far={4} />
              <Environment preset="city" />
              <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1} />
            </Canvas>
          </div>

          {/* Menu Grid */}
          <div className="lg:col-span-3 bg-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-jade-900/5 min-h-[600px]">
            <AnimatePresence mode="wait">
              {activeData ? (
                <motion.div
                  key={activeData.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10"
                >
                  {activeData.dishes.map((dish) => (
                    <div key={dish.id} className="group relative">
                      <div className="flex space-x-4">
                        <div className="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0 bg-cream-100 shadow-sm relative">
                           <img src={dish.image} alt={dish.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                           <div className="absolute inset-0 bg-jade-950/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex justify-between items-start mb-1">
                            <h4 className="font-serif font-bold text-lg text-jade-950 group-hover:text-gold-600 transition-colors">{dish.name}</h4>
                            <span className="font-mono text-gold-600 font-bold whitespace-nowrap ml-4">RM {dish.price.toFixed(2)}</span>
                          </div>
                          <p className="font-sans text-sm text-jade-900/60 mb-3">{dish.description}</p>
                          
                          {dish.isHalal && (
                            <span className="inline-flex items-center px-2 py-0.5 bg-green-50 text-green-700 text-[10px] font-bold tracking-widest uppercase rounded border border-green-200">
                              Halal
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </motion.div>
              ) : (
                <div className="text-center py-32 text-jade-900/50 font-sans">
                  No dishes found matching "{searchQuery}"
                </div>
              )}
            </AnimatePresence>
          </div>
          
        </div>
      </div>
    </section>
  );
}
