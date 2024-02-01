import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import { Button } from "@/components/ui/button";
import ListItem from "./ListItem";
import { Link } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import { components } from "../utils";
import { postUserCred } from "../utils/fetchAPI";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { FaScaleBalanced, FaAnglesDown } from "react-icons/fa6";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="lg:px-40 md:px-20 px-5 py-3 flex justify-between items-center border-b-2">
      <Link to="/">
        <div className="flex items-center gap-1">
          <FaScaleBalanced size={24} />
          <h1 className="font-bold text-xl">DZ-MOUHAMI</h1>
        </div>
      </Link>

      <div className="md:hidden">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? (
            <IoCloseSharp className="h-6 w-6" />
          ) : (
            <GiHamburgerMenu className="h-6 w-6" />
          )}
        </button>
      </div>

      <div className={`${isMenuOpen ? "flex" : "hidden"} md:flex gap-36`}>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Avocat Informaions</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/"
                      >
                        <div className="mb-2 mt-4 text-lg font-medium">
                          <FaScaleBalanced />
                          DZ-MOUHAMI
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Bienvenue sur le site web de notre cabinet d’avocats,
                          votre source fiable pour des conseils juridiques
                          experts
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <ListItem href="/docs" title="Rencontrez Nos Avocats">
                    Découvrez nos avocats à travers leurs profils détaillés
                  </ListItem>
                  <ListItem href="/docs/installation" title="Études de Cas">
                    Explorez nos études de cas pour comprendre notre expertise
                    et notre succès
                  </ListItem>
                  <ListItem
                    href="/docs/primitives/typography"
                    title="Services Juridiques"
                  >
                    Consultez nos services juridiques pour découvrir comment
                    nous pouvons vous aider
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>FAQ Gratuits</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {components.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex gap-2">
          <Link to="/offers">
            <Button className="gap-1">
              <FaAnglesDown size={14} />
              Etre un Avocat
            </Button>
          </Link>
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              // get Credential
              console.log(credentialResponse);

              postUserCred(credentialResponse)
                .then((response) => {
                  // handle successful login
                  console.log(response);
                })
                .catch((error) => {
                  // handle error
                  console.log(error);
                });
            }}
            onError={() => {
              console.log("Login Failed");
            }}
            useOneTap
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
