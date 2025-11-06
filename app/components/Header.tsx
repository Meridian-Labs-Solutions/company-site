import Image from "next/image";
import Button from "./Button";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[#0a0a0a]/80 border-b border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Image
              src="/meridian_labs_logo_wide.png"
              alt="Meridian Labs"
              width={300}
              height={80}
              className="h-16 md:h-20 w-auto"
              priority
            />
          </div>
          <div className="hidden md:block">
            <Button href="#contact" variant="secondary">
              Book Consultation
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
