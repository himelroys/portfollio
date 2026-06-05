import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Case Study | Himel Roy",
};

export default function CaseStudyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#0F0F23] text-white">
      {/* Back Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0F0F23]/90 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16">
            <Link
              href="/#portfolio"
              className="flex items-center gap-2 text-light-gray hover:text-gold transition-colors"
            >
              <ArrowLeft size={18} />
              <span className="text-sm font-medium">Back to Portfolio</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className="pt-16">{children}</main>
    </div>
  );
}
