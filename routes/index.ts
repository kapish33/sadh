interface Route {
  path: string;
  name: string;
}

export const routes: Record<string, Route> = {
  home: {
    path: "/",
    name: "Home",
  },
  outTeam: {
    path: "/out-team",
    name: "Out Team",
  },
  // Work SubPath ENds
  about: {
    path: "/about",
    name: "About",
  },
  contact: {
    path: "/contact-us",
    name: "Contact us",
  },
  blogs: {
    path: "/blogs",
    name: "Blogs",
  },
  terms: {
    path: "/terms",
    name: "Terms & Conditions",
  },
  dashboard: {
    path: "/dashboard",
    name: "Admin Dashboard",
  },
};

export const appRoutesPages: Record<string, Route[]> = {
  footer: [
    routes.home,
    routes.outTeam,
    routes.about,
    routes.blogs,
    routes.contact,
    {
      path: "https://www.facebook.com/manavsachdevdesignstudio",
      name: "Facebook",
    },
    {
      path: "https://www.instagram.com/manavsachdevdesignstudio",
      name: "Instagram",
    },
    {
      path: "https://www.behance.net/manavs",
      name: "Behance",
    },
    {
      path: "https://www.linkedin.com/in/manavsachdevdesign",
      name: "LinkedIn",
    },
  ],
};
