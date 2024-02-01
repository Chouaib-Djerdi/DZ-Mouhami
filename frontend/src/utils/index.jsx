import { FaUsers } from "react-icons/fa6";
import { avocatPfp, sideImageOne, sideImageTwo } from "../assets/images";

export const footerLinks = [
  {
    title: "Location Populaire",
    links: [
      { name: "Setif", link: "/" },
      { name: "Bejaia", link: "/" },
      { name: "Bougaa", link: "/" },
      { name: "Marj Ouaman", link: "/" },
      { name: "Rassi Dour", link: "/" },
      { name: "Tandja", link: "/" },
    ],
  },
  {
    title: "Aide",
    links: [
      { name: "À propos de nous", link: "/" },
      { name: "FAQs", link: "/" },
      { name: "Comment ça marche", link: "/" },
      { name: "Politique de confidentialité", link: "/" },
      { name: "Politique de paiement", link: "/" },
    ],
  },
  {
    title: "Contactez-nous",
    links: [
      { name: "client@dzmouhami.com", link: "mailto:client@dzmouhami.com" },
      { name: "+92554862354", link: "tel:+92554862354" },
    ],
  },
];

export const plans = [
  {
    title: "Plan Base",
    price: "6000",
    options: [
      { label: "Votre site en ligne", value: true },
      { label: "Votre propre design", value: true },
      { label: "Site en 2 langues", value: false },
      { label: "Emails illimités", value: true },
      { label: "Certificat SSL (sécurité)", value: true },
      { label: "Profile sur l'annuaire DZ-M", value: true },
      { label: "Génération de prospects", value: false },
      { label: "CRM pour vos contacts", value: false },
      { label: "Hébergement inclu", value: true },
    ],
  },
  {
    title: "Plan Pro",
    price: "9000",
    options: [
      { label: "Votre site en ligne", value: true },
      { label: "Votre propre design", value: true },
      { label: "Site en 2 langues", value: true },
      { label: "Emails illimités", value: true },
      { label: "Certificat SSL (sécurité)", value: true },
      { label: "Profile sur l'annuaire DZ-M", value: true },
      { label: "Génération de prospects", value: true },
      { label: "CRM pour vos contacts", value: false },
      { label: "Hébergement inclu", value: true },
    ],
  },
  {
    title: "Plan Ultime",
    price: "15000",
    options: [
      { label: "Votre site en ligne", value: true },
      { label: "Votre propre design", value: true },
      { label: "Site en 2 langues", value: true },
      { label: "Emails illimités", value: true },
      { label: "Certificat SSL (sécurité)", value: true },
      { label: "Profile sur l'annuaire DZ-M", value: true },
      { label: "Génération de prospects", value: true },
      { label: "CRM pour vos contacts", value: true },
      { label: "Hébergement inclu", value: true },
    ],
  },
];

export const components = [
  {
    title: "Profil de l'Avocat",
    href: "/docs/primitives/profil-avocat",
    description:
      "Un profil détaillé de chaque avocat, y compris leur éducation, expérience et domaines d'expertise.",
  },
  {
    title: "Études de Cas",
    href: "/docs/primitives/etudes-de-cas",
    description:
      "Descriptions détaillées des affaires précédentes que le cabinet a traitées, démontrant leur expertise et leur succès.",
  },
  {
    title: "Services Juridiques",
    href: "/docs/primitives/services-juridiques",
    description:
      "Une liste complète des services offerts par le cabinet, tels que le contentieux, le droit des sociétés, les préjudices corporels, etc.",
  },
  {
    title: "Témoignages des Clients",
    href: "/docs/primitives/temoignages-clients",
    description: "Retours et avis des clients précédents.",
  },
  {
    title: "Actualités Juridiques",
    href: "/docs/primitives/actualites-juridiques",
    description:
      "Mises à jour sur les actualités juridiques récentes et comment elles pourraient impacter les clients.",
  },
  {
    title: "Contactez-Nous",
    href: "/docs/primitives/contactez-nous",
    description:
      "Informations sur comment contacter le cabinet, y compris un formulaire pour que les clients potentiels puissent entrer en contact.",
  },
];

export const wilayas = [
  { id: "1", code: "1", nom: "Adrar" },
  { id: "2", code: "2", nom: "Chlef" },
  { id: "3", code: "3", nom: "Laghouat" },
  { id: "4", code: "4", nom: "Oum El Bouaghi" },
  { id: "5", code: "5", nom: "Batna" },
  { id: "6", code: "6", nom: "B\u00e9ja\u00efa" },
  { id: "7", code: "7", nom: "Biskra" },
  { id: "8", code: "8", nom: "B\u00e9char" },
  { id: "9", code: "9", nom: "Blida" },
  { id: "10", code: "10", nom: "Bouira" },
  { id: "11", code: "11", nom: "Tamanrasset" },
  { id: "12", code: "12", nom: "T\u00e9bessa" },
  { id: "13", code: "13", nom: "Tlemcen" },
  { id: "14", code: "14", nom: "Tiaret" },
  { id: "15", code: "15", nom: "Tizi Ouzou" },
  { id: "16", code: "16", nom: "Alger" },
  { id: "17", code: "17", nom: "Djelfa" },
  { id: "18", code: "18", nom: "Jijel" },
  { id: "19", code: "19", nom: "S\u00e9tif" },
  { id: "20", code: "20", nom: "Sa\u00efda" },
  { id: "21", code: "21", nom: "Skikda" },
  { id: "22", code: "22", nom: "Sidi Bel Abb\u00e8s" },
  { id: "23", code: "23", nom: "Annaba" },
  { id: "24", code: "24", nom: "Guelma" },
  { id: "25", code: "25", nom: "Constantine" },
  { id: "26", code: "26", nom: "M\u00e9d\u00e9a" },
  { id: "27", code: "27", nom: "Mostaganem" },
  { id: "28", code: "28", nom: "M'Sila" },
  { id: "29", code: "29", nom: "Mascara" },
  { id: "30", code: "30", nom: "Ouargla" },
  { id: "31", code: "31", nom: "Oran" },
  { id: "32", code: "32", nom: "El Bayadh" },
  { id: "33", code: "33", nom: "Illizi" },
  { id: "34", code: "34", nom: "Bordj Bou Arreridj" },
  { id: "35", code: "35", nom: "Boumerd\u00e8s" },
  { id: "36", code: "36", nom: "El Tarf" },
  { id: "37", code: "37", nom: "Tindouf" },
  { id: "38", code: "38", nom: "Tissemsilt" },
  { id: "39", code: "39", nom: "El Oued" },
  { id: "40", code: "40", nom: "Khenchela" },
  { id: "41", code: "41", nom: "Souk Ahras" },
  { id: "42", code: "42", nom: "Tipaza" },
  { id: "43", code: "43", nom: "Mila" },
  { id: "44", code: "44", nom: "A\u00efn Defla" },
  { id: "45", code: "45", nom: "Na\u00e2ma" },
  { id: "46", code: "46", nom: "A\u00efn T\u00e9mouchent" },
  { id: "47", code: "47", nom: "Gharda\u00efa" },
  { id: "48", code: "48", nom: "Relizane" },
];

export const profile = {
  id: 1,
  name: "Ibrahim Hechmann",
  location: "Hechama, Setif",
  rating: 4,
  pfp: avocatPfp,
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sunt dolore natus quibusdam laudantium hic nemo, soluta sequi architecto rem impedit repudiandae et corporis eos nihil beatae, maxime velit. Libero.",
  categories: ["Droit administratif", "Droit Affaires", "Droit civil"],
  create_time: "January 5, 2024, 10:30 AM",
  urls: ["https://web.facebook.com/", "https://github.com/"],
};

export const listOfProfiles = [profile, profile, profile];

export const CategoryOptions = [
  { value: "civil", label: "Civil Law" },
  { value: "criminal", label: "Criminal Law" },
  { value: "family", label: "Family Law" },
];

export const WorkingDaysOptions = [
  { value: "dimanche", label: "Dimanche" },
  { value: "lundi", label: "Lundi" },
  { value: "mardi", label: "Mardi" },
  { value: "mercredi", label: "Mercredi" },
  { value: "jeudi", label: "Jeudi" },
  { value: "venderedi", label: "Venderedi" },
  { value: "samedi", label: "Samedi" },
];

export const WorkingHoursOptions = [
  { value: "8-10", label: "8h-10h" },
  { value: "10-12", label: "10h-12h" },
  { value: "14-16", label: "14h-16h" },
  { value: "16-18", label: "16h-18h" },
  { value: "18-20", label: "18h-20h" },
];

export const stats = [
  {
    title: "Nombre de Commentaires",
    nombre: "200",
    unit: "commentaires",
    icon: <FaUsers />,
    report: "+20,1% par rapport au mois dernier",
  },
  {
    title: "Nombre de Commentaires",
    nombre: "200",
    unit: "commentaires",
    icon: <FaUsers />,
    report: "+20,1% par rapport au mois dernier",
  },
  {
    title: "Nombre de Commentaires",
    nombre: "200",
    unit: "commentaires",
    icon: <FaUsers />,
    report: "+20,1% par rapport au mois dernier",
  },
  {
    title: "Nombre de Commentaires",
    nombre: "200",
    unit: "commentaires",
    icon: <FaUsers />,
    report: "+20,1% par rapport au mois dernier",
  },
];

export const list_rdvs = [
  {
    name: "Raid Salhi",
    title: "J'ai un énorme conflit familial à propos de l'héritage",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, numquam qui eligendi hic blanditiis fuga voluptatum, facere tempora eos neque velit quod nesciunt iste cumque dolorem, totam temporibus. Architecto, recusandae!",
    date: new Date(),
    time: "10h-12h",
  },
  {
    name: "Raid Salhi",
    title: "J'ai un énorme conflit familial à propos de l'héritage",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, numquam qui eligendi hic blanditiis fuga voluptatum, facere tempora eos neque velit quod nesciunt iste cumque dolorem, totam temporibus. Architecto, recusandae!",
    date: new Date(),
    time: "10h-12h",
  },
  {
    name: "Raid Salhi",
    title: "J'ai un énorme conflit familial à propos de l'héritage",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, numquam qui eligendi hic blanditiis fuga voluptatum, facere tempora eos neque velit quod nesciunt iste cumque dolorem, totam temporibus. Architecto, recusandae!",
    date: new Date(),
    time: "10h-12h",
  },
  {
    name: "Raid Salhi",
    title: "J'ai un énorme conflit familial à propos de l'héritage",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, numquam qui eligendi hic blanditiis fuga voluptatum, facere tempora eos neque velit quod nesciunt iste cumque dolorem, totam temporibus. Architecto, recusandae!",
    date: new Date(),
    time: "10h-12h",
  },
  {
    name: "Raid Salhi",
    title: "J'ai un énorme conflit familial à propos de l'héritage",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, numquam qui eligendi hic blanditiis fuga voluptatum, facere tempora eos neque velit quod nesciunt iste cumque dolorem, totam temporibus. Architecto, recusandae!",
    date: new Date(),
    time: "10h-12h",
  },
  {
    name: "Raid Salhi",
    title: "J'ai un énorme conflit familial à propos de l'héritage",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, numquam qui eligendi hic blanditiis fuga voluptatum, facere tempora eos neque velit quod nesciunt iste cumque dolorem, totam temporibus. Architecto, recusandae!",
    date: new Date(),
    time: "10h-12h",
  },
];

export const services = [
  {
    title: "rencontrez nos meilleurs avocats disponibles en Algérie",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facerererum reprehenderit nam blanditiis pariatur magnam ex inventore cupiditate vel accusantium fuga explicabo tenetur ipsa deleniti consequatur quia, veritatis praesentium voluptatibus!",
    imgUrl: sideImageOne,
  },
  {
    title: "rencontrez nos meilleurs avocats disponibles en Algérie",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facerererum reprehenderit nam blanditiis pariatur magnam ex inventore cupiditate vel accusantium fuga explicabo tenetur ipsa deleniti consequatur quia, veritatis praesentium voluptatibus!",
    imgUrl: sideImageTwo,
  },
];

export const Avocat = {
  firstName: "Chouaib",
  lastName: "Djerdi",
  emailAddress: "djerdichouaib@gmail.com",
  phoneNumber: "0552759288",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse cursus maximus enim, id fermentum est dignissim eu. Vivamus hendrerit feugiat pretium. Quisque commodo justo at facilisis congue. Aliquam consectetur quam eget imperdiet consequat. Sed convallis metus at faucibus mollis.",
  positionLatLng: {
    lat: 0,
    lng: 0,
    address: "Rue Hachemi Talbi 86, Setif",
  },
  password: "123456789",
  passwordConfirm: "123456789",
  pfp: avocatPfp,
  categories: [
    {
      value: "Droit Civil",
      label: "Civil Law",
    },
  ],
  workingDays: [
    {
      value: "dimanche",
      label: "Dimanche",
    },
    {
      value: "lundi",
      label: "Lundi",
    },
    {
      value: "mardi",
      label: "Mardi",
    },
    {
      value: "mercredi",
      label: "Mercredi",
    },
    {
      value: "jeudi",
      label: "Jeudi",
    },
  ],
  workingHours: [
    {
      value: "8-10",
      label: "8h-10h",
    },
    {
      value: "10-12",
      label: "10h-12h",
    },
    {
      value: "14-16",
      label: "14h-16h",
    },
  ],
  urls: [
    {
      value: "https://www.facebook.com/",
    },
  ],
  rating: 0,
  commentsNumber: 0,
  plan: "Plan Base",
  ratings: {
    rating: 1.0,
    commentsNumber: 1,
    fivePercentage: 0,
    fourPercentage: 0,
    threePercentage: 0,
    twoPercentage: 0,
    onePercentage: 100,
  },
  comments: [
    {
      username: "chouaib4",
      rating: 1,
      title: "Un soutien incroyable dans une affaire hautement conflictuelle",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sunt dolore natus quibusdam laudantium hic nemo, soluta sequi architecto rem impedit repudiandae et corporis eos nihil beatae, maxime velit. Libero.",
      timestamp: "Janvier 27, 2024",
    },
  ],
};

export const Avocats = [Avocat];

export const comments = [];
