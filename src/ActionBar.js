import './ActionBar.css';

export default function ActionBar() {
  return (
    <div className="bar">
      <button>Profile</button>
      <form onSubmit={() => {}}>
        <input type="text" />
      </form>
      <button>Whatever</button>
    </div>
  );
}
