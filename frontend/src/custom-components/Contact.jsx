import { Button } from "@/components/ui/button";
import { globalIcon } from "../assets/icons";

const Contact = ({ phoneNumber, location }) => {
  return (
    <div className="space-y-5" id="contact">
      <div className="flex gap-2 border-l-4 border-primary pl-2">
        <img src={globalIcon} alt="contact-icon" />
        <h1 className="text-xl font-semibold">Contact</h1>
      </div>
      <p className="font-semibold">Location :</p>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1135.4797852023378!2d5.409203721080299!3d36.185814585384755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12f3159e73bf4871%3A0xdf60fb1e191dd125!2sStade%20Med%20Guessab%2C%20Ave%20Colonel%20Loth%2C%20Setif!5e0!3m2!1sen!2sdz!4v1703687904798!5m2!1sen!2sdz"
        width="800"
        height="400"
        loading="lazy"
      ></iframe>
      <div className="flex justify-between">
        <div className="space-y-2">
          <div className="flex flex-col">
            <a href="">Tel : {phoneNumber}</a>
            <a href="">Fax : {phoneNumber}</a>
          </div>
          <div>
            <div>{location}</div>
            <div>Suite 1217 IBM Building Seattle,</div>
            <div>WA, 98101</div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <Button variant="">Message</Button>
          <Button variant="outline">Obtenir des directions</Button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
