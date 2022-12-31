export default function Root() {
  return (
    <>
      <div id="sidebar">
        <h1>React Router</h1>
        <div>
        </div>
        <nav>
          <ul>
            <li>
              <a href={`signup`}>Sign Up</a>
            </li>
            <li>
              <a href={`signin`}>Sign In</a>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail"></div>
    </>
  );
}