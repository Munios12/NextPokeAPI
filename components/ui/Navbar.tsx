import { Spacer, Text, useTheme } from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import NextLink from "next/link";
import Link from "next/link";

export const Navbar = () => {
  const { theme } = useTheme();

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "start",
        padding: "0px 20px 0px 0px",
        backgroundColor: theme?.colors.gray200.value,
      }}
    >
      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
        alt="ditto"
        width={70}
        height={70}
      />

      <Link href="/" passHref>
        <Text color="white" h2>
          P
        </Text>
      </Link>
      <Link href="/" passHref>
        <Text color="white" h3>
          okémon
        </Text>
      </Link>

      <Spacer css={{ flex: 1 }} />

      <Link href="/favorites">
        <Text color="white">My team</Text>
      </Link>
    </div>
  );
};
