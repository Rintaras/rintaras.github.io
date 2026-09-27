import sharp from 'sharp';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

/** Keep in sync with `PROFILE_IMAGE` in src/data.ts */
const PROFILE_IMAGE_URL =
  'https://rintarasportfolio.s3.ap-northeast-1.amazonaws.com/S__67723271_0.jpg';

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, '..', 'public');

const response = await fetch(PROFILE_IMAGE_URL);
if (!response.ok) {
  throw new Error(`Failed to fetch profile image: ${response.status}`);
}
const source = Buffer.from(await response.arrayBuffer());

const sizes = [192, 512, 180];

for (const size of sizes) {
  const name =
    size === 180 ? 'apple-touch-icon.png' : `pwa-${size}x${size}.png`;
  await sharp(source)
    .resize(size, size, { fit: 'cover', position: 'centre' })
    .png()
    .toFile(join(publicDir, name));
  console.log(`Generated ${name} from profile photo`);
}
