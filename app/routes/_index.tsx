import type { LinksFunction } from "@remix-run/node";
import { IconName, Icons, links as iconLinks } from "~/components/Icons/icons";
import { ReactDOM, ReactElement } from "react";
import { Work, works } from "~/contents/works";
import { IconButton } from "~/components/iconButtons/iconButtons";

export const links: LinksFunction = () => [
  ...iconLinks(),
  {
    rel: "stylesheet",
    href: "app/routes/_index.css",
  },
];

export default function Home() {
  return (
    <main>
      <Landing />
      <AboutMe />
      <Skills />
      <Works />
    </main>
  );
}

const Works = () => {
  return (
    <section className="section" id="works">
      <h2>Works</h2>
      <ul>
        {works.map((work) => (
          <WorkCard {...work} />
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
    <li className="workcard">
      <IconButton name={name} href={productUrl} className="workicon" />
      <div>
        <a href={productUrl}>
          <h4>{title}</h4>
        </a>
        <div className="workcard-links">
          {sourceCodeUrl ? <Icons name="code" size="24px" /> : <></>}
          {productUrl ? <Icons name="outside" size="24px" /> : <></>}
        </div>
        <p>{description}</p>
      </div>
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
        <Icons circle name="Sippo" size="150px" />
        <div id="aboutme-name-others">
          <h4>Sippo</h4>
          <OtherMediaIcons />
        </div>
      </div>
      <div id="aboutme-content">
        <p>Sippoは北海道在住の放課後エンジニア。普段は限界医学生をしている。</p>
        <p>
          主にフロントエンドを得意としているが、興味の幅は広くサーバーサイドやFlutterを用いたモバイルアプリ開発なども行う。他にも色々文章。他にも色々文章。
        </p>
        <p>
          他にも色々文章。 他にも色々文章。 他にも色々文章。 他にも色々文章。
          他にも色々文章。 他にも色々文章。 他にも色々文章。 他にも色々文章。
          他にも色々文章。
        </p>
      </div>
    </section>
  );
};

const OtherMediaIcons = () => {
  const icons: Array<IconName> = ["github", "twitter", "qiita"];
  return (
    <ul id="other-media-icons">
      {icons.map((icon) => (
        <li key={icon}>
          <Icons name={icon} size="32px" />
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
          <Icons name={skillName} />
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
