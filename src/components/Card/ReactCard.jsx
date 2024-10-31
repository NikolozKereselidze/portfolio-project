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
      />

      <Card
        href="https://clothingmosaic.netlify.app/"
        src={webImages.shopping}
        title="Shop"
        subtitle="React"
      />

      <Card
        href="https://memorizemaster.netlify.app/"
        src={webImages.memorize}
        title="Memorize"
        subtitle="React"
        mode="light"
      />
    </>
  );
};

export default ReactCard;
