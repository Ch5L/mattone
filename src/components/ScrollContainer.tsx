'use client';

export default function ScrollContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-14 md:mt-16 h-[calc(100vh-3.5rem)] md:h-[calc(100dvh-4rem)] overflow-y-auto overflow-x-hidden bg-mattone-light dark:bg-[#1a1410]">
      {children}
    </div>
  );
}
