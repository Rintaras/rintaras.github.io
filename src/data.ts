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
    image: 'https://rintarasportfolio.s3.ap-northeast-1.amazonaws.com/MapChat.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAUJ3VURG765EC2VIV%2F20250216%2Fap-northeast-1%2Fs3%2Faws4_request&X-Amz-Date=20250216T144130Z&X-Amz-Expires=300&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaDmFwLW5vcnRoZWFzdC0xIkYwRAIgJuGChgD60NzujiaV17Tx%2FdSbgSkmL%2BcpqQycAsvA%2F6ACIDnTiueS58%2F1ptWpBDqNAaNZ8QgmJeHTPNEBnsAdfdrlKuwCCGAQABoMMjk2MDYyNTg1Mjc5IgwPa5%2FHoA59E4rKOGUqyQIi2Hp6jHWWtSlpxL1OU0j8Y4jWZaN%2FAZdaqolKFwkA5rbJhkq9%2F1KR2ZldvtM%2BFruICFfp%2F%2B2lrE%2BErT4m32VDcvSnVsnlo%2BS%2BDy7PWnZl0xEpC92WUkrfyClbeIF7odWdvmm5ppV1UqWalzBR19gHYIkgObUHeEwDEIRgGiEH%2FgNerAvKB1x%2Bn0G64bG60JAb6agFjfUORd2xaCKOolaUxdWAN6XXuszTz5%2FxPnv4vxR4HDIcgbqc444Wfme%2BZW22a0YT6cMHq8HP8r8dSHD57uf%2FMyuxOMpolIbd8hOTvRXFLBjC39n1TPCZN2w8j3U5nOaOEQfV8VxqpERtZe%2Fc1sgGOu9aLiNpUR3s5YRexpFMZL2jWLrQ1s%2FPxH80%2FaPP2mvr1o%2FK%2B1nimfaRm23WSzZI%2BMr2hJFaSUOm6OKrYMP1kH88jwQjyDDp5se9Bjq0ApPx2VXxjjQ5XfdO056vJhK2TZlmirG5bmW%2FqOa3qcOEYMr96P3RJSpOwugjWx05xdw3V6rNJjZeOU%2BW8wPdOjVfKOz%2FrOAK1QGFKqYnCHSmt8NtfAVz6OZ2h7WO5dXx8BKUv79%2FV4YZR4dzMe%2FSve00EpoILnCT3eHcHrS2w%2FR0QAArMFw2WV8oix6XHdxdygjWHM32FcUfzoVi8iJt%2FgoHTnNJ4kqn%2B%2FXFM0rXUPd4VUeeJKP7q01NrwQEWXNoJN3lp2FUso%2F0VlNjoSO3z4vFpq6j7qONKW0W0ivdWiA5FWURRnZecCWb97jMLqsp1nu4kgqeqkpmWdogihyyrtNM4CzS4C6oyZ25XmrLiWKJP4zIrx59JTQZAi0iESfS3xy1TNeN9MprsH8gxwbrsYSCk32p&X-Amz-Signature=a7bbd96a68cabea9af07699e4560d40fdc56fa21ed7a15e4687d9a10d7456eda&X-Amz-SignedHeaders=host&response-content-disposition=inline',
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
    image: 'https://rintarasportfolio.s3.ap-northeast-1.amazonaws.com/TripMateImage.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAUJ3VURG7QBQEBLH2%2F20250216%2Fap-northeast-1%2Fs3%2Faws4_request&X-Amz-Date=20250216T144921Z&X-Amz-Expires=300&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaDmFwLW5vcnRoZWFzdC0xIkgwRgIhAKtqAQ%2BGJlcbo%2Fe10yJCtlHQ%2BvEn828P8Isltt%2F585OQAiEA92213cjmM2b822CL4Tk7Z2q8wd4qXJTL9d4OWCm%2Fnugq7AIIYBAAGgwyOTYwNjI1ODUyNzkiDK9wpgPy7OXoofau6yrJAjvmxV%2B2w0b5fyOKN6xjOHTTmfwlnucbe0gYMAyysleWmGzT0dMdNQCjzMQ7ZK18PyuCDKFeFmWv35o0YYF%2F7kit3oXSSmMmx6DSBLQh4%2BqtH8JkcxWEgkJ9pmpC5h6BfS%2BnfpOPukolF7bzy8ql6i%2BRAplur6Gy1llIecyDLeTwFixYV348B4rDeqNIsnSyxH6BW8uGxckJ3n0e0WAGk97aFc7PCrZnObdiqwJWyNRXmnPWAaBn5vvKnyHivEI5V5GsBxGhXYCk3cromtC%2FCOaIPVlzYihIcbYLwloUx4p6V%2BLM%2FNbO33of4%2BbZrzmasmJ1vTR1VQdR%2Bdqe7KIHWyfZ492W2RmgMm1usyz4xdNrgDfmJp8ePmvInGVzUORo0uN%2FVT%2FGN86vMSn12FUYU76D4vW258AhBgAUzgIsHHdWCCdMudlbeuMaMOnmx70GOrIC0bhcAdN4bFeFw7WteP8zq%2FtcjInOJI79naokA1y9Qz4MjgiSKHZQKMRSHOYZVnXJr1f0ygIEfQCg7h8h0ZwDFmpzMvKXmKXfJYTtiJXw8KPtG8Xqfd7OpYL0X8Y%2Fzx%2BeOsgmHqflm2cOJTDnIXAAJ4pjTjiNKxZBOM0j0DyLFLixMk%2BzUmfb6yokaZeVPgFumUGNzBo%2Baiwh%2FcZ%2FOb5dK5UHAECGj1kjCfx9FF%2Fl8WobluqCZ3xxh21%2BCaHnJWaN9%2BYsd1UGR5nj9d0oJSSFoE%2F4hl91bQRkY9dyR4GBT8kHhiWlgriajo%2FuFOZeFDb1ZAc36XUoCR3Glwd8%2FfC2ePDff1XZRG2ItbOjVpORERgalCACUpy2BwVoBur4FUY1NXabOGR5acAG%2F7cVZOhFZZDi&X-Amz-Signature=c7bddaac441c9b45e408a73400d05692256b67164860b486cf055255f06dfad0&X-Amz-SignedHeaders=host&response-content-disposition=inline',
    duration: '2025.02',
    role: 'リードデベロッパー',
    technologies: ['React', 'Python', 'FastAPI'],
    screenshots: [
      'https://rintarasportfolio.s3.ap-northeast-1.amazonaws.com/TripMateImage.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAUJ3VURG7QBQEBLH2%2F20250216%2Fap-northeast-1%2Fs3%2Faws4_request&X-Amz-Date=20250216T144921Z&X-Amz-Expires=300&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaDmFwLW5vcnRoZWFzdC0xIkgwRgIhAKtqAQ%2BGJlcbo%2Fe10yJCtlHQ%2BvEn828P8Isltt%2F585OQAiEA92213cjmM2b822CL4Tk7Z2q8wd4qXJTL9d4OWCm%2Fnugq7AIIYBAAGgwyOTYwNjI1ODUyNzkiDK9wpgPy7OXoofau6yrJAjvmxV%2B2w0b5fyOKN6xjOHTTmfwlnucbe0gYMAyysleWmGzT0dMdNQCjzMQ7ZK18PyuCDKFeFmWv35o0YYF%2F7kit3oXSSmMmx6DSBLQh4%2BqtH8JkcxWEgkJ9pmpC5h6BfS%2BnfpOPukolF7bzy8ql6i%2BRAplur6Gy1llIecyDLeTwFixYV348B4rDeqNIsnSyxH6BW8uGxckJ3n0e0WAGk97aFc7PCrZnObdiqwJWyNRXmnPWAaBn5vvKnyHivEI5V5GsBxGhXYCk3cromtC%2FCOaIPVlzYihIcbYLwloUx4p6V%2BLM%2FNbO33of4%2BbZrzmasmJ1vTR1VQdR%2Bdqe7KIHWyfZ492W2RmgMm1usyz4xdNrgDfmJp8ePmvInGVzUORo0uN%2FVT%2FGN86vMSn12FUYU76D4vW258AhBgAUzgIsHHdWCCdMudlbeuMaMOnmx70GOrIC0bhcAdN4bFeFw7WteP8zq%2FtcjInOJI79naokA1y9Qz4MjgiSKHZQKMRSHOYZVnXJr1f0ygIEfQCg7h8h0ZwDFmpzMvKXmKXfJYTtiJXw8KPtG8Xqfd7OpYL0X8Y%2Fzx%2BeOsgmHqflm2cOJTDnIXAAJ4pjTjiNKxZBOM0j0DyLFLixMk%2BzUmfb6yokaZeVPgFumUGNzBo%2Baiwh%2FcZ%2FOb5dK5UHAECGj1kjCfx9FF%2Fl8WobluqCZ3xxh21%2BCaHnJWaN9%2BYsd1UGR5nj9d0oJSSFoE%2F4hl91bQRkY9dyR4GBT8kHhiWlgriajo%2FuFOZeFDb1ZAc36XUoCR3Glwd8%2FfC2ePDff1XZRG2ItbOjVpORERgalCACUpy2BwVoBur4FUY1NXabOGR5acAG%2F7cVZOhFZZDi&X-Amz-Signature=c7bddaac441c9b45e408a73400d05692256b67164860b486cf055255f06dfad0&X-Amz-SignedHeaders=host&response-content-disposition=inline'
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
    image: 'https://rintarasportfolio.s3.ap-northeast-1.amazonaws.com/TripMate.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAUJ3VURG7XDXJQSTV%2F20250216%2Fap-northeast-1%2Fs3%2Faws4_request&X-Amz-Date=20250216T144846Z&X-Amz-Expires=300&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaDmFwLW5vcnRoZWFzdC0xIkcwRQIgVpt5NRtchSSYEMAZONZxBQ4V4QRMNem6WyIvAEjwv7gCIQDiEY%2FrkB4TDuOhneLV1AuYlQmDrYMC7Rw127wOeJozKCrsAghgEAAaDDI5NjA2MjU4NTI3OSIMBrbDc45ZuGAv2Ji9KskCpkk6S6iwKs0TKn7luhIny9kCt1BBcQwC3jq%2F4D2iHUjK30YzC7cUw6ssbkXdmw%2BynQM1UZV121Ry3Ca2tGPmw%2BSJ0bpZwqysgTUPgPv4QWI8DsGch5L8n04yUNy5g8FTeEAprAQANqWgqBQbMFaI5QDv9Q%2Fhx2ZyW95h4vd%2BeLePRZQip5y5PMEgFk4aKvVRdmE1o7Y10lVWxQ37HWyNBv2szgHRI4Ttx%2FtbhK3AWQWOK497FyZ9bsuG8lNjp1n3CSZZEdwXSMtah3eTdh3R5msq7PPL1vk8K%2B2pHqIc%2BTG0InpyvRHIBq0SVNPiM7wkvDLvLO3NIZBw5bl%2FSbJqAbsevmXUKg1%2Fdw4w5%2FjFT%2FrRXRZXMwVYXGJ%2FgoW6Wkb5rHxbLCX7%2FXmZMcluA63i6qA4458kEkU5XZEhXe%2FsyUlYiGeDNJbajlQw6ebHvQY6swK7OrKFMgaoKJYwIvEPwd1oumQzqMcl8GTkLnwSHX1wac0j5XriqBwNSkKzRhgwCJR3kEmdtjAKxjWpb%2B5RCRtT1I%2Ftb3Ddsc6NqlANFlAhazgyAvSNwUSiLnKl%2FqmBzw4jvATtHGcBpzygIaaX8WVDqU2mOedK7r%2BCMftT10HP67zjJW3kX%2Fp09xdJFEHpTxk52sufC%2BoB0Ct3emesYreiHZfc%2BkauT45EDoB2mExx%2B7Mvbtb3xL9WJFKR8dYuSn9JaktrTCze3isZ9Tl02DTxKCN1omAJDz6d8qRxVfsd1tYvd10JUhtceW4vZzJxtJfcRUMd%2FOUs8eyMUZ0iyluNeqVc7Xpss4pyntHePi3uocCaQ6pB4jhlfnA%2Bo275L%2FLGDf5oDuJCT%2BAHewiA1v8aI4CE&X-Amz-Signature=a6678f02cfb56d1428904f421e3400065970d1161eb51e959ff6d1ab5616f297&X-Amz-SignedHeaders=host&response-content-disposition=inline'
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