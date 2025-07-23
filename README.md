# MyPortfolio

Rio Satoのポートフォリオサイトです。React、TypeScript、Three.jsを使用したモダンなWebアプリケーションです。

## 🚀 技術スタック

### フロントエンド
- **React 18** - UIライブラリ
- **TypeScript** - 型安全性
- **Vite** - ビルドツール
- **Tailwind CSS** - スタイリング
- **Framer Motion** - アニメーション

### 3Dグラフィックス
- **Three.js** - 3Dレンダリング
- **@react-three/fiber** - React用Three.jsラッパー
- **@react-three/drei** - Three.jsユーティリティ

### その他のライブラリ
- **Lucide React** - アイコン
- **React Router DOM** - ルーティング
- **EmailJS** - お問い合わせフォーム
- **React Intersection Observer** - スクロールアニメーション

## 🛠️ セットアップ

### 前提条件
- Node.js 18以上
- npm または yarn

### インストール
```bash
# 依存関係をインストール
npm install

# 開発サーバーを起動
npm run dev
```

### ビルド
```bash
# 本番用ビルド
npm run build

# プレビュー
npm run preview
```

## 📁 プロジェクト構造

```
MyPortfolio/
├── src/
│   ├── components/          # Reactコンポーネント
│   │   ├── Background3D.tsx    # 3D背景
│   │   ├── ContactForm.tsx     # お問い合わせフォーム
│   │   ├── Layout.tsx          # レイアウト
│   │   ├── ProfileImage.tsx    # プロフィール画像
│   │   └── TimelineItem.tsx    # タイムラインアイテム
│   ├── data.ts              # プロジェクトデータ
│   ├── types.ts             # TypeScript型定義
│   ├── App.tsx              # メインアプリケーション
│   └── main.tsx             # エントリーポイント
├── supabase/               # Supabase設定
└── public/                 # 静的ファイル
```

## ✨ 主な機能

### 🎨 3D背景
- Three.jsを使用したインタラクティブな3D背景
- スクロールに応じたアニメーション
- WebGLエラーハンドリングとフォールバック

### 📱 レスポンシブデザイン
- モバイルファーストのデザイン
- Tailwind CSSによるレスポンシブレイアウト

### 🎭 アニメーション
- Framer Motionによるスムーズなアニメーション
- スクロールトリガーアニメーション
- ホバーエフェクト

### 📧 お問い合わせフォーム
- EmailJSによるメール送信機能
- バリデーションとエラーハンドリング

### 🖼️ 画像エラーハンドリング
- 画像読み込みエラーの自動検出
- フォールバック画像の表示
- プログレッシブ画像読み込み

## 🔧 開発

### 開発サーバー起動
```bash
npm run dev
```
サーバーは `http://localhost:5173` で起動します。

### リント
```bash
npm run lint
```

### 型チェック
```bash
npx tsc --noEmit
```

## 🚀 デプロイ

### Vercel
```bash
npm run build
vercel --prod
```

### Netlify
```bash
npm run build
netlify deploy --prod --dir=dist
```

## 📝 ライセンス

MIT License

## 👤 作者

Rio Sato - 日本大学工学部情報工学科3年
- GitHub: [@Rintaras](https://github.com/Rintaras)
- Twitter: [@Rintaras](https://twitter.com/Rintaras)