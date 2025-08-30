import { Container, Stack, Title, Text, Flex } from "@mantine/core";
import { ArticleCard } from "./ArticleCard";

export function NotesSection() {
  return (
    <section
      className="snap-start md:min-h-screen flex items-center justify-center"
      id="notes"
    >
      <Container size="lg" py={80}>
        <Stack gap="xl">
          <Title order={2} ta="center" mb="xl">
            Digital Garden
          </Title>
          <Text size="lg" ta="center" maw={800} mx="auto" lh={1.6}>
            A collection of my thoughts, learnings, and insights on technology,
            economics, and life. Here I share my journey of continuous learning
            and exploration in the digital world.
          </Text>

          <Flex wrap="wrap" justify="center" align="stretch" gap={"md"}>
            <div className="w-full md:w-1/2 lg:w-1/4 min-w-80">
              <ArticleCard
                image="/notes/ideas.png"
                imageAlt="How to get startup ideas"
                title="💡 How to get startup ideas"
                href="https://notes.mareksvitek.cz/business/startup-ideas"
                description="Guide to generating innovative startup ideas through observation and creative thinking."
              />
            </div>

            <div className="w-full md:w-1/3 lg:w-1/4 min-w-80">
              <ArticleCard
                image="/notes/feedback.png"
                imageAlt="Effective feedback"
                title="🎁 Effective feedback"
                href="https://notes.mareksvitek.cz/feedback"
                description="How to give and receive constructive feedback that drives growth."
              />
            </div>

            <div className="w-full md:w-1/3 lg:w-1/4 min-w-80">
              <ArticleCard
                image="/notes/values.png"
                imageAlt="Exploring your values"
                title="💎 Exploring your values"
                href="https://notes.mareksvitek.cz/emotions-needs-values"
                description="Understanding your core values and how they shape your decisions."
              />
            </div>

            <div className="w-full md:w-1/3 lg:w-1/4 min-w-80">
              <ArticleCard
                image="/notes/explore.png"
                imageAlt="Explore other notes"
                title="🌳 Explore other notes"
                href="https://notes.mareksvitek.cz"
                description="Browse my complete collection of notes on various topics."
              />
            </div>
          </Flex>

          <Text size="sm" ta="center" c="dimmed">
            100+ other notes available
          </Text>
        </Stack>
      </Container>
    </section>
  );
}
