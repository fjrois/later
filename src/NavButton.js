import './NavButton.css';

export default function NavButton({ children }) {
  return (
    <button class="btn">
      {/* <a href="">{children}</a> */}
      <div>{children}</div>
    </button>
  );
}
