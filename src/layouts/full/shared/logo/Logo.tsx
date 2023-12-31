import { FC } from "react";
import { useSelector } from "../../../../store/Store";
import Link from "next/link";
import { styled } from "@mui/material";
import { AppState } from "../../../../store/Store";
import Image from "next/image";

const Logo = () => {
  const customizer = useSelector((state: AppState) => state.customizer);
  const LinkStyled = styled(Link)(() => ({
    height: customizer.TopbarHeight,
    width: customizer.isCollapse ? "60px" : "180px",
    overflow: "hidden",
    display: "block",
  }));

  if (customizer.activeDir === "ltr") {
    return (
      <LinkStyled href="/">
        {customizer.activeMode === "dark" ? (
          <>
          {customizer.isCollapse ? (
            <Image
              src="/images/logos/logo_colapse.png"
              alt="logo"
              height={customizer.TopbarHeight}
              width={60}
              priority
            />
          ) : (
            <Image
              src="/images/logos/logo.png"
              alt="logo"
              height={customizer.TopbarHeight}
              width={106}
              priority
            />
          )}
          </>
        ) : (
          <>
          {customizer.isCollapse ? (
            <Image
              src="/images/logos/logo_colapse.png"
              alt="logo"
              height={customizer.TopbarHeight}
              width={60}
              priority
            />
          ) : (
            <Image
              src="/images/logos/logo.png"
              alt="logo"
              height={customizer.TopbarHeight}
              width={106}
              priority
            />
          )}
          </>
        )}
      </LinkStyled>
    );
  }

  return (
    <LinkStyled href="/">
      {customizer.activeMode === "dark" ? (
        <Image
          src="/images/logos/dark-rtl-logo.svg"
          alt="logo"
          height={customizer.TopbarHeight}
          width={174}
          priority
        />
      ) : (
        <Image
          src="/images/logos/light-logo-rtl.svg"
          alt="logo"
          height={customizer.TopbarHeight}
          width={174}
          priority
        />
      )}
    </LinkStyled>
  );
};

export default Logo;
