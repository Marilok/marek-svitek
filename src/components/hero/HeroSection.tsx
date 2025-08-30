import {
  Container,
  Stack,
  Image,
  Title,
  Text,
  Group,
  Button,
  Modal,
} from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";
import { useState, useEffect } from "react";

export function HeroSection({
  scrollToSection,
}: {
  scrollToSection: (id: string) => void;
}) {
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    // Auto-open modal after component mounts
    const timer = setTimeout(() => {
      setOpened(true);
    }, 1000); // 1 second delay

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="🚧 Work in Progress"
        centered
        size="md"
      >
        <Text>
          This website is currently a work in progress. Some features may not be
          fully functional yet.
        </Text>
      </Modal>

      <section
        className="snap-start md:min-h-screen flex items-center justify-center"
        id="hero"
      >
        <Container size="lg" py="xl">
          <Stack align="center" gap="xl">
            <Image
              src="/hero.webp"
              alt="Marek Svitek"
              w={200}
              h={200}
              radius="50%"
              fallbackSrc="https://via.placeholder.com/200x200/228BE6/FFFFFF?text=MS"
            />
            <Stack align="center" gap="md">
              <Title order={1} size="3rem" ta="center">
                Marek Svitek
              </Title>
              <Text size="xl" c="dimmed" ta="center" maw={600}>
                Economics, data, startups CTO with a knack for full-stack
                development and a passion for UX/UI. I thrive on the pulse of
                new technology.
              </Text>
            </Stack>
            <Group>
              <Button
                size="lg"
                className="active:scale-95 hover:scale-105"
                leftSection={<IconChevronDown size={20} />}
                onClick={() => scrollToSection("about")}
              >
                Learn more
              </Button>
            </Group>
          </Stack>
        </Container>
      </section>
    </>
  );
}
