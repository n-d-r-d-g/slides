"use client";

import { DeckTemplate } from "@/app/components/DeckTemplate";
import { useTheme } from "next-themes";
import {
  Box,
  Deck,
  FlexBox,
  Grid,
  Heading,
  ListItem,
  Quote,
  Slide,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
  Text,
  UnorderedList,
} from "spectacle";
import { DECK_THEMES } from "../../../constants";

export function ContributingToAnOpenSourceCommunitySlides() {
  const { resolvedTheme } = useTheme();
  const deckTheme =
    DECK_THEMES[(resolvedTheme ?? "light") as keyof typeof DECK_THEMES];

  return (
    <Deck
      theme={deckTheme}
      template={({ slideNumber, numberOfSlides }) => {
        return (
          <DeckTemplate
            slideNumber={slideNumber}
            numberOfSlides={numberOfSlides}
          />
        );
      }}
      className="leading-snug text-balance"
    >
      {/* #1 */}
      <Slide>
        <FlexBox height="100%">
          <Heading>{"Contributing to an Open Source Community"}</Heading>
        </FlexBox>
      </Slide>
      {/* #2 */}
      <Slide>
        <Heading>{"What's open source?"}</Heading>
        <Table className="!w-fit mx-auto mt-28">
          <TableHeader>
            <TableRow>
              <TableCell
                className="!text-center rounded-t-3xl rounded-b-lg bg-zinc-200 dark:bg-zinc-900"
                fontSize={32}
              >
                {"Open"}
              </TableCell>
              <TableCell>{""}</TableCell>
              <TableCell
                className="!text-center rounded-t-3xl rounded-b-lg bg-zinc-200 dark:bg-zinc-900"
                fontSize={32}
              >
                {"Source"}
              </TableCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>{"everyone has access"}</TableCell>
              <TableCell className="px-20 !text-3xl italic">
                {"to the"}
              </TableCell>
              <TableCell>{"source code"}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Slide>
      {/* #3 */}
      <Slide>
        <Heading>{"How to contribute"}</Heading>
        <UnorderedList fontSize={40} className="flex flex-col">
          <ListItem>
            <span className="font-black underline">{"Code:"}</span>
            {
              " create issues, create/review PRs, answer questions from other devs (online: Github, Discord, StackOverflow or elsewhere; in-person: events like meetups)"
            }
          </ListItem>
          <ListItem>
            <span className="font-black underline">{"Events:"}</span>
            {
              " organize (plan, look for sponsors, logistics)/advertise (write blog posts, share on social media)/sponsor"
            }
          </ListItem>
          <ListItem>
            <span className="font-black underline">
              {"Educational content:"}
            </span>
            {" create lessons/courses"}
          </ListItem>
        </UnorderedList>
      </Slide>
      {/* #4 */}
      <Slide>
        <Heading>{"Characteristics"}</Heading>
        <Grid gridTemplateColumns="1fr 1fr" gridColumnGap={15}>
          <UnorderedList fontSize={40} className="flex flex-col">
            <ListItem>
              <span className="font-black underline">{"code is public:"}</span>
              {" transparency v/s risk of being copied"}
            </ListItem>
            <ListItem>
              <span className="font-black underline">
                {"contributions are public:"}
              </span>
              {" increased visibility v/s mistakes are also visible"}
            </ListItem>
            <ListItem>
              <span className="font-black underline">{"networking:"}</span>
              {" new business v/s social awkwardness"}
            </ListItem>
          </UnorderedList>
          <UnorderedList fontSize={40} className="flex flex-col">
            <ListItem>
              <span className="font-black underline">
                {"self-improvement:"}
              </span>
              {
                " improve technical & soft skills, patience v/s possible in private codebases"
              }
            </ListItem>
            <ListItem>
              <span className="font-black underline">
                {"contributions are generally not paid:"}
              </span>
              {
                " help keep open source projects open v/s no incentive (priorities)"
              }
            </ListItem>
          </UnorderedList>
        </Grid>
      </Slide>
      {/* #5 */}
      <Slide>
        <Heading>{"The beauty"}</Heading>
        <Text textAlign="center" className="italic">
          {
            "It's a full circle. However, this can only keep going if we all help out."
          }
        </Text>
      </Slide>
    </Deck>
  );
}
