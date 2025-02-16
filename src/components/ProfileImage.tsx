import { motion } from 'framer-motion';

interface ProfileImageProps {
  className?: string;
}

export default function ProfileImage({ className = '' }: ProfileImageProps) {
  const imageUrl = 'https://rintarasportfolio.s3.ap-northeast-1.amazonaws.com/S__67723271_0.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAUJ3VURG765EC2VIV%2F20250216%2Fap-northeast-1%2Fs3%2Faws4_request&X-Amz-Date=20250216T144632Z&X-Amz-Expires=300&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaDmFwLW5vcnRoZWFzdC0xIkYwRAIgJuGChgD60NzujiaV17Tx%2FdSbgSkmL%2BcpqQycAsvA%2F6ACIDnTiueS58%2F1ptWpBDqNAaNZ8QgmJeHTPNEBnsAdfdrlKuwCCGAQABoMMjk2MDYyNTg1Mjc5IgwPa5%2FHoA59E4rKOGUqyQIi2Hp6jHWWtSlpxL1OU0j8Y4jWZaN%2FAZdaqolKFwkA5rbJhkq9%2F1KR2ZldvtM%2BFruICFfp%2F%2B2lrE%2BErT4m32VDcvSnVsnlo%2BS%2BDy7PWnZl0xEpC92WUkrfyClbeIF7odWdvmm5ppV1UqWalzBR19gHYIkgObUHeEwDEIRgGiEH%2FgNerAvKB1x%2Bn0G64bG60JAb6agFjfUORd2xaCKOolaUxdWAN6XXuszTz5%2FxPnv4vxR4HDIcgbqc444Wfme%2BZW22a0YT6cMHq8HP8r8dSHD57uf%2FMyuxOMpolIbd8hOTvRXFLBjC39n1TPCZN2w8j3U5nOaOEQfV8VxqpERtZe%2Fc1sgGOu9aLiNpUR3s5YRexpFMZL2jWLrQ1s%2FPxH80%2FaPP2mvr1o%2FK%2B1nimfaRm23WSzZI%2BMr2hJFaSUOm6OKrYMP1kH88jwQjyDDp5se9Bjq0ApPx2VXxjjQ5XfdO056vJhK2TZlmirG5bmW%2FqOa3qcOEYMr96P3RJSpOwugjWx05xdw3V6rNJjZeOU%2BW8wPdOjVfKOz%2FrOAK1QGFKqYnCHSmt8NtfAVz6OZ2h7WO5dXx8BKUv79%2FV4YZR4dzMe%2FSve00EpoILnCT3eHcHrS2w%2FR0QAArMFw2WV8oix6XHdxdygjWHM32FcUfzoVi8iJt%2FgoHTnNJ4kqn%2B%2FXFM0rXUPd4VUeeJKP7q01NrwQEWXNoJN3lp2FUso%2F0VlNjoSO3z4vFpq6j7qONKW0W0ivdWiA5FWURRnZecCWb97jMLqsp1nu4kgqeqkpmWdogihyyrtNM4CzS4C6oyZ25XmrLiWKJP4zIrx59JTQZAi0iESfS3xy1TNeN9MprsH8gxwbrsYSCk32p&X-Amz-Signature=d2eb4408898a4d43967da630ed7b2ae7ddc74e3a4a128038398e92b48f838b8e&X-Amz-SignedHeaders=host&response-content-disposition=inline';

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