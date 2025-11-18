import { Card, Group, ThemeIcon, Text } from "@mantine/core";
import { ReactNode } from "react";

interface ContactLinkProps {
  icon: ReactNode;
  title: string;
  subtitle: string;
  href: string;
  color: string;
  target?: string;
}

export function ContactLink({
  icon,
  title,
  subtitle,
  href,
  color,
  target = "_self",
}: ContactLinkProps) {
  return (
    <Card
      shadow="none"
      padding="xs"
      withBorder
      component="a"
      href={href}
      className="hover:scale-95"
      target={target}
      style={{ textDecoration: "none", cursor: "pointer" }}
    >
      <Group>
        <ThemeIcon size={40} radius="md" variant="light" color={color}>
          {icon}
        </ThemeIcon>
        <div>
          <Text fw={"500"} ta={"left"}>
            {title}
          </Text>
          <Text size="sm" c="dimmed">
            {subtitle}
          </Text>
        </div>
      </Group>
    </Card>
  );
}
