import img from "../assets/logo.png";

const Footer = () => {
  const navigationLinks = [
    {
      category: "Product",
      links: [
        { name: "Overview" },
        { name: "Features" },
        { name: "Solutions", badge: "New" },
        { name: "Tutorials" },
        { name: "Pricing" },
        { name: "Releases" },
      ],
    },
    {
      category: "Company",
      links: [
        { name: "About us" },
        { name: "Careers" },
        { name: "Press" },
        { name: "News" },
        { name: "Media kit" },
        { name: "Contact" },
      ],
    },
    {
      category: "Resources",
      links: [
        { name: "Blog" },
        { name: "Newsletter" },
        { name: "Events" },
        { name: "Help centre" },
        { name: "Tutorials" },
        { name: "Support" },
      ],
    },
    {
      category: "Use cases",
      links: [
        { name: "Startups" },
        { name: "Enterprise" },
        { name: "Government" },
        { name: "SaaS centre" },
        { name: "Marketplaces" },
        { name: "Ecommerce" },
      ],
    },
    {
      category: "Social",
      links: [
        { name: "Twitter" },
        { name: "LinkedIn" },
        { name: "Facebook" },
        { name: "GitHub" },
        { name: "AngelList" },
        { name: "Dribbble" },
      ],
    },
    {
      category: "Legal",
      links: [
        { name: "Terms" },
        { name: "Privacy" },
        { name: "Cookies" },
        { name: "Licenses" },
        { name: "Settings" },
        { name: "Contact" },
      ],
    },
  ];

  return (
    <footer className="border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">
          {navigationLinks.map((section) => (
            <div key={section.category}>
              <h3 className="text-sm font-semibold text-gray-900">
                {section.category}
              </h3>
              <ul className="mt-4 space-y-4">
                {section.links.map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-sm text-gray-600 hover:text-[#E63F3A] transition-colors inline-flex items-center"
                    >
                      {link.name}
                      {link.badge && (
                        <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          {link.badge}
                        </span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <img src={img} alt="logo" />
            </div>
            <p className="text-sm text-gray-500">
              © 2077 zysktechnologies. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
