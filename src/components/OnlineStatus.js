import useOnlineStatus from "../utils/useOnlineStatus";

const OnlineStatus = () => {
  const isOnline = useOnlineStatus();

  if (isOnline) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        background: "#ff4d4f",
        color: "#fff",
        textAlign: "center",
        padding: "10px",
        fontWeight: 500,
        zIndex: 9999,
      }}
    >
      ⚠️ You are offline. Please check your internet connection.
    </div>
  );
};

export default OnlineStatus;
