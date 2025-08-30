import { Container, Stack, Title, Text, Box } from "@mantine/core";

export function AboutSection() {
  return (
    <section
      className="snap-start md:min-h-screen flex items-center justify-center"
      id="about"
    >
      <Container size="lg" py={80}>
        <Stack gap="xl">
          <Title order={2} ta="center" mb="xl">
            Who am I?
          </Title>
          <Text size="lg" ta="center" maw={800} mx="auto" lh={1.6}>
            I&apos;m a tech enthusiast studying economics with a deep interest
            in data and AI. As a CTO with experience in full-stack development
            and a passion for UX/UI, I thrive on staying at the forefront of new
            technology. My personal mission is to leverage technology to solve
            real-world problems and create meaningful impact through innovative
            solutions.
          </Text>
        </Stack>
      </Container>
    </section>
  );
}
