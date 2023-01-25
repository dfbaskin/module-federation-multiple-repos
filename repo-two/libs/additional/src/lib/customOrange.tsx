import { useEffect } from "react";
import { ComponentPanel, useComponentStore, Counts, countsSelectorFactory } from "@example/components";
import "./customOrange.css";

const countsSelector = countsSelectorFactory("orange");

interface Props {
  id: string;
  publishEvent: (event: Event) => boolean;
}

export function CustomOrange({ id, publishEvent }: Props) {
  const { addComponent, removeComponent, ...counts } =
    useComponentStore(countsSelector);

  useEffect(() => {
    addComponent("orange");
    return () => {
      removeComponent("orange");
    };
  }, [addComponent, removeComponent]);

  const onClosePanel = () => {
    publishEvent(
      new CustomEvent("panelClosed", {
        bubbles: true,
        detail: { panelId: id },
      })
    );
  };

  return (
    <ComponentPanel className="custom-orange" onClosePanel={onClosePanel}>
      <h1>ORANGE</h1>
      <div>{id}</div>
      <div>
        <Counts
          title="ORANGE"
          added={counts.addedCount}
          removed={counts.removedCount}
        />
        <Counts
          title="Total"
          added={counts.addedTotalCount}
          removed={counts.removedTotalCount}
        />
      </div>
    </ComponentPanel>
  );
}

export default CustomOrange;
