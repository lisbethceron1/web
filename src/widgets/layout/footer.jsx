import PropTypes from "prop-types";
import { Typography, IconButton } from "@material-tailwind/react";

const year = new Date().getFullYear();

export function Footer({ title, description, socials, menus, copyright }) {
  return (
    <footer className="relative px-1 pt-5 pb-7 rounded-lg shadow-xl" style={{ backgroundColor: '#1AA7F6', color: 'white',boxShadow: '0px 10px 15px -3px rgba(4, 0, 0, 0.6), 0px 4px 6px -2px rgba(4, 0, 0, 0.09)'  }}>
      <div className="container mx-auto">
        <div className="flex flex-wrap pt-6 text-center lg:text-left">
          <div className="w-full px-4 lg:w-6/12">
            <Typography variant="h4" className="mb-4" color="blue-gray">
              {title}
            </Typography>
            <Typography style={{ color: 'white' }} className="font-normal text-blue-gray-500 lg:w-2/5">
              {description}
            </Typography>
            <div className="mx-auto mt-6 mb-8 flex justify-center gap-2 md:mb-0 lg:justify-start">
              {socials.map(({ color, name, path }) => (
                <a
                  key={name}
                  href={path}
                  target="_blank"
                  rel="noopener noreferrer"
                  
                >
                  <IconButton color="white" className="rounded-full shadow-none bg-transparent">
                    <Typography color={color} style={{ color: 'white' }}>
                      
                      <i className={`fa-brands fa-${name}`} />
                    </Typography>
                    
                  </IconButton>
                </a>
              ))}
            </div>
          </div>
          <div className="mx-auto mt-12 grid w-max grid-cols-2 gap-24 lg:mt-0">
            {menus.map(({ name, items }) => (
              <div key={name}>
                <Typography
                style={{ color: 'black' }}
                  variant="small"
                  color="blue-gray"
                  className="mb-2 block font-medium uppercase"
                >
                  {name}
                </Typography>
                <ul className="mt-3">
                  {items.map((item) => (
                    <li key={item.name}>
                      <Typography
                      style={{ color: 'white' }}
                        as="a"
                        href={item.path}
                        target="_blank"
                        rel="noreferrer"
                        variant="small"
                        className="mb-2 block font-normal text-blue-gray-500 hover:text-blue-gray-700"
                      >
                        {item.name}
                      </Typography>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <hr className="my-6 border-gray-300" />
        <div className="flex flex-wrap items-center justify-center md:justify-between">
          <div className="mx-auto w-full px-4 text-center">
            <Typography
            style={{ color: 'white' }}
              variant="small"
              className="font-normal text-blue-gray-500"
            >
              {copyright}
            </Typography>
          </div>
        </div>
      </div>
    </footer>
  );
}

Footer.defaultProps = {
  title: "Material Educatio",
  description:
    "Encuéntranos en nuestras diferentes redes sociales.",
  socials: [
    {
      color: "gray",
      name: "twitter",
      path: "https://github.com/lisbethceron1/web.git",
    },
    {
      color: "gray",
      name: "youtube",
      path: "https://github.com/lisbethceron1/web.git",
    },
    {
      color: "gray",
      name: "instagram",
      path: "https://github.com/lisbethceron1/web.git",
    },
    {
      color: "black",
      name: "github",
      path: "https://github.com/lisbethceron1/web.git",
    },
  ],
  menus: [
    {
      name: "Enlaces útiles",
      items: [
        { name: "Nosotros", path: "https://www.creative-tim.com/presentation" },
        { name: "Blog", path: "https://www.creative-tim.com/blog" },
        {
          name: "Github",
          path: "https://github.com/lisbethceron1/web.git",
        },
        // {
        //   name: "Free Products",
        //   path: "https://www.creative-tim.com/templates/free?ref=mtk",
        // },
      ],
    },
    {
      name: "Otros Recursos",
      items: [
        {
          name: "Licencia MIT",
          path: "https://github.com/creativetimofficial/material-tailwind/blob/main/LICENSE.md?ref=mtk",
        },
        {
          name: "Contribuir",
          path: "https://github.com/creativetimofficial/material-tailwind/blob/main/CONTRIBUTING.md?ref=mtk",
        },
        {
          name: "Registro de cambios",
          path: "https://github.com/creativetimofficial/material-tailwind/blob/main/CHANGELOG.md?ref=mtk",
        },
        {
          name: "Contáctanos",
          path: "https://creative-tim.com/contact-us?ref=mtk",
        },
      ],
    },
  ],
  copyright: (
    <>
      Copyright © {year} Educatio by{"  "}
      <a
        href="https://github.com/lisbethceron1/web.git"
        target="_blank"
        className="text-blue-gray-500 transition-colors hover:text-blue-500"
      >
         Team
      </a>
      .
    </>
  ),
};

Footer.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  socials: PropTypes.arrayOf(PropTypes.object),
  menus: PropTypes.arrayOf(PropTypes.object),
  copyright: PropTypes.node,
};

Footer.displayName = "/src/widgets/layout/footer.jsx";

export default Footer;
