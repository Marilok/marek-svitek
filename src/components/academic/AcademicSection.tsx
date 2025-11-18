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
            Academic background
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
                  title="BSc Economics"
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
                  title="Summer school"
                  institution="Bocconi University"
                  years="2023"
                  logo="/logos/bocconi.png"
                ></EducationItem>

                <EducationItem
                  title="European School"
                  institution="EEB3 / European School"
                  years="2014 — 2017"
                  logo="/logos/eeb3.png"
                />
              </Stack>
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 5 }}>
              <Paper p="lg" withBorder>
                <Stack justify="center">
                  <Button
                    component={Link}
                    fullWidth
                    href="https://linkedin.com/in/mareksvitek"
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
              </Paper>
            </Grid.Col>
          </Grid>
        </Stack>
      </Container>
    </section>
  );
}
