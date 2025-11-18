import React from "react";
import { Card, Stack, Avatar, Title, Text, Flex } from "@mantine/core";
import Link from "next/link";

interface PublicationItemProps {
  title: string;
  description: string;
  year: string;
  icon: string;
  link?: string;
}

export function PublicationItem({
  title,
  description,
  year,
  icon,
  link,
}: PublicationItemProps) {
  const content = (
    <Card
      shadow="xs"
      padding="lg"
      radius="md"
      withBorder
      h="100%"
      className="hover:scale-105"
    >
      <Flex gap={"md"} direction={"row"} align={"center"}>
        <Avatar size={54} radius="sm" src={icon} alt={`${title} icon`} />

        <Stack gap={0} className="w-full">
          <div className="flex flex-row items-center justify-between w-full">
            <Title order={4}>{title}</Title>
            <Text size="sm" c="dimmed">
              {year}
            </Text>
          </div>
          <Text size="sm" c="dimmed">
            {description}
          </Text>
        </Stack>
      </Flex>
    </Card>
  );

  if (link) {
    return (
      <Link
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        {content}
      </Link>
    );
  }

  return content;
}
