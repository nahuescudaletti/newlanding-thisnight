import { RiInstagramLine, RiLinkedinBoxFill, RiMailLine, RiMapPinLine, RiTiktokFill, RiWhatsappLine } from "react-icons/ri";

export const footerSocialNetworks = [
  {
    id: 1,
    icon: <RiInstagramLine />,
    link: "https://www.instagram.com/thisnight.official/"
  },
  {
    id: 2,
    icon: <RiTiktokFill />,
    link: "https://www.tiktok.com/@thisnight.official?lang=es"
  },
  {
    id: 3,
    icon: <RiWhatsappLine />,
    link: "https://api.whatsapp.com/send/?phone=5493404418576&text&type=phone_number&app_absent=0"
  },
  {
    id: 4,
    icon: <RiMapPinLine />,
    link: "https://www.google.com/maps/place/Rivadavia+607,+San+Carlos+Centro,+Santa+Fe/@-31.72808,-61.0901485,17z/data=!3m1!4b1!4m5!3m4!1s0x95b59d9efa8790cf:0xdce5e0f9a655b44a!8m2!3d-31.72808!4d-61.0901485?hl=es-MX&entry=ttu" // Reemplaza con la URL de Google Maps
  },
  {
    id: 5,
    icon: <RiMailLine />,
    link: "mailto:thisnight.official@gmail.com" // Reemplaza con tu dirección de correo
  }
];
export const dataFooter = [
  {
    id: 1,
    name: 'Home',
    idLink: "#home"
  },
  {
    id: 2,
    name: 'Módulos',
    idLink: "#products"
  },
  {
    id: 3,
    name: 'Experiencias',
    idLink: "#experiencias"
  },
];