import React, { useContext } from "react";
import "./Customize.scss";
import { AppContext } from "../../Context/App.context";
import ImageForm from "./ImageForm";
import ButtonForm from "./ButtonForm";
import HeadingForm from "./HeadingForm";
import TextForm from "./TextForm";
import ParagraphForm from "./ParagraphForm";
import LinkForm from "./LinkForm";
import SelectOptions from "./SelectOptions";

interface Props {
  text?: string;
}

const Customize: React.FC<Props> = ({ text }) => {
  const { state } = useContext(AppContext);

  const optionsToShow = () => {
    const requiredItem = state.items.filter(
      (item: any) => item.id === state.activeId
    )[0];

    if (!requiredItem)
      return <h4 className="text-center">Click on a component to customize</h4>;

    switch (requiredItem.type) {
      case "image":
        return <ImageForm />;
      case "button":
        return <ButtonForm />;
      case "heading":
        return <HeadingForm />;
      case "text":
        return <TextForm />;
      case "paragraph":
        return <ParagraphForm />;
      case "link":
        return <LinkForm />;
      case "dropdown":
        return <SelectOptions />;
      default:
        return (
          <h4 className="text-center">Click on a component to customize</h4>
        );
    }
  };

  return (
    <div className="customize shadow rounded-lg p-4 mt-5">
      <h3 className="text-center p-2 mb-4">Customize</h3>
      {optionsToShow()}
    </div>
  );
};

export default Customize;
