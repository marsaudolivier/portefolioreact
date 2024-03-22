import WeAre from "../composent/WeAre";
import Header from "../composent/Head";
import Foot from "../composent/Foot";
import Skillreact from "../composent/Skillreact";
import SkillWp from "../composent/SkillWp";
import SkillPresta from "../composent/SkillPresta";
import SkillNode from "../composent/SkillNode";
import Presentation from "../composent/Presentation";
import Techno from "../composent/Techno";
import Service from "../composent/Service";
import Mecontact from "../composent/contact";




export default function IndexPage() {
  return (
    <>
    <Header />
    <WeAre />
    <Presentation />
    <Techno />
    <Skillreact />
    <SkillWp />
    <SkillPresta />
    <SkillNode />
    <Service />
    <Mecontact />
    <Foot />


   
    </>
  );
}
