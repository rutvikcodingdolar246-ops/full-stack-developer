import { Form } from "react-router-dom";

// eslint-disable-next-line react-refresh/only-export-components
export const contactData = async({request}) => {
    try{
        const res = await request.formData();
        const data = Object.fromEntries(res)
        console.log(data);
        return null;
    }catch(error){
       console.log(error.message);
       
    }
    
}


export const Contact = () => {
  return (
    <>
      <section className="container">
        <h2 className="section-common--heading">Contact Us</h2>
        <p className="section-common--subheading">
          Get in touch with us. We are always here to help you.
        </p>

        <div className="section-contact">
          <div className="grid grid-two--cols">
            <div className="contact-content">

              <Form method="POST" action="/contact">
                <div className="grid grid-two--cols mb-3">

                  <div>
                    <label htmlFor="username">Full Name</label>
                    <input
                      type="text"
                      name="username"
                      id="username"
                      placeholder="Enter full name"
                      required
                      autoComplete="off"
                    />
                  </div>

                  <div>
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="abc@thapa.com"
                      required
                      autoComplete="off"
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="message">Message</label>
                  <textarea
                    name="message"
                    id="message"
                    cols="30"
                    rows="8"
                    placeholder="We are always here to help you."
                    required
                  ></textarea>
                </div>

                <div className="mt-3">
                  <button type="submit" className="btn contact-btn">
                    Send Message
                  </button>
                </div>
              </Form>

            </div>

            <div className="contact-image">
              <figure>
                <img
                  src="https://www.nicepng.com/png/detail/70-700924_contact-us-png-contact.png"
                  alt="Contact"
                  className="contact_image"
                />
              </figure>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
