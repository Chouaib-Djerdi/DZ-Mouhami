import { FaUsers } from "react-icons/fa6";
import { avocatPfp } from "../assets/images";

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

export const components = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

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

export const comments = [
  {
    username: "Chihab Hmz",
    rating: 4,
    title: "Un soutien incroyable dans une affaire hautement conflictuelle",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sunt dolore natus quibusdam laudantium hic nemo, soluta sequi architecto rem impedit repudiandae et corporis eos nihil beatae, maxime velit. Libero.",
    timestamp: "September 13, 2023",
  },
  {
    username: "Chihab Hmz",
    rating: 4,
    title: "Un soutien incroyable dans une affaire hautement conflictuelle",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sunt dolore natus quibusdam laudantium hic nemo, soluta sequi architecto rem impedit repudiandae et corporis eos nihil beatae, maxime velit. Libero.",
    timestamp: "September 13, 2023",
  },
];

export const ratings = {
  rating: 4.0,
  commentsNumber: 39,
  fivePercentage: 88,
  fourPercentage: 67,
  threePercentage: 44,
  twoPercentage: 32,
  onePercentage: 10,
};

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
