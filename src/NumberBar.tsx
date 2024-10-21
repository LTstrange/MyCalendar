import Button from "./Button";

function NumberBar({
  arrowLeft,
  arrowRight,
  number,
  setter,
}: {
  arrowLeft: string;
  arrowRight: string;
  number: number;
  setter: (num: number) => void;
}) {
  return (
    <div className="flex justify-between ">
      <Button text={arrowLeft} onClick={() => setter(number - 1)} />
      <span className="cursor-default">{number}</span>
      <Button text={arrowRight} onClick={() => setter(number + 1)} />
    </div>
  );
}

export default NumberBar;
