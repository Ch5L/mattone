'use client';

export default function ScrollContainer({ children }: { children: React.ReactNode }) {
  return (
    <div id="scroll-container" className="mt-14 md:mt-16 h-[calc(100vh-3.5rem)] supports-[height:100svh]:h-[calc(100svh-3.5rem)] supports-[height:100dvh]:h-[calc(100dvh-3.5rem)] md:h-[calc(100dvh-4rem)] overflow-y-auto overflow-x-hidden overscroll-y-contain bg-mattone-light dark:bg-[#1a1410]">
      {children}
    </div>
  );
}
