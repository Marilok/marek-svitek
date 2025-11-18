import { Card, Group, Image, Text, ThemeIcon } from "@mantine/core";
import { IconExternalLink } from "@tabler/icons-react";
import Link from "next/link";
import NextImage from "next/image";

interface ArticleCardProps {
  image: string;
  imageAlt: string;
  title: string;
  href: string;
  description: string;
}

export function ArticleCard({
  image,
  imageAlt,
  title,
  href,
  description,
}: ArticleCardProps) {
  const url = new URL(href);
  url.searchParams.set("utm_source", "personal-web");
  const hrefWithUtm = url.toString();

  return (
    <Link href={hrefWithUtm} target="_blank">
      <Card
        maw={"320"}
        withBorder
        padding="lg"
        className="hover:scale-105 active:scale-95 transition-transform duration-200"
      >
        <Card.Section
          mb="sm"
          className="h-32"
          pos="relative"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            component={NextImage}
            src={image}
            alt={imageAlt}
            fill={true}
            style={{ objectFit: "cover" }}
          />
        </Card.Section>

        <Group gap={"0"}>
          <Text fw={"500"} size="lg" className="align-middle">
            {title}
          </Text>
          <ThemeIcon size="sm" variant="white" color="gray">
            <IconExternalLink size={14} />
          </ThemeIcon>
        </Group>
        <Text size="sm" c="dimmed">
          {description}
        </Text>
      </Card>
    </Link>
  );
}
