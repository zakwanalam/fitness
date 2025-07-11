import { Apple, BicepsFlexed, Book, CalendarCheck, Dumbbell, Goal, HeartPulse, Menu, UserRound,  Zap } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  ,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: React.ReactNode;
  items?: MenuItem[];
}

interface Navbar1Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  menu?: MenuItem[];
  auth?: {
    login: {
      title: string;
      url: string;
    };
    signup: {
      title: string;
      url: string;
    };
  };
}

const Navbar = ({
  logo = {
    url: "https://www.shadcnblocks.com",
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblockscom-icon.svg",
    alt: "logo",
    title: "Bravo Gym",
  },
  menu = [
    { title: "Home", url: "#" },
    {
      title: "Programs",
      url: "#",
      items: [
        {
          title: "Strength Training",
          description: "Build muscle and power with expert routines",
          icon: <Dumbbell className="size-5 shrink-0" />,
          url: "#",
        },
        {
          title: "Cardio & Conditioning",
          description: "Burn calories and boost endurance",
          icon: <HeartPulse className="size-5 shrink-0" />,
          url: "#",
        },
        {
          title: "Nutrition Plans",
          description: "Personalized meal plans to fuel your goals",
          icon: <Apple className="size-5 shrink-0" />,
          url: "#",
        },
        {
          title: "Personal Coaching",
          description: "1-on-1 sessions with certified trainers",
          icon: <UserRound className="size-5 shrink-0" />,
          url: "#",
        },
      ],
    },
    {
      title: "Resources",
      url: "#",
      items: [
        {
          title: "Blog",
          description: "Workout tips, recipes, and motivation",
          icon: <Book className="size-5 shrink-0" />,
          url: "#",
        },
        {
          title: "Schedule",
          description: "Book your spot in upcoming classes",
          icon: <CalendarCheck className="size-5 shrink-0" />,
          url: "#",
        },
        {
          title: "Community",
          description: "Connect with fellow fitness enthusiasts",
          icon: <Zap className="size-5 shrink-0" />,
          url: "#",
        },
        {
          title: "Goals Tracker",
          description: "Track progress and stay accountable",
          icon: <Goal className="size-5 shrink-0" />,
          url: "#",
        },
      ],
    },
    {
      title: "Pricing",
      url: "#",
    },
    {
      title: "Contact",
      url: "#",
    },
  ],
  auth = {
    login: { title: "Login", url: "#" },
    signup: { title: "Sign up", url: "#" },
  },
}: Navbar1Props) => {
  return (
    <section className="py-4 glass-nav  px-5">
      <div className="container">
        {/* Desktop Menu */}
        <nav className="hidden justify-between md:flex">
          <div className="flex items-center gap-6">
            {/* Logo */}
            <a href={logo.url} className="flex  items-center gap-2">
              <BicepsFlexed className="max-h-8 mix-blend-color-dodge " />
              <span className="text-lg  text-primary font-semibold tracking-tighter">
                {logo.title}
              </span>
            </a>
            <div className="flex  items-center">
              <NavigationMenu>
                <NavigationMenuList className="gap-1.5 text-black" >
                  {menu.map((item) => renderMenuItem(item))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Button asChild variant="dark" size="sm">
              <a href={auth.login.url}>{auth.login.title}</a>
            </Button>
            <Button asChild size="sm">
              <a href={auth.signup.url}>{auth.signup.title}</a>
            </Button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className="block mx-5 md:hidden">
          <div className="container flex items-center justify-between">
            {/* Logo */}
            <a href={logo.url} className="flex  items-center gap-2">
              <BicepsFlexed className="max-h-8 mix-blend-color-dodge " />
              <span className="text-lg  text-primary font-semibold tracking-tighter">
                {logo.title}
              </span>
            </a>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="bg-primary cursor-pointer" size="icon">
                  <Menu className="size-4 font-bold text-black" />
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto [&>button]:text-black">
                <SheetHeader>
                  <SheetTitle>
                    <a href={'#'} className="flex  items-center gap-2">
                      <BicepsFlexed className="max-h-8 text-black " />
                      <span className="text-lg  text-black font-semibold tracking-tighter">
                        {logo.title}
                      </span>
                    </a>
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-6 p-4">
                  <Accordion
                    type="single"
                    collapsible
                    className="flex w-full text-black flex-col gap-4"
                  >
                    {menu.map((item) => renderMobileMenuItem(item))}
                  </Accordion>

                  <div className="flex flex-col gap-3">
                    <Button className="hover:bg-gray-800" variant={'dark'} asChild >
                      <a href={auth.login.url}>{auth.login.title}</a>
                    </Button>
                    <Button  asChild>
                      <a href={auth.signup.url}>{auth.signup.title}</a>
                    </Button>
                  </div>
                </div>
              </SheetContent>

            </Sheet>
          </div>
        </div>
      </div>
    </section>
  );
};

const renderMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <NavigationMenuItem key={item.title}>
        <NavigationMenuTrigger className="bg-accent">{item.title}</NavigationMenuTrigger>
        <NavigationMenuContent className=" text-popover-foreground">
          {item.items.map((subItem) => (
            <NavigationMenuLink asChild key={subItem.title} className="w-full  ">
              <SubMenuLink item={subItem} />
            </NavigationMenuLink>
          ))}
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  return (
    <NavigationMenuItem className="" key={item.title}>
      <NavigationMenuLink
        href={item.url}
        className="group  inline-flex  w-max items-center justify-center text-black hover:text-accent-foreground rounded-md bg-accent px-4 py-2 text-sm font-medium transition-colors "
      >
        {item.title}
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
};

const renderMobileMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <AccordionItem key={item.title} value={item.title} className="border-none  ">
        <AccordionTrigger className="text-md px-1.5   py-0 outline-none text-gray-700 font-semibold hover:no-underline">
          {item.title}
        </AccordionTrigger>
        <AccordionContent className="mt-2 ">
          {item.items.map((subItem) => (
            <SubMenuLink  key={subItem.title} item={subItem} />
          ))}
        </AccordionContent>
      </AccordionItem>
    );
  }

  return (
    <a key={item.title} href={item.url} className="text-md text-black  font-semibold">
      {item.title}
    </a>
  );
};

const SubMenuLink = ({ item }: { item: MenuItem }) => {
  return (
    <a
      className="flex  flex-row gap-4  rounded-md w-full sm:w-60 p-3 leading-none no-underline transition-colors outline-none select-none hover:bg-muted hover:text-accent-foreground"
      href={item.url}
    >
      <div className="">{item.icon}</div>
      <div>
        <div className="text-sm font-semibold">{item.title}</div>
        {item.description && (
          <p className="text-sm leading-snug text-muted-foreground">
            {item.description}
          </p>
        )}
      </div>
    </a>
  );
};

export { Navbar };
