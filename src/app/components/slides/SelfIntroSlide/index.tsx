import Image from "next/image";
import { Slide } from "spectacle";
import { Heading } from "../../Heading";
import { StyledQRCode } from "../../StyledQRCode";

export function SelfIntroSlide() {
  return (
    <Slide>
      <Heading>{"Who am I?"}</Heading>
      <div className="grid grid-cols-[1fr_auto] gap-4">
        <div className="grid grid-cols-[auto_1fr] place-content-start place-items-[center_start] gap-6">
          <Image src="/logo.svg" alt="n-d-r-d-g logo" width={48} height={48} />
          <p className="text-4xl">
            {"I'm n-d-r-d-g"}{" "}
            <span className="italic">{'(pronounced "underdog")'}</span>
          </p>
          <Image
            src="/code.svg"
            alt="front-end developer"
            width={48}
            height={48}
          />
          <p className="text-4xl">{"Front-end web developer"}</p>
          <Image
            src="/football-boot.svg"
            alt="football logo"
            width={48}
            height={48}
          />
          <p className="text-4xl">{"Footballer"}</p>
          <Image src="/discord.svg" alt="discord logo" width={48} height={48} />
          <p className="text-4xl">{"n-d-r-d-g (feel free to chat)"}</p>
        </div>
        <div className="flex flex-col gap-12">
          <StyledQRCode value="n-d-r-d-g.com" size={160} prependHttps />
          <StyledQRCode value="github.com/n-d-r-d-g" size={160} prependHttps />
        </div>
      </div>
    </Slide>
  );
}
