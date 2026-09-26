import { Code } from "@/app/components/Code";
import { Heading } from "@/app/components/Heading";
import { Notes, Slide } from "spectacle";

export function ScaleSlide() {
  return (
    <Slide>
      <Heading>{"Scale Plan"}</Heading>
      <ul className="list-disc list-inside flex flex-col gap-5 px-8">
        <li className="text-[40px] leading-snug">
          {"Delay in access to all entries (foreshadowing?)"}
        </li>
        <li className="text-[40px] leading-snug">
          {"Get in touch if you want to help scan entries"}
        </li>
        <li className="text-[40px] leading-snug">{"Locale: mfe-MU"}</li>
        <li className="text-[40px] leading-snug">{"Entry limit: 5000"}</li>
      </ul>
      <Notes>
        <ul className="list-disc list-inside flex flex-col gap-2">
          <li><a href="https://iso639-3.sil.org/code_tables/639/data/all?title=mfe">Existing locale</a>{": mfe-MU in CLDR (Unicode Common Locale Data Repository)"}</li>
          <li>
            {'Only works in Safari'}
            <Code defaultFontSize={12}>
              {`Array.from({ length: 12 }, (_, m) => new Intl.DateTimeFormat('mfe-MU', { month: 'long' }).format(new Date(2026, m, 1))); // months in Kreol Morisien` +
              `\nnew Intl.DisplayNames(['en'],{type:'language',fallback:'none'}).of('mfe'); // morisien` +
              `\nnew Intl.DisplayNames(['mfe'], { type: 'language', fallback: 'none' }).of('mfe'); // kreol morisien` +
              `\nnew Intl.DisplayNames(['mfe'], { type: 'language', fallback: 'none' }).of('mfe-MU'); // kreol morisien (Moris)`
              }
            </Code>
          </li>
        </ul>
      </Notes>
    </Slide>
  );
}
