import Card from "../components/card.tsx";
import List from "../components/list.tsx";

const hoge = [
  {
    id: 1,
    title: "title1",
    description: "description1",
  },
  {
    id: 2,
    title: "title2",
    description: "description2",
  },
  {
    id: 3,
    title: "title3",
    description: "description3",
  },
];

export default function Home() {
  return (
    <div>
      <h1>Slot Test</h1>
      {hoge.map((item) => {
        return <>{item.title}
          <hr />
        </>;
      })}

      <List hoge={hoge}>
        <Card />
      </List>
    </div>
  );
}
