import webImages from "../webImageImport";
import Card from "./Card";

const ReactCard = () => {
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
        title="Shop"
        subtitle="React"
        desc="Shopping website"
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
        href="https://memorizemaster.netlify.app/"
        src={webImages.memorize}
        title="Memorize"
        subtitle="React"
        mode="light"
        desc="Memorizing game website"
      />
    </>
  );
};

export default ReactCard;
