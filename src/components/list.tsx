import { type Hoge } from "../types/slot-list";

export default function list({
  Children,
  hoge,
}: {
  Children: React.ReactNode;
  hoge: Hoge[];
}) {
  return (
    <>
      {hoge.map((item) => (
        <div key={item.id}>{Children}</div>
      ))}
    </>
  );
}
