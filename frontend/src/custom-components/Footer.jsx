import { footerLinks } from "../utils";

const Footer = () => {
  return (
    <footer className="py-20 px-40 bg-primary">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
            <h1 className="font-bold text-white text-2xl">DZ-MOUHAMI</h1>
          </a>
          <p className="mt-6 text-base leading-7 font-montserrat text-white sm:max-w-sm">
            La justice est le pilier de la société. Laissez-nous être vos guides
            dans la quête de vos droits et de votre vérité
          </p>
        </div>

        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h4 className="text-white font-montserrat text-2xl leading-normal font-medium mb-6">
                {section.title}
              </h4>
              <ul>
                {section.links.map((link) => (
                  <li
                    key={link.name}
                    className="mt-3 text-white font-montserrat text-base leading-normal hover:text-slate-gray cursor-pointer"
                  >
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between text-white mt-24 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
          <p>© Droits d&apos;auteur. Tous droits réservés.</p>
        </div>
        <p className="font-montserrat cursor-pointer">Termes et Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;
