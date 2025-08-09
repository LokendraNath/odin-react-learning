export default function Chat({ contact, message, dispatch }) {
  return (
    <section className="chat">
      <textarea
        value={message}
        className="border-2"
        placeholder={"Chat to " + contact.name}
        onChange={(e) => {
          dispatch({ type: "edited_message", message: e.target.value });
        }}
      />
      <br />
      <button className="bg-blue-500 py-2 px-4 rounded-2xl">Send to {contact.email}</button>
    </section>
  );
}
