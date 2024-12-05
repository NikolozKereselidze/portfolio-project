import webImages from "../webImageImport";
import Card from "./Card";

const CombinedCard = () => {
  return (
    <>
      <Card
        href="https://cvmosaic.netlify.app/"
        src={webImages.cv}
        title="Cv"
        subtitle="React"
        desc="Cv creating website"
      />

      <Card
        href="https://clothingmosaic.netlify.app/"
        src={webImages.shopping}
        title="Shopping"
        subtitle="React"
        desc="Shopping website"
      />

      <Card
        href="https://nikolozkereselidze.github.io/weather-forecast/"
        src={webImages.weather}
        title="Weather"
        subtitle="Js"
        mode="light"
        desc="Weather Forecast website"
      />

      <Card
        href="https://memorizemaster.netlify.app/"
        src={webImages.memorize}
        title="Memorize"
        subtitle="React"
        mode="light"
        desc="Memorizing game website"
      />

      <Card
        href="https://georgiantravel.netlify.app/"
        src={webImages.travel}
        title="Travel"
        subtitle="React"
        mode="light"
        desc="Travel agency website"
      />

      <Card
        href="https://georgianbankist.netlify.app/"
        src={webImages.bankist}
        title="Bankist"
        subtitle="Js"
        desc="Banking website"
      />

      <Card
        href="https://nikolozkereselidze.github.io/Todo-list/"
        src={webImages.todo}
        title="Todo"
        subtitle="Js"
        desc="Todo list website"
      />

      <Card
        href="https://omnifoodsdelivery.netlify.app/"
        src={webImages.omnifood}
        title="Delivery"
        subtitle="Js"
        desc="Food delivery website"
      />

      <Card
        href="https://dicerollgames.netlify.app/"
        src={webImages.dice}
        title="Dice"
        subtitle="Js"
        desc="Dice game website"
      />
    </>
  );
};

export default CombinedCard;
