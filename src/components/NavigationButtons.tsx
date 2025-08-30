"use client";

import { ActionIcon } from "@mantine/core";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import { useNavigation } from "./useNavigation";

export function NavigationButtons() {
  const {
    showButton,
    isOnContact,
    scrollToNextSection,
    scrollToPreviousSection,
  } = useNavigation();

  return (
    <>
      <ActionIcon
        size="lg"
        variant="filled"
        className={`${
          showButton ? "!opacity-100" : "!opacity-0"
        } !fixed top-5 left-5 z-50 active:scale-95 hover:scale-105`}
        onClick={scrollToPreviousSection}
      >
        <IconChevronUp />
      </ActionIcon>
      <ActionIcon
        size="lg"
        variant="filled"
        className={`${
          showButton && !isOnContact ? "!opacity-100" : "!opacity-0"
        } !fixed bottom-5 left-5 z-50 active:scale-95 hover:scale-105`}
        onClick={scrollToNextSection}
      >
        <IconChevronDown />
      </ActionIcon>
    </>
  );
}
