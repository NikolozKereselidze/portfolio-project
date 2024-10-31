import webImages from "../webImageImport";
import Card from "./Card";

const JsCard = () => {
  return (
    <>
      <Card
        href="https://nikolozkereselidze.github.io/weather-forecast/"
        src={webImages.weather}
        title="Weather"
        subtitle="Js"
        mode="light"
      />

      <Card
        href="https://georgianbankist.netlify.app/"
        src={webImages.bankist}
        title="Bankist"
        subtitle="Js"
      />

      <Card
        href="https://nikolozkereselidze.github.io/Todo-list/"
        src={webImages.todo}
        title="Todo"
        subtitle="Js"
      />

      <Card
        href="https://omnifoodsdelivery.netlify.app/"
        src={webImages.omnifood}
        title="Delivery"
        subtitle="Js"
      />

      <Card
        href="https://dicerollgames.netlify.app/"
        src={webImages.dice}
        title="Dice"
        subtitle="Js"
      />
    </>
  );
};

export default JsCard;
