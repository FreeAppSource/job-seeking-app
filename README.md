# Job Seeking App

A modern job recruitment and candidate portfolio mobile application built with **React Native (0.88+)**, **Expo SDK 58+**, and **Expo Router** using **JavaScript and JSX (`.js`, `.jsx`)**.

Directly translated from the original Sketch design: `job-seaking-app-hassan-shabbir.sketch` by **Hassan Shabbir**.

---

## 🎨 Artboards & Screens (based on 14 design artboards)

| # | Artboard Name | Sketch ID | Dimensions | Code Location | Description |
|---|---|---|---|---|---|
| 1 | **splash** | `4CF47F93-2808-4556-9291-A45634CFFDE5` | 1125 × 2436 | `src/app/index.jsx` | Brand identity showcase with logo and splash visual. |
| 2 | **onboarding** | `2D2D9342-C69F-4D88-88EC-B28C5AA94ECF` | 1125 × 2436 | `src/app/index.jsx` | "Don't wait for Opportunity — Welcome", candidate visual, SignIn & SignUp triggers. |
| 3 | **login** | `78E84C1E-6CDE-421A-B2BC-685A885513A5` | 1125 × 2436 | `src/app/login.jsx` | "Login and get to work", prefilled credentials (`Hassan.Designer@gmail.com`), forgot password link. |
| 4 | **wizard** | `220ACB2D-5D41-4535-B6E5-B0EC3B77881E` | 1125 × 2436 | `src/app/wizard.jsx` | "Who are You?" selection modal between Company and Candidate. |
| 5 | **forgot password** | `38E411FD-286C-4596-B49F-A49F71B7823D` | 1125 × 2436 | `src/app/forgot-password.jsx` | "Enter New Password" input and confirmation. |
| 6 | **pin code** | `79939922-8873-437B-9180-5F60EC5ACF62` | 1125 × 2436 | `src/app/forgot-password.jsx` | "Enter 4 Digit Code" verification screen for `+92 3127764515` with digit boxes (`9 2 1 ...`). |
| 7 | **jobs** | `40BF794F-0E41-44CC-BF83-D4E3A3FE2FB6` | 1125 × 2436 | `src/app/(tabs)/index.jsx` | "Search jobs...", employment filters (Full Time, Part Time, Remote), job listings feed with skill tags. |
| 8 | **job details** | `BDB4F39C-6593-402F-8B66-05BCCBEBF119` | 1125 × 3637 | `src/app/job-details.jsx` | Full job view for ".Net Developer", skill badges (SQL, PHP, C#, MVC.net), responsibilities, and "Apply for this Job" CTA. |
| 9 | **candidate profile** | `7B5ED30D-9A1E-462C-A0A5-3AA01835C0FD` | 1125 × 2436 | `src/app/(tabs)/profile.jsx` | Candidate profile for Hassan Shabbir with phone, email, and location. |
| 10 | **company profile** | `9C6755B3-D616-4E9C-AF68-D75C438CF3FA` | 1125 × 2436 | `src/app/(tabs)/index.jsx` | Recruiter company details and job postings summary. |
| 11 | **long profile** | `53F5DBFA-DEDE-42C0-A3C0-7A2C67E9C732` | 1125 × 3479 | `src/app/(tabs)/profile.jsx` | Extended candidate experience, skills, and portfolio breakdown. |
| 12 | **filter** | `C3C1F5A1-D7B6-4BDF-A4AA-B2EFEE5DC3D6` | 1125 × 2436 | `src/app/(tabs)/profile.jsx` | Profile actions modal: "Change Profile Picture", "Upload Intro Video", "Logout". |
| 13 | **invite friend** | `B67BB7DE-05CC-4E0D-AC4D-C1A6679C130F` | 1125 × 2436 | `src/app/invite.jsx` | "Invite Friend" referral modal with email, custom message, and submit action. |
| 14 | **branding** | `E0F46DB4-B7E8-408F-A5C6-38DE31B59F71` | 800 × 600 | `src/theme.js` | Complete design system tokens and color hierarchy. |

---

## 💼 Design Tokens & Colors (Extracted from Sketch AST)

- **Primary Deep Teal**: `#165250`
- **Dark Forest**: `#0E4846`
- **Accent Teal**: `#38908C`
- **Secondary Slate**: `#2F778A`
- **Background**: `#F6F6F6` (Light) / `#111818` (Dark)
- **Text**: `#171717` / `#656565`

---

## 🚀 Running the App

```bash
# Start the Expo development server
npx expo start
```

<!-- run-locally:start -->

## ▶️ Run locally

```bash
npm install
npx expo start
```

Then press `i` for the iOS simulator, `a` for Android, or `w` for the web, or scan the QR code with Expo Go.

<!-- run-locally:end -->

---

<!-- design-credits:start -->

## 🎨 Design Credits

This app is based on the free **Job Seeking App** design by **Hassan Shabbir**, downloaded from Sketch App Sources. All visual design credit goes to the designer. It follows the design's screens, user flows and content; visual details (exact spacing, fonts, some colours and illustrations) are approximated and may differ from the original.

| | |
|---|---|
| Designer | [Hassan Shabbir](https://www.sketchappsources.com/contributor/hassanshabbir) |
| Original design | Job Seeking App |
| Downloaded from | [Sketch App Sources](https://www.sketchappsources.com/free-source/4742-job-seaking-app-sketch-freebie-resource.html) |
| Original file | `job-seaking-app-hassan-shabbir.sketch` |
| License / usage | Not stated on the source page. Free download; credit the designer (Sketch App Sources Terms) and confirm with them before commercial use. |

**Attribution:**

> UI design: "Job Seeking App" by Hassan Shabbir (https://www.sketchappsources.com/contributor/hassanshabbir), downloaded from Sketch App Sources (https://www.sketchappsources.com/free-source/4742-job-seaking-app-sketch-freebie-resource.html).

The original design source files are not included in this repository; get them from the links above. This app's **code** is released under the [MIT License](./LICENSE); the visual design remains the designer's (see [NOTICE](./NOTICE)).

Photos, brand logos and avatars inside the design may belong to third parties and are not covered by the designer's permission.

<!-- design-credits:end -->
