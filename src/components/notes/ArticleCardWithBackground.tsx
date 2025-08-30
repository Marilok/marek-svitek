import { Card, Text, BackgroundImage, Button, Flex } from "@mantine/core";
import Link from "next/link";
import Image from "next/image";
import { IconWriting } from "@tabler/icons-react";

interface ArticleCardWithBackgroundProps {
  title: string;
  href: string;
}

export function ArticleCardWithBackground({
  title,
  href,
}: ArticleCardWithBackgroundProps) {
  const url = new URL(href);
  url.searchParams.set("utm_source", "personal-web");
  const hrefWithUtm = url.toString();

  return (
    <Link href={hrefWithUtm} target="_blank">
      <Card
        maw={"320"}
        withBorder
        padding="lg"
        className="hover:scale-105 active:scale-95 relative h-full"
        bg={"blue.8"}
      >
        <div className="flex flex-col items-start justify-center h-full">
          <Text fw={"500"} size="lg" c={"white"} ta="left">
            {title}
          </Text>
          <Button
            mt={"xl"}
            component={Link}
            href={hrefWithUtm}
            variant="white"
            color="blue.8"
            target="_blank"
            leftSection={<IconWriting size={16} />}
          >
            Go to digital garden
          </Button>
        </div>
      </Card>
    </Link>
  );
}
