import { SkillsContent, SkillItem } from "./SkillStyles";

const Skill = ({ image, title, description }) => {
  return (
    <SkillsContent>
      <SkillItem>
        <img src={image} alt={title} />
        <span>{title}</span>
        <p>{description}</p>
      </SkillItem>
    </SkillsContent>
  );
};

export default Skill;
