import React, { useState } from 'react';
import "@fontsource/open-sans";
import Template from "../components/Template.tsx";
import ProjectCard from "../components/ProjectCard.tsx";
import { Button, Text, Wrap, WrapItem } from "@chakra-ui/react";
import barkaUno from "../images/projects/barka-uno.jpg";
import jicPojd from "../images/projects/jic - pojd.jpg";
import jicCamp from "../images/projects/jic - camp.jpg";
import jicPrazdninovka from "../images/projects/jic - prazdninovka.jpg";
import jicNova from "../images/projects/jic - nova.png";
import sapBlog from "../images/projects/s&p - blog.png";
import spectoda from "../images/projects/spectoda.png";
import hsbc from "../images/projects/hsbc.png";
import vse from "../images/projects/vse.png";
import youniversity from "../images/projects/youniversity.png";
import rekrabice from "../images/projects/rekrabice.png";
import Seo from "../components/seo";

const PODNIKANI_COLOR = "blue";
const MOOC_COLOR = "purple";
const COMPETETION_COLOR = "yellow";
const IT_COLOR = "red";
const ECONOMY_COLOR = "green";
const WORK_COLOR = "black";

const Page = () => {
  const [selectedFilter, setSelectedFilter] = useState("");

  const handleFilterClick = (filter) => {
    setSelectedFilter(filter);
  };

  const filteredProjects = selectedFilter
    ? PROJECTS.filter((project) =>
        project.tags.some((tag) => tag.name === selectedFilter)
      )
    : PROJECTS;

  return (
    <Template>
      <Wrap spacing={4} justify='center' align={"center"} mt={10}>
      <Text>Filtr kategorií:</Text>
        <WrapItem>
          <Button colorScheme="whiteAlpha" onClick={() => handleFilterClick('')}>Všechny</Button>
        </WrapItem>

        <WrapItem>
          <Button colorScheme={PODNIKANI_COLOR} onClick={() => handleFilterClick('podnikání')}>Podnikání</Button>
        </WrapItem>

        <WrapItem>
          <Button colorScheme={ECONOMY_COLOR} onClick={() => handleFilterClick('ekonomie')}>Ekonomie</Button>
        </WrapItem>

        <WrapItem>
          <Button colorScheme={COMPETETION_COLOR} onClick={() => handleFilterClick('soutěž')}>Soutěže</Button>
        </WrapItem>

        <WrapItem>
          <Button colorScheme="blackAlpha" onClick={() => handleFilterClick('work')}>Práce</Button>
        </WrapItem>

        <WrapItem>
          <Button colorScheme={IT_COLOR} onClick={() => handleFilterClick('IT')}>IT</Button>
        </WrapItem>

        <WrapItem>
          <Button colorScheme={MOOC_COLOR} onClick={() => handleFilterClick('MOOC')}>MOOC</Button>
        </WrapItem>
      </Wrap>
      <Wrap p={6} spacing={"1em"} align={"center"} justify={"center"} mt={12}>
        {filteredProjects.map((project, index) => (
          <ProjectCard
            title={project.title}
            key={index}
            imgSrc={project.imgSrc}
            description={project.description}
            tags={project.tags}
            {...project}
          ></ProjectCard>
        ))}
      </Wrap>
    </Template>
  );
};
const PROJECTS = [
  {
    title: "ReKrabice",
    description:
      "První české zálohované a vratné krabice pro online zásilky. Ve startupu jsem zodpovědný za technologickou a produktovou stránku.",
    imgSrc: rekrabice,
    link: "https://rekrabice.cz/",
    tags: [{ name: "podnikání", color: PODNIKANI_COLOR }, { name: "IT", color: IT_COLOR }, { name: "work", color: WORK_COLOR }],
    date: "08/2022",
  },
  {
    title: "Stáž jako React App Developer",
    description:
      "Během stáže jsem spoluvyvíjel UI aplikace pro ovládání chytrých lamp ve startupu Spectoda. Pracoval jsem v ReactJS.",
    link: "https://spectoda.com/",
    imgSrc: spectoda,
    tags: [
      { name: "IT ", color: IT_COLOR },
      { name: "work", color: WORK_COLOR },
    ],
    date: "05/2022",
  },
  {
    title: "Barka - Barevná karta",
    description:
      "Super cool projekt pro studenty, kteří se chtějí zbavit své nudné a ošklivé karty.",
    imgSrc: barkaUno,
    link: "https://barevnakarta.cz/",
    tags: [{ name: "podnikání", color: PODNIKANI_COLOR }],
    date: "02/2022",
  },
  {
    title: "Soutěž & Podnikej",
    description:
      "V soutěži jsem se účastnil s projektem Barka, který měnil ošklivé a nudné karty v jedinečné, cool a originální. Získali jsme 3. místo v Jihomoravském kraji.",
    link: "https://soutezapodnikej.cz/blog/chteli-bychom-skoncovat-s-osklivymi-a-nudnymi-platebnimi-kartami-rikaji-marek-svitek-a-zuzana-jurtikova/",
    imgSrc: sapBlog,
    tags: [
      { name: "podnikání", color: PODNIKANI_COLOR },
      { name: "soutěž", color: COMPETETION_COLOR },
    ],
    date: "02/2022",
  },
 
  {
    title: "Seminář ekonomických mozků",
    description:
      "Ekonomický korespondenční seminář od Masarykovy univerzity. Během soutěže jsem zjistil, že mě opravdu baví ekonomie. Díky tomu jsem vyhrál 2. místo.",
    link: "https://www.econ.muni.cz/spoluprace/spoluprace-se-ss/seminar-ekonomickych-mozku",
    imgSrc:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.muni.cz%2Fmedia%2F3076606%2Fsem_logo.png%3Fmode%3Dcrop%26center%3D0.38%2C0.59%26rnd%3D131716678350000000%26width%3D0&f=1&nofb=1",
    tags: [
      { name: "ekonomie", color: ECONOMY_COLOR },
      { name: "soutěž", color: COMPETETION_COLOR },
    ],
    date: "03/2022",
  },
  {
    title: "Seminář ekonomických mozků",
    description:
      "Během semináře jsem získal široké spektrum nových znalostí v oblasti ekonomie, podnikových financí, práva a dalších souvisejících témat.",
    link: "https://www.econ.muni.cz/spoluprace/spoluprace-se-ss/seminar-ekonomickych-mozku",
    imgSrc:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.muni.cz%2Fmedia%2F3076606%2Fsem_logo.png%3Fmode%3Dcrop%26center%3D0.38%2C0.59%26rnd%3D131716678350000000%26width%3D0&f=1&nofb=1",
    tags: [
      { name: "ekonomie", color: ECONOMY_COLOR },
      { name: "soutěž", color: COMPETETION_COLOR },
    ],
    date: "04/2023",
  },
  {
    title: "High School Business Challenge",
    description:
      "V této středoškolské soutěži jsem si prohloubil znalosti z ekonomie a vypracoval návrh jak zachránit hotel od krachu.",
    link: "https://businessismore.eu/cs/domu/",
    imgSrc:
    hsbc,
    tags: [
      { name: "ekonomie", color: ECONOMY_COLOR },
      { name: "podnikání", color: PODNIKANI_COLOR },
      { name: "soutěž", color: COMPETETION_COLOR },
    ],
    date: "05/2023",
  },
  {
    title: "Cena děkana NF VŠE za nejlepší středoškolsou práci",
    description:
      "Ve své první (ne)odborné práci jsem je mezi sebou srovnával FIAT měny s Bitcoinem. Vyhrála 2. místo.",
    link: "https://mareksvitek.cz/je-bitcoin-lepsi-nez-fiat",
    imgSrc:
    vse,
    tags: [
      { name: "ekonomie", color: ECONOMY_COLOR },
      { name: "soutěž", color: COMPETETION_COLOR },
    ],
    date: "05/2023",
  },
  {
    title: "Elements of AI",
    link: "https://www.elementsofai.cz/",
    date: "06/2022",
    description:
      "Světově známý online kurz o teoretických základech umělé inteligence (AI).",
    imgSrc: "https://elementsofai.s3.amazonaws.com/facebook.png",
    tags: [
      { name: "MOOC", color: MOOC_COLOR },
      { name: "IT", color: IT_COLOR },
    ],
  },
  {
    title: "Základy kybernetické bezpečnosti",
    description:
      "Online kurz o bezpečnosti a soukromí na internetu. Vytvořen Národním úřádem pro kybernetickou bezpečnost (NÚKB).",
    link: "https://osveta.nukib.cz/local/dashboard/",
    imgSrc:
      "https://osveta.nukib.cz/pluginfile.php/243/local_course_attributes/attribute_image_pathnamehash/32/Kreslic%C3%AD%20pl%C3%A1tno%201_04.png",
    tags: [
      { name: "MOOC", color: MOOC_COLOR },
      { name: "IT", color: IT_COLOR },
    ],
    date: "04/2022",
  },
  {
    title: "Dovednosti pro byznys",
    description:
      "Online kurz od KPMG o dovednostech důležité na trhu a práce, pro byznys a obecně pro život.",
    link: "https://youniversity.cz/",
    imgSrc: youniversity,
    tags: [{ name: "MOOC", color: MOOC_COLOR }, { name: "podnikání", color: PODNIKANI_COLOR }],
    date: "08/2022",
  },

  
 
  {
    title: "Prázdninová škola podnikání",
    description:
      "Tato prázdninovka mě seznámila s podnikatelskou teorií, která je potřeba před rozjezdem vlastního startupu.",
    imgSrc: jicPrazdninovka,
    tags: [{ name: "podnikání", color: PODNIKANI_COLOR }],
    date: "08/2021",
  },
  {
    title: "#startupcamp",
    description:
      "Další skvělá akce, kde jsem se opět zjistil, že je ze začátku nutné otestovat MVP a pak se až do toho pustit.",
    imgSrc: jicCamp,
    tags: [{ name: "podnikání", color: PODNIKANI_COLOR }],
    date: "08/2022",
  },
  {
    title: "#novágenerace",
    description:
      "Během sebepoznávacího programu jsem zjistil co jsou moje hodnoty, potřeby (a že při jejich nenaplnění vznikají emoce) a jak s nimi pracovat.",
    imgSrc: jicNova,
    tags: [{ name: "pordnikání", color: PODNIKANI_COLOR }],
    date: "01/2022",
  },
  {
    title: "Pojď si pro nápad",
    description:
      "Tento program mi prohloubil podnikateslkou teorii z prázdninovky a ukázal mi metodu Design Thinking.",
    imgSrc: jicPojd,
    tags: [{ name: "podnikání", color: PODNIKANI_COLOR }],
    date: "04/2022",
  },
 
  {
    title: "Leancanvas.cz",
    link: "https://www.leancanvas.cz/",
    description:
      "V tomto kurzu jsem se naučil podrobně pracovat s LeanCannvasem. Od teď už nebudu do projektů skákat po jen tak po hlavě.",
    imgSrc:
      "https://images.unsplash.com/photo-1629019621374-94c3bae51815?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1183&q=80",
    tags: [
      { name: "MOOC", color: MOOC_COLOR },
      { name: "podnikání", color: PODNIKANI_COLOR },
    ],
    date: "05/2021",
  },
];

export const Head = () => <Seo title="Aktivity" />;

export default Page;
