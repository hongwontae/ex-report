import { Home } from "lucide-react";
import { ClipboardMinus } from "lucide-react";
import { User } from "lucide-react";
import { Lock } from "lucide-react";
import {liClassName, iconClassName} from '../class-name/main-class-name';

import MainIcon from "../../components/header/MainIcon";

function Header() {
  return (
    <>
      <header className="h-full">
        <ul className="font-pretendard-semibold grid grid-cols-[1fr_1fr_0.05fr] h-full items-center">
          <section className="justify-self-start">
            <MainIcon
              IconComponent={Home}
              liClassName={liClassName}
              IconClassName={iconClassName}
              headerName="Home"
              headerClassName="text-[1.2rem]"
              href="/main"
            ></MainIcon>
          </section>
          <section className="flex flex-row gap-4 justify-around">
            <MainIcon
              IconComponent={ClipboardMinus}
              liClassName={liClassName}
              IconClassName={iconClassName}
              headerName="Before Match Report"
              headerClassName="text-[1.2rem]"
              href="/main/pre/report"
            ></MainIcon>
            <MainIcon
              IconComponent={ClipboardMinus}
              liClassName={liClassName}
              IconClassName={iconClassName}
              headerName="After Match Report"
              headerClassName="text-[1.2rem]"
              href="/main/post/report"
            ></MainIcon>
            <MainIcon
              IconComponent={User}
              liClassName={liClassName}
              IconClassName={iconClassName}
              headerName="Player"
              headerClassName="text-[1.2rem]"
              href="/main/player"
            ></MainIcon>
          </section>
          <section className="self-start justify-self-end">
            <MainIcon
            IconComponent={Lock}
            IconClassName="w-4 h-4"
            href="/login"
            > 
            </MainIcon>
          </section>
        </ul>
      </header>
    </>
  );
}

export default Header;
