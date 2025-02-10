import { Project, Skill, TimelineEvent } from './types';

export const projects: Project[] = [
  {
    id: 'ai-iot-device',
    title: 'AI搭載IoTデバイス',
    description: '大学の友人5名で全員ハッカソン初参加の中挑みました。慣れない短期開発、触れたことの無いAWS、初のIoT開発と様々な壁がある中、企業賞をいただくことができました。',
    image: 'https://topaz.dev/_next/image?url=https%3A%2F%2Fptera-publish.topaz.dev%2Fproject%2F01JEHDFZEVWFY0MSJXM5332F1V.png&w=1920&q=75',
    duration: '2024.12',
    role: 'ハッカソン開発',
    technologies: ['RasberryPi', 'Python', 'AWS IoTcore'],
    demoUrl: 'https://topaz.dev/projects/d07aaceab7659b8beb47',
    screenshots: [
      'https://topaz.dev/_next/image?url=https%3A%2F%2Fptera-publish.topaz.dev%2Fproject%2F01JEHDFZEVWFY0MSJXM5332F1V.png&w=1920&q=75'
    ]
  },
  {
    id: 'map-chat',
    title: 'Map Chat',
    description: '学生エンジニアコミュニティ発足以来初のメンバーでのハッカソン出場。全員が異なる大学や属性の中、記念すべき一つ目のプロダクトとなりました。',
    image: 'https://zqkoofqnnzmsurdeugnt.supabase.co/storage/v1/object/public/profile-images/profile/MapChat.png',
    duration: '2025.01',
    role: 'フルスタック開発',
    technologies: ['React', 'Three.js', 'Go', 'FastAPI'],
    demoUrl: 'https://client-silk-gamma.vercel.app/',
    screenshots: [
      'https://zqkoofqnnzmsurdeugnt.supabase.co/storage/v1/object/public/profile-images/profile/MapChat.png'
    ]
  },
  {
    id: 'tripmate',
    title: 'TripMate',
    description: '同学科内で行われた2024情報工学科ソフトウェアコンテストにて教員・学生の投票の結果、最優秀賞を受賞。自身初のチーム開発であり、得た学びが多くありました。',
    image: 'https://zqkoofqnnzmsurdeugnt.supabase.co/storage/v1/object/public/profile-images/profile/TripMateImage.png',
    duration: '2025.02',
    role: 'リードデベロッパー',
    technologies: ['React', 'Python', 'FastAPI'],
    screenshots: [
      'https://zqkoofqnnzmsurdeugnt.supabase.co/storage/v1/object/public/profile-images/profile/TripMateImage.png'
    ]
  }
];

export const skills: Skill[] = [
  // Languages
  { name: 'C', icon: 'code', category: 'language' },
  { name: 'Java', icon: 'code', category: 'language' },
  { name: 'Python', icon: 'code', category: 'language' },
  { name: 'PHP', icon: 'code', category: 'language' },
  { name: 'Go', icon: 'code', category: 'language' },
  { name: 'JavaScript', icon: 'code', category: 'language' },
  { name: 'TypeScript', icon: 'code', category: 'language' },
  { name: 'HTML', icon: 'code', category: 'language' },
  { name: 'CSS', icon: 'code', category: 'language' },
  { name: 'MySQL', icon: 'code', category: 'language' },
  // Frameworks
  { name: 'React', icon: 'component', category: 'framework' },
  { name: 'FastAPI', icon: 'server', category: 'framework' },
  { name: 'Next.js', icon: 'server', category: 'framework' },
  { name: 'Three.js', icon: 'component', category: 'framework' },
  { name: 'Tailwind CSS', icon: 'component', category: 'framework' },
  { name: 'Django', icon: 'component', category: 'framework' },
  { name: 'Echo', icon: 'component', category: 'framework' },


  // Tools
  { name: 'AWS', icon: 'cloud', category: 'tool' },
  { name: 'Docker', icon: 'container', category: 'tool' },
  { name: 'Git', icon: 'code', category: 'tool' },
  { name: 'RasberryPi', icon: 'server', category: 'tool' },
  { name: 'SupaBase', icon: 'code', category: 'tool' }
];

export const timelineEvents: TimelineEvent[] = [
  {
    year: '2003.May',
    title: '誕生',
    description: '沖縄で生まれ、学童期～青年期を茨城で過ごす',
    image: 'https://www.sozailab.jp/db_img/sozai/5215/39809ece85248c1572f00cdb6b9bbf42.jpg'
  },
  {
    year: '2022.April',
    title: '日本大学 入学',
    description: '工学部情報工学科に入学。一人暮らしを開始する',
    image: 'https://www.nihon-u.ac.jp/nu_logo.png',
    links: [
      {
        url: 'https://www.ce.nihon-u.ac.jp/computer-science/',
        label: '公式サイト'
      }
    ]
  },
  {
    year: '2024.October',
    title: 'Mat Tech加入',
    description: '学生エンジニア団体に加入する',
    image: 'https://dfs38zlnglmbd.cloudfront.net/assets/logo-520fec39.png',
    links: [
      {
        url: 'https://x.com/G8e8a',
        label: '公式X'
      }
    ]
  },
  {
    year: '2024.December',
    title: 'Progate Hackathon by AWS 入賞',
    description: 'ハッカソン初参加。AI搭載IoTデバイスを開発し企業賞を受賞',
    image: 'https://media.connpass.com/thumbs/89/30/893061def50d6db3b0b799171d78e678.png',
    links: [
      {
        url: 'https://topaz.dev/projects/d07aaceab7659b8beb47',
        label: 'Topa’s'
      }
    ]
  },
  {
    year: '2025.January',
    title: 'GeekCamp vol.20 参加',
    description: 'エンジニア交流アプリ「Map Chat」を開発',
    image: 'https://talent.supporterz.jp/geekpjt/assets/img/logo_geekcamp.png',
    links: [
      {
        url: 'https://github.com/matthewTechCom/giikucamp20',
        label: 'GitHub'
      }
    ]
  },
  {
    year: '2025.February',
    title: '学内コンテスト 最優秀賞受賞',
    description: '大学内ソフトウェアコンテストにて「TripMate」を開発し最優秀賞を受賞',
    image: 'https://zqkoofqnnzmsurdeugnt.supabase.co/storage/v1/object/public/profile-images/profile/TripMate.png'
  },
  {
    year: '2024.March',
    title: 'Progate Hackathon by AWS 参加予定',
    description: '同ハッカソン二度目となる参加を予定しております',
    image: 'https://media.connpass.com/thumbs/60/13/6013b22085b758ad96d21dd37f31870c.png',
    links: [
      {
        url: 'https://progate.connpass.com/event/342402/',
        label: 'Compass'
      }
    ]
  },
];