import { Container, Stack, Title, Grid } from "@mantine/core";
import { ProjectCard } from "./ProjectCard";

export function ProjectsSection() {
  return (
    <section
      className="snap-start md:min-h-screen flex items-center justify-center"
      id="projects"
    >
      <Container size="lg" py={80}>
        <Stack gap="xl">
          <Title order={2} ta="center" mb="xl">
            Projects
          </Title>

          <Grid>
            <Grid.Col span={{ base: 12, md: 6 }}>
              <ProjectCard
                title="Cognivibe"
                role="Co-founder & CTO"
                color="blue"
                imageSrc="/projects/spectoda.png"
                alt="Cognivibe"
                description="AI coach monitoring real-time mental strain for digital workers. Building the future of workplace wellness through intelligent monitoring."
                href="#"
              />
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 6 }}>
              <ProjectCard
                title="ReKrabice"
                role="Founder & CTO"
                color="green"
                imageSrc="/projects/spectoda.png"
                alt="ReKrabice"
                description="Created the first reusable e-commerce boxes in Czechia to save trees and reduce pollution."
                bullets={[
                  "Saved 2000+ single-use boxes",
                  "Integrated to Shoptet platform",
                  "Created internal tracking tool",
                  "Interested 50+ e-shops",
                ]}
                href="#"
              />
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 6 }}>
              <ProjectCard
                title="Spectoda"
                role="Web App Developer"
                color="red"
                imageSrc="/projects/spectoda.png"
                alt="Spectoda"
                description="Developed innovative web applications and contributed to cutting-edge projects in the technology space."
                href="https://spectoda.com"
              />
            </Grid.Col>
          </Grid>
        </Stack>
      </Container>
    </section>
  );
}
