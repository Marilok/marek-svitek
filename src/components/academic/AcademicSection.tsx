import {
  Container,
  Stack,
  Title,
  Grid,
  Text,
  // Group,
  Paper,
  Button,
} from "@mantine/core";
import { IconBrandLinkedin, IconDownload } from "@tabler/icons-react";
import EducationItem from "./EducationItem";
import Link from "next/link";

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
                  <Stack gap="sm" align="flex-start" className="w-48">
                    <Button
                      component={Link}
                      fullWidth
                      href="https://linkedin.com/in/yourprofile"
                      target="_blank"
                      leftSection={<IconBrandLinkedin size={16} />}
                    >
                      Visit LinkedIn
                    </Button>
                    <Button
                      component={Link}
                      href="/resume.pdf"
                      download
                      fullWidth
                      variant="light"
                      size="sm"
                      leftSection={<IconDownload size={16} />}
                      style={{ minWidth: 160 }}
                    >
                      Download CV
                    </Button>
                  </Stack>
                </Stack>
              </Paper>
            </Grid.Col>
          </Grid>
        </Stack>
      </Container>
    </section>
  );
}
