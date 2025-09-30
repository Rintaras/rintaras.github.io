import { motion } from 'framer-motion';
import { useState } from 'react';

interface ProfileImageProps {
  className?: string;
}

export default function ProfileImage({ className = '' }: ProfileImageProps) {
  const [imageError, setImageError] = useState(false);

  // デフォルトのプロフィール画像URL（GitHubのデフォルトアバターを使用）
  const imageUrl = imageError
    ? 'https://github.com/github.png'
    : 'https://rintarasportfolio.s3.ap-northeast-1.amazonaws.com/S__67723271_0.jpg';

  return (
    <div className={`relative ${className}`}>
      <div className="relative w-48 h-48 mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-indigo-500 rounded-full animate-pulse blur-xl opacity-25"></div>
        <motion.div
          className="relative w-full h-full rounded-full overflow-hidden border-4 border-gray-800 shadow-xl"
          whileHover={{ scale: 1.05, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <img
            src={imageUrl}
            alt="Profile"
            className="w-full h-full object-cover"
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