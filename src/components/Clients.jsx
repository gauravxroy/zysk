import LogoA from "../assets/a.png";
import LogoB from "../assets/b.png";
import LogoC from "../assets/c.png";
import LogoD from "../assets/d.png";
import LogoE from "../assets/e.png";
import LogoF from "../assets/f.png";
const Clients = () => {
  return (
    <section className="py-12 bg-white sm:py-16 lg:py-20">
      <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-medium text-gray-500">
            Join 4,000+ companies already growing
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 mt-8 sm:grid-cols-3 lg:grid-cols-6">
          {/* Logo A */}
          <div className="flex items-center justify-center h-16  rounded-md">
            <img src={LogoA} alt="Logo A" className="h-10 object-contain" />
          </div>

          {/* Logo B */}
          <div className="flex items-center justify-center h-16  rounded-md">
            <img src={LogoB} alt="Logo B" className="h-10 object-contain" />
          </div>

          {/* Logo C */}
          <div className="flex items-center justify-center h-16  rounded-md">
            <img src={LogoC} alt="Logo C" className="h-10 object-contain" />
          </div>

          {/* Logo D */}
          <div className="flex items-center justify-center h-16  rounded-md">
            <img src={LogoD} alt="Logo D" className="h-10 object-contain" />
          </div>

          {/* Logo E */}
          <div className="flex items-center justify-center h-16  rounded-md">
            <img src={LogoE} alt="Logo E" className="h-10 object-contain" />
          </div>

          {/* Logo F */}
          <div className="flex items-center justify-center h-16  rounded-md">
            <img src={LogoF} alt="Logo F" className="h-10 object-contain" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
