import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row p-4 justify-between gap-8">
          <div className="flex-1">
            <Image src="/logo.png" alt="logo" width={200} height={200} className="object-cover mt-[-90px]" />
            <p className="text-white/60 mb-6 mt-[-50px]">
              Crafting digital excellence since 2020
            </p>
            <div className="flex gap-4">
              {['Twitter', 'LinkedIn', 'Instagram', 'Dribbble'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-all hover:scale-110"
                >
                  <span className="text-xs">{social[0]}</span>
                </a>
              ))}
            </div>
          </div>
          
          <div className="flex flex-1 justify-between gap-4">
            <div className="">
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-white/60">
              <li><a href="#" className="hover:text-white transition-colors">Strategy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Design</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Development</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Growth</a></li>
            </ul>
          </div>
          
          <div className="">
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-white/60">
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Work</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          </div>
          
          <div className="flex-1">
            <h4 className="font-semibold mb-4">Stay Updated</h4>
            <p className="text-white/60 text-sm mb-4">
              Get insights and updates delivered to your inbox
            </p>
            <div className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Enter email"
                className="flex-1 px-4 py-2 bg-white/5 border border-white/10 rounded-full focus:outline-none focus:border-white/30 transition-colors"
              />
              <button className="px-6 py-2 bg-white text-black rounded-full font-semibold hover:bg-white/90 transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40">
          <p>© 2026 Agency. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer
