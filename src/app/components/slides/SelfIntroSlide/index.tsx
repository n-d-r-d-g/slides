import Image from "next/image";
import { FlexBox, Grid, Heading, Slide } from "spectacle";
import { StyledQRCode } from "../../StyledQRCode";

export function SelfIntroSlide() {
  return (
    <Slide>
      <Heading className="leading-tight">{"Who am I?"}</Heading>
      <Grid gridTemplateColumns="1fr auto" gridColumnGap={16}>
        <Grid
          gridTemplateColumns="auto 1fr"
          className="place-content-start gap-6"
          style={{ placeItems: "center start" }}
        >
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
        </Grid>
        <FlexBox flexDirection="column" className="gap-12">
          <StyledQRCode value="n-d-r-d-g.com" size={160} prependHttps />
          <StyledQRCode value="github.com/n-d-r-d-g" size={160} prependHttps />
        </FlexBox>
      </Grid>
    </Slide>
  );
}
