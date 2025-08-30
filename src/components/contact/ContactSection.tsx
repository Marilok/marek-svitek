import { Container, Stack, Title, Text } from "@mantine/core";
import { ContactCard } from "./ContactCard";

export function ContactSection() {
  return (
    <section
      className="snap-start md:min-h-screen flex items-center justify-center"
      id="contact"
    >
      <Container size="lg" py="xl">
        <Stack gap="xl" ta={"center"}>
          <Stack gap="md" align="center">
            <Title order={2}>Let&apos;s connect</Title>
            <Text size="lg" maw={600}>
              I’m always open to chats about startups, tech, economics, or
              collaborations. Reach out on LinkedIn or email, I usually reply
              within a day.
            </Text>
          </Stack>
          <ContactCard />
        </Stack>
      </Container>
    </section>
  );
}
