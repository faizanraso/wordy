import toast from "react-hot-toast";

export default function gameStartNotification() {
  toast("Start guessing words!", {
    duration: 4000,
    position: "top-center",
    className: "font-semibold ",
  });
}
