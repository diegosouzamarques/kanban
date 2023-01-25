import style from "./Dashboard.module.scss";
import Step from "../../Components/Step/Step";
import { FaseStep } from "../../Enum/FaseStep";


const Dashboard = () => {

  return (
    <main className={style.main}> 
      <Step step={FaseStep.todo}></Step>
      <Step step={FaseStep.doing}></Step>
      <Step step={FaseStep.done}></Step>
      <Step step={FaseStep.approved}></Step>
    </main>
  );
};
export default Dashboard;
