'use client';

export default function ScrollContainer({ children }: { children: React.ReactNode }) {
  return (
    <div id="scroll-container" className="fixed top-14 md:top-16 bottom-0 left-0 right-0 overflow-y-auto overflow-x-hidden overscroll-y-contain bg-mattone-light dark:bg-[#1a1410]">
      {children}
    </div>
  );
}
