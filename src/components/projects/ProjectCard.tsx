import React from "react";
import {
  Card,
  Image,
  Stack,
  Group,
  Title,
  Badge,
  Text,
  Button,
  List,
} from "@mantine/core";
import { IconExternalLink } from "@tabler/icons-react";

export interface ProjectCardProps {
  title: string;
  role?: string;
  color?:
    | "blue"
    | "green"
    | "red"
    | "orange"
    | "teal"
    | "gray"
    | "pink"
    | "violet";
  imageSrc?: string;
  alt?: string;
  description?: string;
  bullets?: string[];
  href?: string;
  // CTA props
  ctaLabel?: string;
  ctaHref?: string;
  ctaTarget?: "_blank" | "_self" | "_parent" | "_top";
  ctaVariant?:
    | "light"
    | "filled"
    | "outline"
    | "subtle"
    | "default"
    | "gradient";
  onCtaClick?: () => void;
}

export function ProjectCard({
  title,
  role,
  color = "blue",
  imageSrc,
  alt,
  description,
  bullets,
  href = "#",
  ctaLabel = "Learn More",
  ctaHref,
  ctaTarget = "_blank",
  ctaVariant = "light",
  onCtaClick,
}: ProjectCardProps) {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder h="100%">
      {imageSrc && (
        <Card.Section style={{ height: 200 }} className="overflow-hidden">
          <Image
            src={imageSrc}
            height="100%"
            width="100%"
            fit="cover"
            alt={alt || title}
            fallbackSrc={`https://via.placeholder.com/400x200/228BE6/FFFFFF?text=${encodeURIComponent(
              title
            )}`}
          />
        </Card.Section>
      )}

      <Stack mt="md" gap="md">
        <Group justify="space-between">
          <Title order={3}>{title}</Title>
          {role && <Badge color={color}>{role}</Badge>}
        </Group>

        {description && (
          <Text size="sm" c="dimmed">
            {description}
          </Text>
        )}

        {bullets && bullets.length > 0 && (
          <List listStyleType="disc" size="sm">
            {bullets.map((b, i) => (
              <List.Item key={i}>{b}</List.Item>
            ))}
          </List>
        )}

        <Button
          variant={ctaVariant}
          leftSection={<IconExternalLink size={16} />}
          component={ctaHref ? "a" : undefined}
          href={ctaHref ?? href}
          target={ctaHref ? ctaTarget : undefined}
          onClick={onCtaClick}
        >
          {ctaLabel}
        </Button>
      </Stack>
    </Card>
  );
}
