import { jwtDecode } from "jwt-decode";
import { logout } from "../../redux/slices/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Profile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const tokenData = token ? jwtDecode(token) : null;

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div>
      <h1>Profile Page</h1>
      <div>
        {tokenData ? (
          <div>
            <h2>{tokenData.user.id}</h2>
            <p>{tokenData.user.email}</p>
          </div>
        ) : (
          <h2>Log into account</h2>
        )}
      </div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Profile;
