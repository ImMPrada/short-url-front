import { IconLinkProps } from "./types";

export default function IconLink({ icon, text, link, className }: IconLinkProps) {

  return (
    <a href={link} className={className}>
      <img src={icon} alt={text}/>
    </a>
  );
}
