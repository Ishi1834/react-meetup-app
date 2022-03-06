import NewMeetupForm from "../components/meetups/NewMeetupForm";
import { useNavigate } from "react-router-dom";

export default function NewMeetupsPage() {
  const navigate = useNavigate();

  function handleAddMeetup(meetupData) {
    // post request
    fetch(
      "https://learn-react-meetup-477a0-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      //after the fetch navigate to home page
      // if you don't want the user to be able to return to the form use
      // navigate('/', { replace: true })
      navigate("/");
    });
  }
  return (
    <div>
      <h1>NewMeetupsPage</h1>
      <NewMeetupForm onAddMeetup={handleAddMeetup} />
    </div>
  );
}
