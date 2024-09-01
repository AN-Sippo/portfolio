import type { LinksFunction } from "@remix-run/node";
import { EngineerIcon, links as iconLinks } from "~/components/engineerIcon";
import { IconName, SkillIcon } from "~/components/Icons/skillIcons";
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
      <Skills />
    </main>
  );
}

const Landing = () => {
  return (
    <section id="landing">
      <EngineerIcon />
      <h1>
        <span>Hi,I'm Sippo. </span>
        <span>Thank you for visiting!!!</span>
      </h1>
      <ArrowDownIcon className="landing-icon" />
    </section>
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
        <li className="skill-item">
          <SkillIcon name={skillName} />
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
