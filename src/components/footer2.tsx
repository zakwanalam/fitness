import { BicepsFlexed } from "lucide-react";

interface MenuItem {
  title: string;
  links: {
    text: string;
    url: string;
  }[];
}

interface Footer2Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  tagline?: string;
  menuItems?: MenuItem[];
  copyright?: string;
  bottomLinks?: {
    text: string;
    url: string;
  }[];
}

const Footer2 = ({
  logo = {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-1.svg",
    alt: "blocks for shadcn/ui",
    title: "Bravo Gym",
    url: "https://www.shadcnblocks.com",
  },
  tagline = "Unleash the Athlete in You.",
   menuItems = [
    {
      title: "Programs",
      links: [
        { text: "Strength Training", url: "#" },
        { text: "Cardio & Conditioning", url: "#" },
        { text: "Nutrition Plans", url: "#" },
        { text: "Personal Coaching", url: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { text: "Blog", url: "#" },
        { text: "Schedule", url: "#" },
        { text: "Community", url: "#" },
        { text: "Goals Tracker", url: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { text: "Pricing", url: "#" },
        { text: "Contact", url: "#" },
      ],
    },
  ],
  
  copyright = "© 2025 BravoGym.com. All rights reserved.",
  bottomLinks = [
    { text: "Terms and Conditions", url: "#" },
    { text: "Privacy Policy", url: "#" },
  ],
}: Footer2Props) => {
  return (
    <section className="py-20 ">
      <div className="container">
        <footer>
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-6">
            <div className="col-span-2 mb-8 lg:mb-0">
              <div className="flex items-center gap-2 lg:justify-start">
                <a href="https://shadcnblocks.com">
                  <BicepsFlexed
                    className="size-9"
                  />
                </a>
                <p className="text-xl font-semibold">{logo.title}</p>
              </div>
              <p className="mt-4 font-bold">{tagline}</p>
            </div>
            {menuItems.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-4 font text-md font-bold">{section.title}</h3>
                <ul className="space-y-4 ">
                  {section.links.map((link, linkIdx) => (
                    <li
                      key={linkIdx}
                      className="font-medium"
                    >
                      <a   href={link.url}>{link.text}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-24 flex flex-col justify-between gap-4 border-t pt-8 text-sm font-medium  md:flex-row md:items-center">
            <p>{copyright}</p>
            <ul className="flex gap-4">
              {bottomLinks.map((link, linkIdx) => (
                <li key={linkIdx} className="underline hover:text-black">
                  <a href={link.url}>{link.text}</a>
                </li>
              ))}
            </ul>
          </div>
        </footer>
      </div>
    </section>
  );
};

export { Footer2 };
