interface Route {
  path: string;
  name: string;
  class?: string;
}

export const routes: Record<string, Route> = {
  home: {
    path: "/",
    name: "Home",
  },
  // Work SubPath ENds
  about: {
    path: "/about",
    name: "About",
  },
  product: {
    path: "/product",
    name: "Product",
  },
  contact: {
    path: "/contact",
    name: "Contact",
  },
  ourStory: {
    path: "/our-story",
    name: "Our Story",
  },
  terms: {
    path: "/contact",
    name: "Contact",
  },
  preorder: {
    path: "/preorder",
    name: "Preorder",
    class: "btn primary",
  },
  dashboard: {
    path: "/dashboard",
    name: "Admin Dashboard",
  },
};

export const appRoutesPages: Record<string, Route[]> = {
  footer: [
    routes.home,
    routes.about,
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
