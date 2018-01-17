import { h, Component } from "preact";

export default class Credits extends Component {
  render() {
    return (
      <div>
        <h1>Credits</h1>
        <h2>Content</h2>
        <div>
          <p>
            {" "}
            Content for the site was pulled from{" "}
            <a href="http://gameranx.com/">Gameranx</a>
          </p>
          <ul>
            <li>
              <a
                target="_blank"
                href="http://gameranx.com/features/id/126105/article/call-of-duty-ww2-zombies-how-to-upgrade-the-tesla-gun-all-variants-guide/"
              >
                Telsa Gun Guide
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="http://gameranx.com/features/id/126132/article/call-of-duty-ww2-zombies-true-easter-egg-guide-hardcore-walkthrough/"
              >
                Main Quest Guid
              </a>
            </li>
          </ul>
        </div>
        <h2>Icon</h2>
        Zombie Icons made by{" "}
        <a target="_blank" href="http://www.freepik.com" title="Freepik">
          Freepik
        </a>{" "}
        from{" "}
        <a target="_blank" href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>{" "}
        is licensed by{" "}
        <a
          target="_blank"
          href="http://creativecommons.org/licenses/by/3.0/"
          title="Creative Commons BY 3.0"
          target="_blank"
        >
          CC 3.0 BY
        </a>
      </div>
    );
  }
}
