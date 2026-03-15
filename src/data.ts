import { Project, Skill, TimelineEvent } from './types';

// デフォルト画像URL
const DEFAULT_PROJECT_IMAGE = 'https://via.placeholder.com/400x300/1f2937/ffffff?text=Project';
const DEFAULT_PROFILE_IMAGE = 'https://github.com/github.png';
const DEFAULT_EVENT_IMAGE = 'https://via.placeholder.com/200x200/374151/ffffff?text=Event';

export const projects: Project[] = [
  {
    id: 'ai-iot-device',
    title: 'AI搭載IoTデバイス',
    description: '大学の友人5名で全員ハッカソン初参加の中挑みました。慣れない短期開発、触れたことの無いAWS、初のIoT開発と様々な壁がある中、企業賞をいただくことができました。',
    image: 'https://topaz.dev/_next/image?url=https%3A%2F%2Fptera-publish.topaz.dev%2Fproject%2F01JEHDFZEVWFY0MSJXM5332F1V.png&w=3840&q=75',
    duration: '2024.12',
    role: 'ハッカソン開発',
    technologies: ['RasberryPi', 'Python', 'AWS IoTcore'],
    demoUrl: 'https://topaz.dev/projects/d07aaceab7659b8beb47',
    screenshots: [
      'https://via.placeholder.com/400x300/374151/ffffff?text=AI+IoT+Device'
    ]
  },
  {
    id: 'map-chat',
    title: 'Map Chat',
    description: '学生エンジニアコミュニティ発足以来初のメンバーでのハッカソン出場。全員が異なる大学や属性の中、記念すべき一つ目のプロダクトとなりました。',
    image: 'https://rintarasportfolio.s3.ap-northeast-1.amazonaws.com/MapChat.png',
    duration: '2025.01',
    role: 'フルスタック開発',
    technologies: ['React', 'Three.js', 'Go', 'FastAPI'],
    demoUrl: 'https://client-silk-gamma.vercel.app/',
    screenshots: [
      'https://rintarasportfolio.s3.ap-northeast-1.amazonaws.com/MapChat.png'
    ]
  },
  {
    id: 'tripmate',
    title: 'TripMate',
    description: '同学科内で行われた2024情報工学科ソフトウェアコンテストにて教員・学生の投票の結果、最優秀賞を受賞。自身初のチーム開発であり、得た学びが多くありました。',
    image: 'https://rintarasportfolio.s3.ap-northeast-1.amazonaws.com/TripMateImage.png',
    duration: '2025.02',
    role: 'リードデベロッパー',
    technologies: ['React', 'Python', 'FastAPI'],
    screenshots: [
      'https://rintarasportfolio.s3.ap-northeast-1.amazonaws.com/TripMateImage.png'
    ]
  },
  {
    id: 'Teamder',
    title: 'Teamder',
    description: '初めてのネイティブアプリ開発。技術を語り合ったり、共同開発を気軽に募集できるエンジニア同士のマッチングを目的としたアプリを開発しました。',
    image: 'https://topaz.dev/_next/image?url=https%3A%2F%2Fptera-publish.topaz.dev%2Fproject%2F01JPQKCCDN8HCNFG96E7WKB8TN.jpeg&w=3840&q=75',
    duration: '2025.03',
    role: 'リードデベロッパー',
    technologies: ['React-Native', 'Expo', 'AWS'],
    screenshots: [
      'https://rintarasportfolio.s3.ap-northeast-1.amazonaws.com/TripMateImage.png'
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
  { name: 'PostgreSQL', icon: 'code', category: 'language' },
  // Frameworks
  { name: 'React', icon: 'component', category: 'framework' },
  { name: 'FastAPI', icon: 'server', category: 'framework' },
  { name: 'Next.js', icon: 'server', category: 'framework' },
  { name: 'Three.js', icon: 'component', category: 'framework' },
  { name: 'Tailwind CSS', icon: 'component', category: 'framework' },
  { name: 'Django', icon: 'component', category: 'framework' },
  { name: 'Echo', icon: 'component', category: 'framework' },
  { name: 'Gin', icon: 'component', category: 'framework' },


  // Tools
  { name: 'AWS', icon: 'cloud', category: 'tool' },
  { name: 'Docker', icon: 'container', category: 'tool' },
  { name: 'Git', icon: 'code', category: 'tool' },
  { name: 'RasberryPi', icon: 'server', category: 'tool' },
  { name: 'SupaBase', icon: 'code', category: 'tool' },
  { name: 'Vercel', icon: 'code', category: 'tool' },
  { name: 'Teraform', icon: 'code', category: 'tool' },
];

export const timelineEvents: TimelineEvent[] = [
  {
    year: '2022.April',
    title: '日本大学 入学',
    description: '工学部情報工学科に入学',
    image: 'https://pbs.twimg.com/profile_images/923458947612229632/SnABWuYV_400x400.jpg',
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
    title: 'Progate Hackathon by AWS 2024.12 入賞',
    description: 'ハッカソン初参加。AI搭載IoTデバイスを開発し企業賞を受賞',
    image: 'https://media.connpass.com/thumbs/89/30/893061def50d6db3b0b799171d78e678.png',
    links: [
      {
        url: 'https://topaz.dev/projects/d07aaceab7659b8beb47',
        label: 'Topa’z'
      }
    ]
  },
  {
    year: '2025.January',
    title: 'GeekCamp vol.20 参加',
    description: 'エンジニア交流アプリ「Map Chat」を開発',
    image: 'https://ferret-one.akamaized.net/images/6657f0fb5e4a0902870bf090/original.png?utime=1717039355',
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
    image: 'https://rintarasportfolio.s3.ap-northeast-1.amazonaws.com/TripMate.png'
  },
  {
    year: '2024.March',
    title: 'Progate Hackathon by AWS 2025.03 参加',
    description: 'エンジニアの技術の点に着目したマッチングアプリを開発',
    image: 'https://media.connpass.com/thumbs/4d/d6/4dd6e151c8549e2abe961286531a4b5f.png',
    links: [
      {
        url: 'https://topaz.dev/projects/55b22c80c6b909240cef',
        label: 'Topaz'
      }
    ]
  },
  {
    year: '2024.July',
    title: 'Progate Hackathon by AWS 2025.07 参加',
    description: '学習サポート特化型のAIツールを開発',
    image: 'https://media.connpass.com/thumbs/da/65/da65409382a287a699383d33cf3c3419.png',
    links: [
      {
        url: 'https://topaz.dev/projects/5e95ab57f6578a013a8a',
        label: 'Topaz'
      }
    ]
  },
  {
    year: '2026.February ~',
    title: '株式会社CyberAgent インターン参加中',
    description: '同社開催「Go College」にてサーバーサイドの研修を受講すると共に、API実装やパフォーマンスチューニングや負荷試験を行っています。',
    image: 'https://scontent-nrt6-1.xx.fbcdn.net/v/t39.30808-6/326460725_1115866529095462_5168107253345316339_n.png?_nc_cat=105&ccb=1-7&_nc_sid=1d70fc&_nc_ohc=GiQzKFntQQ0Q7kNvwE42D7i&_nc_oc=AdmNtriBq_yWuAXiFJvvCL-LdrQIqu-HoG8L0_MpLpntGMeArOTosW6tg8kzqGuKLoM&_nc_zt=23&_nc_ht=scontent-nrt6-1.xx&_nc_gid=4MIV7IboAt51lKYIOtg-Gw&_nc_ss=8&oh=00_Afx8kf0RkBtYguj9CTr_XqaIOsg9aP0Pvwx5ouys_wuGWA&oe=69BDF41F',
    links: [
      {
        url: 'https://www.cyberagent.co.jp/careers/students/event/detail/id=32665',
        label: '公式サイト'
      }
    ]
  },
  {
    year: '2026.February',
    title: '学内コンテスト 最優秀賞受賞',
    description: '大学内ソフトウェアコンテストにて「NU App」を開発し最優秀賞を受賞。\n同大学のポータルサイトをより良く多機能にアップデートし、ios/android対応のネイティブアプリ開発を行いました。',
    image: 'https://pbs.twimg.com/media/HBkjGQ8bUAIBvw1?format=jpg&name=large',
    links: [
      {
        url: 'https://x.com/nihonuniv_ce_cs/status/2024688101160042620?s=20',
        label: '公式X'
      }
    ]
  },
  {
    year: '2026.April',
    title: '日本大学大学院 工学研究科　情報工学専攻　修士課程入学予定',
    description: 'ネットワーク分野にて研究の継続予定',
    image: 'https://www.ce.nihon-u.ac.jp/nue/wp-content/uploads/2025/09/news_thumbnail.jpg',
  },
];