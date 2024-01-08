function ContactUs() {
  const ContactUsStyle = {
    minHeight: "50vh",
  };

  return (
    <div className="ContactUs">
      <section
        className="position-relative py-4 py-xl-5 parallax mb-0"
        style={ContactUsStyle}
      >
        <div className="container position-relative">
          <div className="row">
            <div className="col">
              <iframe
                allowfullscreen
                frameborder="0"
                src="https://cdn.bootstrapstudio.io/placeholders/map.html"
                width="100%"
                height="100%"
              ></iframe>
            </div>
            <div className="col-md-6 col-xl-4 bg-dark bg-opacity-75 rounded-2">
              <div>
                <form className="p-3 p-xl-4 text-white" method="post">
                  <h4>Contact us</h4>
                  <p className="text-white ">
                    Eros ligula lobortis elementum amet commodo ac nibh ornare,
                    eu lobortis.
                  </p>
                  <div className="mb-3">
                    <label className="form-label" for="name">
                      Name
                    </label>
                    <input
                      id="name"
                      className="form-control"
                      type="text"
                      name="name"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label" for="email">
                      Email
                    </label>
                    <input
                      id="email"
                      className="form-control"
                      type="email"
                      name="email"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label" for="message">
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="form-control"
                      name="message"
                      rows="6"
                    ></textarea>
                  </div>
                  <div className="mb-3">
                    <button className="btn btn-primary" type="submit">
                      Send{" "}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactUs;
