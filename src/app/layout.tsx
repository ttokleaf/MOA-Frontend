import type { Metadata } from 'next';
import localFont from 'next/font/local';
import '@/styles/globals.css';

const pretendard = localFont({
  src: [{ path: '../assets/fonts/PretendardVariable.woff2', style: 'normal', weight: '100 900' }],
  display: 'swap',
  fallback: ['system-ui', 'Arial', 'sans-serif'],
});

export const metadata: Metadata = {
  title: 'MOA',
  description: '함께 모으는 우리만의 기록, 공유 가계부 MOA',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={pretendard.className}>
      <body className="antialiased">
        <div className="drop-shadow-brand bg-bg flex h-dvh justify-center md:drop-shadow-none">
          <div className="w-full max-w-[var(--layout-width)]">{children}</div>
        </div>
      </body>
    </html>
  );
}
