import styles from "./Step.module.scss";
import classNames from "classnames";
import { FaseStep } from "../../Enum/FaseStep";
import Card from "../Card/Card";
import useStepListaWF from "../../State/hooks/useStepListaWF";
import useAtualizarStepWF from "../../State/hooks/useAtualizarStepWF";

interface IStep {
  step: FaseStep;
}

const Step = ({ step }: IStep) => {
  let stepKey = Object.keys(FaseStep)[Object.values(FaseStep).indexOf(step)];
  const listaWF = useStepListaWF({ step });
  const atualizarStepWF = useAtualizarStepWF();

  const drop = (ev: React.DragEvent<HTMLDivElement>) => {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    console.log("Data: " + data);
    atualizarStepWF(data, step);
  };

  const allowDrop = (ev: React.DragEvent<HTMLDivElement>) => {
    ev.preventDefault();
  };

  return (
    <div
      className={classNames(styles.step, styles[`step__conteudo_${stepKey}`])}
      onDrop={drop}
      onDragOver={allowDrop}
    >
      <h2
        className={classNames(
          styles.step__cabecalho,
          styles[`step__cabecalho_${stepKey}`]
        )}
      >
        {step}
      </h2>
      {listaWF.map((item, index) => (
        <Card key={index} workFlow={item} />
      ))}
    </div>
  );
};

export default Step;
