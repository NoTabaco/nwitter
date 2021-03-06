import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Navigation = ({ userObj }) => (
  <nav>
    <ul
      style={{
        listStyle: "none",
        display: "flex",
        justifyContent: "center",
        marginTop: 50,
      }}
    >
      <li>
        <Link
          to="/"
          style={{
            marginRight: 15,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            fontSize: 12,
          }}
        >
          <FontAwesomeIcon icon={faTwitter} color={"#04AAFF"} size="3x" />
          <span style={{ marginTop: 5, color: "white", fontWeight: "bold" }}>
            Home
          </span>
        </Link>
      </li>
      <li>
        <Link
          to="/profile"
          style={{
            marginLeft: 15,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            fontSize: 12,
          }}
        >
          <FontAwesomeIcon icon={faUser} color={"#04AAFF"} size="3x" />
          <span style={{ marginTop: 5, color: "white", fontWeight: "bold" }}>
            {userObj.displayName
              ? `${userObj.displayName}'s Profile`
              : "Profile"}
          </span>
        </Link>
      </li>
    </ul>
  </nav>
);

export default Navigation;
