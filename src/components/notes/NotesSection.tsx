import { Container, Stack, Title, Text, Flex, SimpleGrid } from "@mantine/core";
import { ArticleCard } from "./ArticleCard";
import { ArticleCardWithBackground } from "./ArticleCardWithBackground";

export function NotesSection() {
  return (
    <section
      className="snap-start md:min-h-screen flex items-center justify-center"
      id="notes"
    >
      <Container size="lg" py="xl">
        <Stack gap="md" align="center">
          <Title order={2} ta="center">
            My digital garden
          </Title>
          <Text size="lg" ta="center" maw={800} mx="auto" lh={1.6}>
            A growing mix of ideas and notes on tech, startups, economics, and
            life—just me sharing what I’m learning along the way.
          </Text>

          <SimpleGrid cols={2}>
            <ArticleCard
              image="/notes/ideas.png"
              imageAlt="How to get startup ideas"
              title="💡 How to get startup ideas"
              href="https://notes.mareksvitek.cz/business/startup-ideas"
              description="Guide to generating innovative startup ideas through observation and creative thinking."
            />

            <ArticleCard
              image="/notes/feedback.png"
              imageAlt="Giving effective feedback"
              title="🎁 Giving effective feedback"
              href="https://notes.mareksvitek.cz/feedback"
              description="How to give and receive constructive feedback that drives growth."
            />
            <ArticleCard
              image="/notes/values.png"
              imageAlt="Exploring personal values"
              title="💎 Exploring personal values"
              href="https://notes.mareksvitek.cz/emotions-needs-values"
              description="Understanding your core values and how they shape your decisions."
            />
            <ArticleCardWithBackground
              title="Explore other 100+ notes on economics, startups, self-improvement, and more"
              href="https://notes.mareksvitek.cz"
            />
          </SimpleGrid>
        </Stack>
      </Container>
    </section>
  );
}
