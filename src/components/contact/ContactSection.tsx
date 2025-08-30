import { Container, Stack, Title, Text } from "@mantine/core";
import { ContactCard } from "./ContactCard";

export function ContactSection() {
  return (
    <section
      className="snap-start md:min-h-screen flex items-center justify-center"
      id="contact"
    >
      <Container size="lg" py="xl">
        <Stack gap="xl">
          <Stack gap="md" align="center">
            <Title order={2} ta="center">
              Let&apos;s connect
            </Title>
            <Text ta="center" size="lg" maw={600}>
              Whether you&apos;re interested in technology innovation,
              discussions about economics, or potential collaborations, I&apos;d
              love to hear from you.
            </Text>
          </Stack>
          <ContactCard />
        </Stack>
      </Container>
    </section>
  );
}
