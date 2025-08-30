import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-10 px-6 bg-card relative border-t border-border mt-12">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left Section - Branding */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold text-primary">Nusrah Naeem</h3>
          <p className="text-muted-foreground text-sm">
            Turning ideas into beautiful, functional, and user-friendly websites 🚀
          </p>
        </div>

        {/* Right Section - Back to Top */}
        <a
          href="#hero"
          className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors shadow-md"
        >
          <ArrowUp size={22} />
        </a>
      </div>

      {/* Bottom Section - Creative Text */}
      <div className="text-center mt-6 border-t border-border pt-4 text-sm text-muted-foreground">
        <p>
          {/* &copy; {new Date().getFullYear()} <span className="font-semibold">Nusrah Naeem</span> ·   */}
          Crafted with React ⚛️ ·  
          <span className="text-primary font-medium"> Keep Building, Keep Learning!</span>
        </p>
      </div>
    </footer>
  );
};

// import { ArrowUp } from "lucide-react";

// export const Footer = () => {
//   return (
//     <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center">
//       {" "}
//       <p className="text-sm text-muted-foreground">
//         {" "}
//         &copy; {new Date().getFullYear()} Pedrotech.co. All rights reserved.
//       </p>
//       <a
//         href="#hero"
//         className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
//       >
//         <ArrowUp size={20} />
//       </a>
//     </footer>
//   );
// };