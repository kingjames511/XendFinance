# XendFinance - High-Fidelity Mobile Banking Dashboard

<div align="center">
  <img src="./assets/iPhone-13-PRO-localhost (10).png" width="24%" />
  <img src="./assets/iPhone-13-PRO-localhost (11).png" width="24%" />
  <img src="./assets/iPhone-13-PRO-localhost (12).png" width="24%" />
  <img src="./assets/iPhone-13-PRO-localhost (13).png" width="24%" />
   <img src="./assets/iPhone-13-PRO-localhost (15).png" width="24%" />
  <img src="./assets/iPhone-13-PRO-localhost (16).png" width="24%" />
  <img src="./assets/iPhone-13-PRO-localhost (17).png" width="24%" />
</div>

XendFinance is a premium, high-fidelity mobile banking and asset management application...

APK download  link: https://expo.dev/artifacts/eas/5cP8A1rW4viTmmzLFuvfnR.apk

## ✨ Key Features

### 🔐 Advanced Authentication
- **Multi-Step Onboarding**: Seamless flow through Welcome, Email, and Password screens.
- **Biometric Integration**: Integrated `expo-camera` capabilities for secure identity verification and QR scanning.
- **Dynamic Personalization**: Automatically extracts and formats user handles from email addresses.

### 📊 Comprehensive Dashboard
- **Home Hub**: Quick overview of Portfolio Balance and Total Savings with toggleable privacy modes.
- **Wallet Engine**: Multi-asset management screen supporting **Stablecoins**, **Utility tokens**, and **Meme coins** with real-time value filtering.
- **Savings Plans**: Dedicated hub for creating fixed/flexible savings plans with integrated interest estimation.
- **Referral System**: Personalized referral code generation, rewards tracking, and native social sharing integration.

### 👤 Account & Security
- **Profile Management**: Full-featured account settings including KYC verification status and biometric security toggles.
- **Privacy Controls**: Global "Eye" toggle to mask sensitive financial figures across the entire app.
- **Logout Flow**: Intuitive custom dropdown menu for secure session termination.

## 🛠️ Tech Stack

- **Framework**: [Expo](https://expo.dev/) (SDK 54)
- **Navigation**: [Expo Router](https://docs.expo.dev/router/introduction/) (File-based routing)
- **Styling**: [NativeWind (v4)](https://www.nativewind.dev/) / Tailwind CSS
- **Typography**: [Google Fonts](https://font.expo.dev/) (Roboto & Lato)
- **Icons**: Expo Vector Icons (Material, Ionicons, Octicons)
- **Hardware**: Expo Camera, Clipboard, Haptics

## 🎨 Design System

- **Primary Theme**: Deep Dark (`#0F0F0F`)
- **Accent Color**: Xend Blue (`#2D4DD3`)
- **Typography**:
  - **Roboto**: Utilized for high-impact headings, balances, and primary titles.
  - **Lato**: Utilized for body text, descriptions, and secondary labels.
- **Visual Style**: Modern geometric layout with refined `rounded-xl` border radii for a professional fintech feel.

## 📁 Project Structure

```text
├── app/                  # Expo Router directory
│   ├── auth/             # Authentication screens (Login, Welcome, Email)
│   ├── (tabs)/           # Main dashboard tab navigation
│   │   ├── home.tsx      # Overview & Portfolio
│   │   ├── wallet.tsx    # Asset management
│   │   ├── plans.tsx     # Savings products
│   │   ├── referral.tsx  # Rewards & Sharing
│   │   └── profile.tsx   # Account & Settings
├── components/           # Reusable UI components
│   ├── ui/               # Core design elements (CustomTabBar, etc.)
│   └── ...               # Functional components (SupportChat, Logo)
├── assets/               # Images and fonts
└── tailwind.config.js    # NativeWind font & theme configuration
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- npm or yarn
- Expo Go app on your physical device (recommended)

### Installation
1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npx expo start
   ```

### Building
The project is configured for **EAS Build**. To build a preview APK for Android:
```bash
eas build -p android --profile preview
```

## 📄 License
Private Repository - All Rights Reserved.
