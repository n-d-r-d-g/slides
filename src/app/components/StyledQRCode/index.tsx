import { useTheme } from "next-themes";
import { MouseEvent, useCallback, useState } from "react";
import { IoClose } from "react-icons/io5";
import QRCode, { QRCodeProps } from "react-qr-code";

type WithoutHref = { href?: never; prependHttps?: boolean };
type WithHref = { href?: string };

type StyledQRCodeProps = QRCodeProps & (WithoutHref | WithHref);

export function StyledQRCode({
  ref: originalRef,
  ...props
}: StyledQRCodeProps) {
  const { href, prependHttps, ...qrCodeProps } = props as Omit<
    QRCodeProps,
    "ref"
  > &
    WithoutHref;
  const { resolvedTheme } = useTheme();
  const [isFullScreen, setIsFullScreen] = useState(false);
  const fgColor = resolvedTheme === "light" ? "black" : "white";
  const bgColor = resolvedTheme === "light" ? "white" : "black";
  const qrCodeSize = isFullScreen ? 512 : props.size; // the size can be hardcoded -> slides get scaled by Spectacle depending on the viewport size
  const qrCodeClassName = `${props.className ?? ""} transition-transform ${
    isFullScreen ? "" : "cursor-zoom-in hover:scale-105"
  }`;

  const exitFullScreen = useCallback(() => setIsFullScreen(false), []);

  const handleQRCodeClick = useCallback(
    (e: MouseEvent<SVGSVGElement>) => {
      e.stopPropagation();

      if (props.onClick) {
        props.onClick(e);
      }

      setIsFullScreen((prevIsFullScreen) => !prevIsFullScreen);
    },
    [props]
  );

  const handleLinkClick = useCallback(
    (e: MouseEvent<HTMLAnchorElement>) => e.stopPropagation(),
    []
  );

  const retrieveHref = useCallback(() => {
    if (href) return href;

    if (prependHttps) return `https://${props.value}`;

    return props.value;
  }, [href, prependHttps, props.value]);

  return (
    <div
      onClick={exitFullScreen}
      className={`flex flex-col items-center${
        isFullScreen
          ? " w-full h-full absolute left-0 top-0 grid place-content-center place-items-center cursor-zoom-out bg-white dark:bg-black"
          : ""
      }`}
    >
      {isFullScreen && (
        <button
          type="button"
          title={"Close"}
          className="absolute top-4 right-4 p-4 rounded-full hover:bg-slate-400 hover:bg-opacity-10 "
        >
          <IoClose size={20} />
        </button>
      )}
      <QRCode
        fgColor={fgColor}
        bgColor={bgColor}
        {...qrCodeProps}
        size={qrCodeSize}
        className={qrCodeClassName}
        onClick={handleQRCodeClick}
      />
      <a
        href={retrieveHref()}
        target="_blank"
        rel="noopener noreferrer nofollow"
        onClick={handleLinkClick}
        className="text-3xl text-center mt-4 no-underline hover:underline focus-visible:underline"
      >
        {props.value}
      </a>
    </div>
  );
}
