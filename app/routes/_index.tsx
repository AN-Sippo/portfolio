import type { LinksFunction } from "@remix-run/node";
import { IconName, Icons, links as iconLinks } from "~/components/Icons/icons";
import {
  ArrowDownIcon,
  links as iconsLinks,
} from "~/components/Icons/arrowDown";

export const links: LinksFunction = () => [
  ...iconLinks(),
  ...iconsLinks(),
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
    </main>
  );
}

const Landing = () => {
  return (
    <section id="landing">
      <Icons circle name="Sippo" />
      <h1>
        <span>Hi,I'm Sippo. </span>
        <span>Thank you for visiting!!!</span>
      </h1>
      <ArrowDownIcon className="landing-icon" />
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
          主にフロントエンドを得意としているが、興味の幅は広くサーバーサードやFlutterを用いたモバイルアプリ開発なども行う。他にも色々文章。他にも色々文章。
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
