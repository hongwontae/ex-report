import { Link } from "react-router";

type IconType = {
  liClassName?: string;
  IconClassName: string;
  headerName?: string;
  IconComponent: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  headerClassName?: string;
  href : string;
};

function MainIcon({
  liClassName,
  IconClassName,
  headerName,
  IconComponent,
  headerClassName,
  href
}: IconType) {
  return (
    <>
      <Link to={href}>
        <li className={liClassName}>
          <IconComponent className={IconClassName}></IconComponent>
          <div className={headerClassName}>{headerName}</div>
        </li>
      </Link>
    </>
  );
}

export default MainIcon;
