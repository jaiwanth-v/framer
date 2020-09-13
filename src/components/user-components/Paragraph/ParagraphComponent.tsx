import React, { useContext } from "react";
import { AppContext } from "../../../Context/App.context";

interface Props {
  id: any;
}

interface ItemType {
  type: string;
  id: any;
  value: string;
}

const TextComponent: React.FC<Props> = ({ id }) => {
  const { state } = useContext(AppContext);
  const paragraph = () => {
    const requiredItem: ItemType = state.items.filter(
      (item: any) => item.id === id
    )[0];
    return requiredItem.value;
  };
  return (
    <div>
      <p style={{ maxWidth: "600px" }}>
        {paragraph() ||
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quae in sit veniam aliquid, laboriosam distinctio vitae dolorum itaque nulla debitis, totam commodi dolores. Nobis ullam expedita dolore, fugit quia in corrupti quis, hic accusantium molestias obcaecati aspernatur fuga? Eligendi, ut labore fugit saepe enim dolore in totam temporibus. Ipsum voluptate quibusdam autem deleniti laboriosam aliquam sed labore repudiandae magni cupiditate obcaecati similique saepe neque quo veniam incidunt, ab consectetur soluta repellat alias quasi nesciunt fugit qui nulla? Magnam nesciunt culpa illo dolorem velit, provident ducimus laboriosam adipisci nam nostrum, fugiat eligendi alias corporis laborum est rem sed excepturi ab."}
      </p>
    </div>
  );
};

export default TextComponent;
