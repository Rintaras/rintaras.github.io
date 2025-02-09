import { motion } from 'framer-motion';

interface ProfileImageProps {
  className?: string;
}

export default function ProfileImage({ className = '' }: ProfileImageProps) {
  const imageUrl = 'https://zqkoofqnnzmsurdeugnt.supabase.co/storage/v1/object/public/profile-images//S__67723271_0.jpg';

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
          />
        </motion.div>
      </div>
    </div>
  );
}