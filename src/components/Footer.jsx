import { ArrowUp } from "lucide-react";

export const Footer = (
  { scrollFix } // Assuming scrollFix is a function passed as a prop for smooth scrolling
) => {
  return (
    <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center">
      {" "}
      <p className="text-sm text-muted-foreground">
        {" "}
        &copy; {new Date().getFullYear()} All rights reserved.
      </p>
      <button
         onClick={() => scrollFix("hero")}
        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
};
