import Image from "next/image";
import Button from "./Button";

export default function Footer() {
  return (
    <footer className="border-t border-[#1a1a1a] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <Image
              src="/meridian_labs_logo_wide.png"
              alt="Meridian Labs"
              width={240}
              height={60}
              className="h-12 w-auto opacity-80"
            />
            <p className="text-[#666] text-sm">
              © {new Date().getFullYear()} Meridian Labs. All rights reserved.
            </p>
          </div>
          <Button href="#contact" variant="secondary">
            Schedule a call
          </Button>
        </div>
      </div>
    </footer>
  );
}

