import './Board.css';
import Card from './Card';

// const cards = [
//   {
//     id: '1',
//     summary: 'Do something with something',
//   },
//   {
//     id: '2',
//     summary: 'Do something with something',
//   },
//   {
//     id: '3',
//     summary: 'Do something with something',
//   },
//   {
//     id: '4',
//     summary: 'Do something with something',
//   },
// ];

export default function Board() {
  return (
    <div className="board">
      {/* <p>Content</p> */}
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}
