import "./EV.css"
export const EventPropagation = () =>{
    const handleGrandParent = () => {
        console.log("GrandParent clicked");

    };
    const handleParentClick = () => {
        console.log("Parent clicked");

    };
    const handleChildClick = (event) => {
        console.log(event);
        event.stopPropagation();
        console.log("Child clicked");

    };
return(
  <section className="main-div">
        <div className="g-div" onClickCapture={handleGrandParent}>
        <div className="p-div" onClickCapture={handleParentClick}>
         <button className="c-div" onClickCapture={handleChildClick}>
            Child Div
         </button>
        </div>
        </div>
       
  </section>
)
}




















//! Event Propagation

// · In React.js, event propagation refers to the process by which events propagate or
// "bubble" up from the target element through its parent elements in the DOM hierarchy.
// React follows the same event propagation model as regular JavaScript DOM events.

// · When an event occurs on an element in a React component, such as a button click, the
// event is first captured at the target element and then bubbles up through the parent
// elements, triggering any event handlers that have been defined along the way. This
// allows you to handle events at different levels of the component hierarchy.

// · React provides a way to stop event propagation using the stopPropagati
// which can be called on the event object within an event handler. This me
// the event from bubbling up further in the DOM, ensuring that only the e
// the target element is triggered.

// te Wind