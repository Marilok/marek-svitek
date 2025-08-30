import { Card, Image, Text, ThemeIcon } from "@mantine/core";
import { IconExternalLink } from "@tabler/icons-react";
import Link from "next/link";

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
        className="hover:scale-105 active:scale-95"
      >
        <Card.Section mb="sm">
          <Image src={image} alt={imageAlt} height={180} />
        </Card.Section>

        <Text fw={"500"} size="lg" className="align-middle">
          {title}
          <ThemeIcon size="sm" variant="white" color="gray">
            <IconExternalLink size={14} />
          </ThemeIcon>
        </Text>
        <Text size="sm" c="dimmed">
          {description}
        </Text>
      </Card>
    </Link>
  );
}
