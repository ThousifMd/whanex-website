import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export default function Section({ children, className = '', id }: SectionProps) {
  return (
    <section id={id} className={`py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-8 ${className}`}>
      <div className="max-w-7xl mx-auto w-full">
        {children}
      </div>
    </section>
  );
}
