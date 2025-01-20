import Logo from "../assets/logo-a.png";
import avatar from "../assets/Avatar.png";
const Testimonials = () => {
  return (
    <div className="w-full  py-16 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <div className="mb-6">
          <img src={Logo} alt="Logo" className="mx-auto h-8 object-contain" />
        </div>
        <blockquote className="text-2xl font-semibold text-[#101828] mb-8">
          &quot;We’ve been using Untitled to kickstart every new project and
          can’t imagine working without it.&quot;
        </blockquote>
        <div className="flex flex-col items-center gap-4">
          <img
            src={avatar}
            alt="Candice Wu img"
            className="w-12 h-12 rounded-full object-cover"
          />
          <div className="text-center">
            <p className="text-lg font-medium text-[#101828]">Candice Wu</p>
            <p className="text-sm text-[#475467]">Product Manager, Sisyphus</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
