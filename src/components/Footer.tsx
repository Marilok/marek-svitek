import * as React from "react";
import {
  Box,
  chakra,
  Container,
  Link,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { ReactNode } from "react";
import { Logo } from "../images/Logo";
import { OutboundLink } from "gatsby-plugin-google-gtag";

const SocialButton = ({
  children,
  label,
  href,
  target,
}: {
  children: ReactNode;
  label: string;
  href: string;
  target: string;
}) => {
  return (
    <OutboundLink href={href} target="_blank">
      <chakra.button
        bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
        rounded={"full"}
        w={8}
        h={8}
        cursor={"pointer"}
        as={"a"}
        display={"inline-flex"}
        alignItems={"center"}
        justifyContent={"center"}
        transition={"background 0.3s ease"}
        target={target}
        _hover={{
          bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
        }}
      >
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    </OutboundLink>
  );
};

export default function SmallWithLogoLeft() {
  return (
    <footer style={{ marginTop: "auto" }}>
      <Box
        bg={useColorModeValue("gray.50", "gray.900")}
        color={useColorModeValue("gray.700", "gray.200")}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "center", md: "center" }}
        >
          <Logo variant="oneLine" />
          <Text>Vytvořeno s 🍺 v Brně, 🇨🇿</Text>
          <Stack direction={"row"} spacing={6}>
            <SocialButton
              label={"LinkedIn"}
              target="_blank"
              href={"https://www.linkedin.com/in/mareksvitek/"}
            >
              <FaLinkedin />
            </SocialButton>
            <SocialButton
              label={"Instagram"}
              target="_blank"
              href={"https://www.instagram.com/svitek.marek/"}
            >
              <FaInstagram />
            </SocialButton>
            <SocialButton
              label={"GitHub"}
              target="_blank"
              href={"https://github.com/Marilok"}
            >
              <FaGithub />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </footer>
  );
}
