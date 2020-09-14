import React, { useContext, memo } from "react";
import { AppContext } from "../../../Context/App.context";
interface Props {
  id: any;
}

interface ItemType {
  type: string;
  id: any;
  value: string;
  href: string;
}

const LinkComponent: React.FC<Props> = ({ id }) => {
  const { state } = useContext(AppContext);
  const typeToReturn = (): React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > => {
    const item = () => {
      const requiredItem: ItemType = state.items.filter(
        (item: any) => item.id === id
      )[0];
      return requiredItem;
    };

    if (state.edit)
      return (
        <>
          <p style={{ color: "#007bff" }}>{item().value || "Link"}</p>
        </>
      );
    else
      return (
        <a
          href={`${
            item().href
              ? item().href.includes("http")
                ? item().href
                : `https://${item().href}`
              : "#"
          }`}
          target="__blank"
        >
          {item().value || "Link"}{" "}
        </a>
      );
  };
  return <>{typeToReturn()}</>;
};

export default memo(LinkComponent);
