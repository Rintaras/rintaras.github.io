import { motion } from 'framer-motion';
import { useState } from 'react';
import { PROFILE_IMAGE } from '../data';

interface ProfileImageProps {
  className?: string;
}

export default function ProfileImage({ className = '' }: ProfileImageProps) {
  const [imageError, setImageError] = useState(false);

  const imageUrl = imageError ? 'https://github.com/github.png' : PROFILE_IMAGE;

  return (
    <div className={`relative ${className}`}>
      <div className="relative w-48 h-48 mx-auto">
        <div className="absolute inset-0 bg-white rounded-full animate-pulse blur-2xl opacity-[0.03]"></div>
        <motion.div
          className="relative w-full h-full rounded-full overflow-hidden border border-white/20 shadow-2xl"
          whileHover={{ scale: 1.05, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <img
            src={imageUrl}
            alt="Profile"
            className="w-full h-full object-cover object-[35%_center]"
            onError={() => {
              console.warn(`Failed to load profile image: ${imageUrl}`);
              setImageError(true);
            }}
          />
        </motion.div>
      </div>
    </div>
  );
}