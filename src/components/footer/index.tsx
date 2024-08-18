import GetStartedButton from "../get-started-button";
import shortly from '../../assets/Shortly.svg';
import facebook from '../../assets/facebook.svg';
import twitter from '../../assets/twitter.svg';
import pinterest from '../../assets/pinterest.svg';
import instagram from '../../assets/instagram.svg';
import IconLink from "./icon-link";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";

export default function Footer() {
  const sessionState = useSelector((state: RootState) => state.session);

  return (
    <footer>
      {
        !sessionState.currentUser && (
          <div className="bg-purple-bg text-white px-4 py-14 flex flex-col items-center">
            <h3 className="font-sans text-light-purple font-bold text-3xl xl:text-5xl">Boost your links today</h3>
            <GetStartedButton/>
          </div>
        )
      }

      <div className="bg-dark-grey py-20">
        <div className="max-xl:w-full xl:max-w-[1110px] flex max-xl:flex-col xl:justify-between max-xl:gap-12 max-xl:align-middle max-xl:items-center mx-auto">
          <div>
            <img src={shortly} alt="shortly footer logo" />
          </div>

          <div className="flex max-xl:flex-col max-xl:gap-10 xl:gap-20">
            <div className="flex flex-col max-xl:items-center gap-2.5">
              <h4 className="font-sans text-white font-bold text-base mb-3">Features</h4>
              <a href="#" className="font-sans text-light-grey text-sm">Link Shortening</a>
              <a href="#" className="font-sans text-light-grey text-sm">Branded Links</a>
              <a href="#" className="font-sans text-light-grey text-sm">Analytics</a>
            </div>

            <div className="flex flex-col max-xl:items-center gap-2.5">
              <h4 className="font-sans text-white font-bold text-base mb-3">Resources</h4>
              <a href="#" className="font-sans text-light-grey text-sm">Blog</a>
              <a href="#" className="font-sans text-light-grey text-sm">Developers</a>
              <a href="#" className="font-sans text-light-grey text-sm">Support</a>
            </div>

            <div className="flex flex-col max-xl:items-center gap-2.5">
              <h4 className="font-sans text-white font-bold text-base mb-3">Company</h4>
              <a href="#" className="font-sans text-light-grey text-sm">About</a>
              <a href="#" className="font-sans text-light-grey text-sm">Our team</a>
              <a href="#" className="font-sans text-light-grey text-sm">Careers</a>
              <a href="#" className="font-sans text-light-grey text-sm">Contact</a>
            </div>
          </div>

          <div className="flex gap-6">
            <IconLink
              icon={facebook}
              text="Facebook"
              link="#"
              className="w-6 h-6"
            />
            <IconLink
              icon={twitter}
              text="Twitter"
              link="#"
              className="w-6 h-6"
            />
            <IconLink
              icon={pinterest}
              text="Pinterest"
              link="#"
              className="w-6 h-6"
            />
            <IconLink
              icon={instagram}
              text="Instagram"
              link="#"
              className="w-6 h-6"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
