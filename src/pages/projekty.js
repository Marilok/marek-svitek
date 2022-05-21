import * as React from "react"
import "../style.sass"
import "@fontsource/open-sans"
import Template from "../components/Template.tsx"
import ProjectCard from "../components/ProjectCard.tsx"
import { Helmet } from "react-helmet"
import { Wrap } from "@chakra-ui/react"
import barkaUno from "../images/barka-uno.jpg"

const page = () => {
    const projects = [
        {
            title: 'Soutěž & Podnikej',
            description: 'V soutěži jsem se účastnil s projektem Barka, který měnil ošklivé a nudné karty v jedinečné, cool a originální. Získali 3. místo v Jihomoravském kraji.',
            link: 'https://soutezapodnikej.cz/blog/chteli-bychom-skoncovat-s-osklivymi-a-nudnymi-platebnimi-kartami-rikaji-marek-svitek-a-zuzana-jurtikova/',
            imgSrc:'https://scontent.fprg5-1.fna.fbcdn.net/v/t1.6435-9/67588113_2964290306945991_1978949315988553728_n.png?_nc_cat=111&ccb=1-5&_nc_sid=730e14&_nc_ohc=OmifJ7cnJKgAX9lP6tZ&_nc_ht=scontent.fprg5-1.fna&oh=00_AT9sP19-4Sj5YZ_1aYE5g8vQwe66TviY5An0ztjuSnq9qg&oe=6284FC81',
            tags: [{ name: 'podnikání', color: 'blue' }, { name: 'soutěž', color: 'yellow' }],
            date: '02/2022',
            
        },
        {
            title: 'Základy kybernetické bezpečnosti',
            description: 'Online kurz o bezpečnosti a soukromí na internetu. Vytvořen Národním úřádem pro kybernetickou bezpečnost (NÚKB).',
            // siteURL: 'https://ip-address-tracker-master-git-main.marilokms.vercel.app/',
            // codeURL: 'https://github.com/Marilok/ip-address-tracker-master',
            link: 'https://osveta.nukib.cz/local/dashboard/',
            imgSrc: 'https://osveta.nukib.cz/pluginfile.php/243/local_course_attributes/attribute_image_pathnamehash/32/Kreslic%C3%AD%20pl%C3%A1tno%201_04.png', tags: [{ name: 'MOOC', color: 'red' }, { name: 'IT', color: 'orange' }]
            ,date: '04/2022',

            
        },
        
        {
            title: 'Stáž React App Developer',
            description: 'Během stáže jsem spoluvyvíjel UI aplikace pro ovládání chytrých lamp ve startupu Spectoda. Pracoval jsem v ReactJS.',
            link: 'https://spectoda.com/',
            imgSrc: 'https://media-exp1.licdn.com/dms/image/C4E0BAQGHvX5adnRTAg/company-logo_200_200/0/1652878611640?e=1660780800&v=beta&t=4cOor4ltPv4hN4RZyNaQhyahF7rjoKXRjBs_6FHMnVo',
            tags: [{ name: 'IT ', color: 'orange' }, { name: 'work', color: 'black' }],
            date: '05/2022',
        },
        {
            title: 'Seminář ekonomických mozků',
            description: 'Ekonomický korespondenční seminář od Masarykovy univerzity. Během soutěže jsem zjistil, že mě opravdu baví ekonomie. Díky tomu jsem vyhrál 2. místo.',
            link: 'https://www.econ.muni.cz/spoluprace/spoluprace-se-ss/seminar-ekonomickych-mozku',
            imgSrc: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.muni.cz%2Fmedia%2F3076606%2Fsem_logo.png%3Fmode%3Dcrop%26center%3D0.38%2C0.59%26rnd%3D131716678350000000%26width%3D0&f=1&nofb=1',
            tags: [{ name: 'ekonomie', color: 'green' }, { name: 'soutěž', color: 'yellow' }]
            , date: '03/2022',

        },
        {
            title: 'Prázdninová škola podnikání',
            description: 'Tato prázdninovka mě seznámila s podnikatelskou teorií, která je potřeba před rozjezdem vlastního startupu.',
            imgSrc: 'https://scontent.fprg5-1.fna.fbcdn.net/v/t1.6435-9/196137137_10157785272980826_8874093224623737172_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=340051&_nc_ohc=GkCXzCJGeGYAX9fkSSa&tn=ywITuoMTMcb7mFw7&_nc_ht=scontent.fprg5-1.fna&oh=00_AT-Q4EwJbIXoovctDoZWvT4h_W48CMkkN_S4VEP36pe-lQ&oe=6289820E', tags: [{ name: 'podnikání', color: 'blue' }]
            , date: '08/2021',


        },
        {
            title: '#novágenerace',
            description: 'Během sebepoznávacího programu jsem zjistil co jsou moje hodnoty, potřeby (a že při jejich nenaplnění vznikají emoce) a jak s nimi pracovat.',
            imgSrc: 'https://data.jic.cz/events_photo_share/1227.png', tags: [{ name: 'pordnikání', color: 'blue' }]
            , date: '01/2022',


        },
        {
            title: 'Pojď si pro nápad',
            description: 'Tento program mi prohloubil podnikateslkou teorii z prázdninovky a ukázal mi metodu Design Thinking.',
            imgSrc: 'https://scontent.fprg5-1.fna.fbcdn.net/v/t39.30808-6/274162348_10158211180475826_2063523995144220495_n.jpg?_nc_cat=104&ccb=1-6&_nc_sid=340051&_nc_ohc=hOtJBKsjVZkAX_CrLL5&_nc_ht=scontent.fprg5-1.fna&oh=00_AT-naVdYXiW4kOoU_t7hRmuw9gd2Rfxvc9M2p4qqayvx2w&oe=628A5A24', tags: [{ name: 'podnikání', color: 'blue' }]
,date: '04/2022',

        },
        {
            title: 'Elements of AI',
            link: 'https://www.elementsofai.cz/',
            date: 'DOING',
            description: 'Online kurz o umělé inteligenci (AI), který jsem ještě nedokončil. 🙈',
            imgSrc: 'https://elementsofai.s3.amazonaws.com/facebook.png', tags: [{ name: 'MOOC', color: 'red' }, { name: 'IT', color: 'orange' }]


        },
        {
            title: 'Leancanvas.cz',
            link: 'https://www.leancanvas.cz/',
            description: 'V tomto kurzu jsem se naučil podrobně pracovat s LeanCannvasem, místo toho abych do nějákého projektu neskočil jen tak po hlavě.',
            imgSrc: 'https://images.unsplash.com/photo-1629019621374-94c3bae51815?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1183&q=80', tags: [{ name: 'MOOC', color: 'red' },{ name: 'podnikání', color: 'blue' }]
,date: '05/2021',

        },
        {
            title: 'Barka - Barevná karta',
            description: 'Projekt',
            imgSrc: barkaUno, 
            link: 'https://barevnakarta.cz/', tags: [{ name: 'podnikání', color: 'blue' }]
,date: '02/2022',

        },
        
    ]



    return (

        <>
            <Helmet>
                <meta name="theme-color" content="#01579B" />
                <meta charSet="utf-8" />
                <html lang="cs" />
                <title>Podnikavý středoškolák Svíťa &#128075;</title>
                <meta name="description" content="Ahoj!  &#128075; &#128187;" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
                <meta name="theme-color" content="#01579B" />

            </Helmet>

            <Template>
                <Wrap p={6} spacing={'1em'} align={'center'} justify={'center'} >
                
                {projects.map((project, index) => (
                    <ProjectCard title={project.title} key={index} imgSrc={project.imgSrc} description={project.description} tags={project.tags} {...project}></ProjectCard>)
                )}
                </Wrap>
            </Template>
        </>

    )
}

export default page