import React from "react";
import { Card, Stack, Group, Avatar, Title, Text, Flex } from "@mantine/core";

interface EducationItemProps {
  title: string;
  institution: string;
  years?: string;
  logo?: string; // path under /logos, e.g. /logos/michigan.png
  children?: React.ReactNode;
}

export default function EducationItem({
  title,
  institution,
  years,
  logo,
  children,
}: EducationItemProps) {
  return (
    <Card
      shadow="xs"
      padding="lg"
      radius="md"
      withBorder
      h="100%"
      maw={400}
      className="hover:scale-105"
    >
      <Flex gap={"md"} direction={"row"} align={"center"}>
        <Avatar
          size={54}
          radius="sm"
          className="shadow-sm"
          src={logo}
          alt={`${institution} logo`}
        />

        <Stack gap={0} className="w-full">
          <div className="flex flex-row items-center justify-between w-full">
            <Title order={4}>{title}</Title>
            <Text size="sm" c="dimmed">
              {years}
            </Text>
          </div>
          <Text size="sm" c="dimmed">
            {institution}
          </Text>
          {children ? <Text size="sm">{children}</Text> : null}
        </Stack>
      </Flex>
    </Card>
  );
}
