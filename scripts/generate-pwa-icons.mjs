import sharp from 'sharp';
import { readFileSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, '..', 'public');
const profileUrl =
  'https://rintarasportfolio.s3.ap-northeast-1.amazonaws.com/S__67723271_0.jpg';
const fallbackSvg = join(publicDir, 'icon.svg');

let source;
if (existsSync(fallbackSvg)) {
  source = readFileSync(fallbackSvg);
} else {
  const response = await fetch(profileUrl);
  if (!response.ok) {
    throw new Error(`Failed to fetch profile image: ${response.status}`);
  }
  source = Buffer.from(await response.arrayBuffer());
}

const sizes = [192, 512, 180];

for (const size of sizes) {
  const name =
    size === 180 ? 'apple-touch-icon.png' : `pwa-${size}x${size}.png`;
  await sharp(source).resize(size, size, { fit: 'cover' }).png().toFile(join(publicDir, name));
  console.log(`Generated ${name}`);
}
