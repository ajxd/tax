// app/layout.tsx (or wherever your RootLayout lives)
"use client";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body className="relative min-h-screen overflow-x-hidden">
        {/* 1) Blurred background video */}
        <video
          className="absolute inset-0 w-full h-full object-cover filter blur-sm"
          src="/banner-bg.mp4"
          autoPlay
          muted
          loop
          playsInline
        />

        {/* 2) Dark + blur overlay */}
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm pointer-events-none z-10" />

        {/* 3) Your page content */}
        <div className="relative z-30">
          {children}
        </div>
      </body>
    </html>
  );
}
