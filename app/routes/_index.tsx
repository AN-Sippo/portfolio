import {
  json,
  type LinksFunction,
  type MetaFunction,
} from "@remix-run/cloudflare";
import { IconName, Icons, links as iconLinks } from "~/components/Icons/icons";
import { Work, works } from "~/contents/works";
import { IconButton } from "~/components/iconButtons/iconButtons";
import { mediaIconDataArray } from "~/contents/medias";
import { loadRecentArticles } from "~/utils/blog/blog";
import { useLoaderData } from "@remix-run/react";
import { Blog, links as blogLinks } from "~/components/Home/blog";

export const links: LinksFunction = () => [
  ...iconLinks(),
  ...blogLinks(),
  {
    rel: "stylesheet",
    href: "assets/css/_index.desktop.css",
    media: "(min-width:800px)",
  },
  {
    rel: "stylesheet",
    href: "assets/css/_index.mobile.css",
    media: "(max-width:799px)",
  },
  {
    rel: "icon",
    href: "/assets/img/icon_engineer.png",
  },
];

export const meta: MetaFunction = () => [{ title: "Sippo's Home Page" }];

export const loader = async () => {
  const articles = loadRecentArticles(10);
  return json({ articles });
};

export default function Home() {
  const { articles } = useLoaderData<typeof loader>();
  return (
    <main>
      <Landing />
      <AboutMe />
      <Skills />
      <Works />
      <Blog articles={articles} />
    </main>
  );
}

const Works = () => {
  return (
    <section className="section" id="works">
      <h2>Works</h2>
      <ul>
        {works.map((work) => (
          <WorkCard {...work} key={work.name} />
        ))}
      </ul>
    </section>
  );
};

const WorkCard = ({
  title,
  name,
  productUrl,
  sourceCodeUrl,
  description,
}: Work) => {
  return (
    <li className="workcard" key={title}>
      <div className="workcard-main">
        <IconButton name={name} href={productUrl} className="workicon" />
        <div>
          <a href={productUrl}>
            <h4>{title}</h4>
          </a>
          <div className="workcard-links">
            {sourceCodeUrl ? (
              <IconButton name="code" size="19px" href={sourceCodeUrl} />
            ) : (
              <></>
            )}
            {productUrl ? (
              <IconButton name="outside" size="24px" href={productUrl} />
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
      <p>{description}</p>
    </li>
  );
};
const Landing = () => {
  return (
    <section id="landing">
      <Icons circle name="Sippo" />
      <h1>
        <span>Hi,I'm Sippo. </span>
        <span>Thank you for visiting!!!</span>
      </h1>
      <IconButton name="arrowDown" className="landing-icon" href="#aboutme" />
    </section>
  );
};

const AboutMe = () => {
  return (
    <section className="section" id="aboutme">
      <h2>About me</h2>
      <div id="aboutme-name-icon">
        <Icons circle name="Sippo" className="aboutme-sippo-icon" />
        <div id="aboutme-name-others">
          <h4>Sippo</h4>
          <OtherMediaIcons />
        </div>
      </div>
      <div id="aboutme-content">
        <p>Sippoは北海道在住の放課後エンジニア。普段は限界医学生をしている。</p>
        <p>
          主にフロントエンドを得意としているが、興味の幅は広くサーバーサイドやFlutterを用いたモバイルアプリ開発なども行う。
        </p>
      </div>
    </section>
  );
};

const OtherMediaIcons = () => {
  return (
    <ul id="other-media-icons">
      {mediaIconDataArray.map((icon) => (
        <li key={icon.name}>
          <IconButton name={icon.name} size="32px" href={icon.href} />
        </li>
      ))}
    </ul>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="section">
      <h2>Skills</h2>
      <SkillSection
        title="業務レベル"
        skills={["typescript", "Css", "Html", "javascript", "react", "nextjs"]}
      />
      <SkillSection
        title="趣味レベル"
        skills={[
          "firebase",
          "golang",
          "gcp",
          "pnpm",
          "python",
          "remix",
          "vercel",
          "oauth",
          "flutter",
          "dart",
          "github",
        ]}
      />
      <SkillSection title="経験あり" skills={["docker"]} />
    </section>
  );
};

const SkillsGrid = ({ skills }: { skills: Array<IconName> }) => {
  return (
    <ul className="skills-grid">
      {skills.map((skillName) => (
        <li className="skill-item" key={skillName}>
          <Icons name={skillName} className="skillicon" />
        </li>
      ))}
    </ul>
  );
};

const SkillSection = ({
  title,
  skills,
}: {
  title: string;
  skills: Array<IconName>;
}) => {
  return (
    <div className="skill-section">
      <h3>{title}</h3>
      <SkillsGrid skills={skills} />
    </div>
  );
};
