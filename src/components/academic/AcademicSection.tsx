import {
  Container,
  Stack,
  Title,
  Grid,
  Text,
  Group,
  Paper,
  Button,
} from "@mantine/core";
import EducationItem from "./EducationItem";

export function AcademicSection() {
  return (
    <section
      className="snap-start md:min-h-screen flex items-center justify-center"
      id="academic"
    >
      <Container size="lg" py={80}>
        <Stack gap="xl">
          <Title order={2} ta="center" mb="xl">
            Academic Background
          </Title>
          <Grid>
            <Grid.Col span={{ base: 12, md: 7 }}>
              <Stack gap="xs">
                <EducationItem
                  title="Exchange Semester"
                  institution="University of Michigan"
                  years="2025"
                  logo="/logos/michigan.png"
                ></EducationItem>

                <EducationItem
                  title="BSc Bachelor"
                  institution="VŠE Prague"
                  years="2024 — 2027"
                  logo="/logos/vse.png"
                ></EducationItem>

                <EducationItem
                  title="Maturita"
                  institution="Gymnázium Brno, třída Kapitána Jaroše"
                  years="2017 — 2024"
                  logo="/logos/jaroska.png"
                ></EducationItem>

                <EducationItem
                  title="European School"
                  institution="EEB3 / European School"
                  years="2014 — 2017"
                  logo="/logos/eeb3.png"
                ></EducationItem>
              </Stack>
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 5 }}>
              <Paper
                shadow="sm"
                p="lg"
                radius="md"
                withBorder
                style={{ height: "100%" }}
              >
                <Stack gap="md" justify="center" style={{ height: "100%" }}>
                  <Title order={4} ta="left">
                    Continuous Learning
                  </Title>
                  <Text ta="left" size="sm" c="dimmed">
                    Extensive collection of MOOCs, workshops, and courses in
                    self-improvement, cybersecurity, economics,
                    entrepreneurship, and AI.
                  </Text>
                  <Group justify="flex-start" gap="sm">
                    <Button
                      component="a"
                      href="https://linkedin.com/in/yourprofile"
                      target="_blank"
                      variant="light"
                      size="sm"
                    >
                      LinkedIn
                    </Button>
                    <Button
                      component="a"
                      href="/resume.pdf"
                      download
                      variant="light"
                      size="sm"
                    >
                      Download Resume
                    </Button>
                  </Group>
                </Stack>
              </Paper>
            </Grid.Col>
          </Grid>
        </Stack>
      </Container>
    </section>
  );
}
