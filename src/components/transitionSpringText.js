import { useEffect, useState } from "react";
import { useTransition, a } from "react-spring";

export default function TransitionArray() {
  const [items, setItems] = useState(["1", "2", "3"]);

  const transitions = useTransition(items, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    delay: 200,

    onRest: () => setItems([]),
  });

  useEffect(() => {
    if (items.length === 0) {
      setTimeout(() => {
        setItems(["1", "2", "3"]);
      }, 2000);
    }
  }, [items]);

  return (
    <div style={{ display: "flex" }}>
      {transitions(({ opacity }, item) => (
        <a.div
          style={{
            opacity: opacity.to(item.op),
            transform: opacity
              .to(item.trans)
              .to((y) => `translate3d(0,${y}px,0)`),
          }}
        >
          {item.fig}
        </a.div>
      ))}
    </div>
  );
}
