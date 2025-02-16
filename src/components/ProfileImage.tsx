import { motion } from 'framer-motion';

interface ProfileImageProps {
  className?: string;
}

export default function ProfileImage({ className = '' }: ProfileImageProps) {
  const imageUrl = 'https://rintarasporhttps://rintarasportfolio.s3.ap-northeast-1.amazonaws.com/S__67723271_0.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAUJ3VURG77KBTHQGY%2F20250216%2Fap-northeast-1%2Fs3%2Faws4_request&X-Amz-Date=20250216T152034Z&X-Amz-Expires=300&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaDmFwLW5vcnRoZWFzdC0xIkcwRQIhAP8BYZEtr7sjJDYgkiQZVPaC2xF2wExrWUX9TmApc7eiAiATZscEi7I83Dz3ssN%2FHS%2B7w2IftND7l2%2FrmOzh21DymCrsAghgEAAaDDI5NjA2MjU4NTI3OSIMVGlyegANDy%2F86QvsKskCVeOtSIkoiZt99CsJQeB5ZOtILL9coNT%2FZf8kt8h7TFLACc%2Bv%2BgJpKgvm09yA4cNZv7pRbEyk13CTcjk4DAdac%2Fq6KSDQeK4TaIWCXG8HnCRY%2Fu5c1e0%2BLYxB8khghIOruCUu4zc3uIvP4NxWGAWKMlk3GDD41w%2B%2FxRnqURcfBG4kG2J2k9r787u29UtVUJIePOwz0khrRitCbB4n98CiPi1GOuYvBGb84OGlOtjlqbs5Kyb4BGS%2F3h%2BQQdj7Ot8c6Zye4BR2kGESD84jUYW3Xhwx7PueS3PDvE288VQxEVmAGum2BHCxWhwokgVsSJxhhvIuCPhqXj3XVhHTWLlv9sslN%2F97WEl4jwIqB%2FpHIbf7Pe%2BYiB6lTtWu3L0kUJa2bdHhnG2QGUh%2Bbj%2FkBeGWC2jTHpDHeu9I2MKEPmNcWHhvrZzbB4yJVQEw6ebHvQY6swJB1UwrOBfLPxejMSl18fPbqEmpfGMw1Zn4KHCFIztDf2D0Mql0aw0at0UAHJ3Fo%2FLDZ8YUE7sA1ppBSRrfTFynfPjq6S0AYxFbG0rRriok1TLlJSwyUNBIQm3BXxF9TPCMr5NtXyMs0165rTBJwtSruifT1LpXnNQKm1ySnX2fniXN9nVUSVL%2B9NIDplWSFJPXynmqURGIxHBZyiC%2FHtjB3669G%2B7JhFuxOxzq1Ebo%2F08bEJ1MdQWDz327BAZHHYtVjGvqw2fUv837rvBR6JSw1zFGICexC30DaU3z8rRr8bUjh7DchxTmR6z2xJUV%2Bw2ajxdLJNI%2FTEa5SgQAKxECearRLbPbLnH1GsRofwzfAsQv6NDzecpCbtYep0cq9RX65e5Q7mloGyid7GiLwa5LAlLH&X-Amz-Signature=bf3b973859f35db553a5ab70675948921850829ecb8d0b6e3d04e60300046787&X-Amz-SignedHeaders=host&response-content-disposition=inlinetfolio.s3.ap-northeast-1.amazonaws.com/S__67723271_0.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAUJ3VURG74UOY4KJH%2F20250216%2Fap-northeast-1%2Fs3%2Faws4_request&X-Amz-Date=20250216T145513Z&X-Amz-Expires=300&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaDmFwLW5vcnRoZWFzdC0xIkcwRQIhAPhafW6ZotHcfKOpWeLH4mAuzppJovDq3mxJRJeA3CymAiBW1F34z6sDcUGIYcE058szoALA5v3Pju7sGmkQ2CH4FCrsAghgEAAaDDI5NjA2MjU4NTI3OSIM9zIfQLA8UpzDuvgpKskCu2HhOyZVcS6w1O3dt6CgoamrAs1Jpu6GPJ%2BqMJL6Hej%2FwjD8ECGP9xVDOr4BwoU0PasYEoPk%2FVeJwM4KorN4Ap1fLK4sy1D88tLj93NgH%2FwJsdtcsqZTTJk0LqOT7xSDaW4XfpsP8BtaOVpWir%2F4pTcK4auK6UA4LQ3rCY6tHG5NTmBwQrQba38S%2B9uH1VxWnBhjjkK4xEeiOOIVJFe2VbT7W3SlCDo%2BfZw5kVHKovzPS34t%2Fn7FNJBffFSc%2FtMb0nAeSnXpITa2CkrwuBQ3dNl3DYcLx29JVG8A8d3ImtKUUUTmlMY6u9ZBk%2FLTZSYna7m0lXaOui5d5EyONFdLkHoFQHsirKJa3ILI91oZWOoVg8mCvWVIe66CIB8F9iCPuF%2FsarTR2PFlG3pu1AoBe6oxKaRwVr0nlzMf2GA3uvEDgcuhuDCgLdgw6ebHvQY6swJbFDU%2FHrqg5dgNCILhYhNlW6awrl9TyB7FupTm0Gz%2BNT6hBe9cGeF0jalA%2FxeLNPkBDcqIWpJEkoYdtuYHgC794FOr7dE6NSUc1pN1u%2BnImM8q6uKF60i7Z0GqRaZhvW3hF6F8QQ3Cgj%2Byd7cgqs6VWsFpehACotppzjibVV4s1YCzAkUziL9lEWiu8d8fBwPsmzyS%2FvcPfr5ssQdw0hS4EnDczEuE7g9SRYsJX8jctyPhqEDWZaxKo%2FKgmgJIrVI%2F1nsFneOA5jJWyoStmMKXXACaxAvXI4DUW8DCEnM1pkIvyXj72NTKOvUMyRZO6TfpvjH4lZqBJXbGfMxYhN63oX1tawe5beUKIABAunhVjKpfC7%2B5%2BC1U5o%2B8v2xrMJ2gZkLpa6c5cmWjxE1GicMkhYCK&X-Amz-Signature=72ad23b3f44753ad3044fe94f17629d665cd4abd136162b9a09419a488de48b0&X-Amz-SignedHeaders=host&response-content-disposition=inline';

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