import "../Hooks.css";

const Controlled = () => {

  const handleSubmit = (event) => {
    event.preventDefault();
    const dataValue = document.querySelector("#inputName").value;
  
  console.log(dataValue)

};

  return (
    <section className="container state-container">
      <h1>Controlled Component</h1>

      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input id="inputName" name="name" type="text" />

          <br />

          <button type="submit" className="state-button">
            Submit
          </button>
        </label>
      </form>
    </section>
  );
};

export default Controlled;
