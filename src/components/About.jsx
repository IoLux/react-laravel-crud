import React from "react";
// import "../css/About.css";

const HomePage = () => {
  return (
    <div className="container col-xxl-8 px-4 py-5" id="about">
      <div className="row flex-lg-row align-items-center g-5 py-5">
        <div className="col-10 col-sm-8 col-lg-6">
          <iframe
            title="about"
            src="https://www.youtube.com/embed/4Tr0otuiQuU"
            style={{ width: 500, height: 300 }}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
        <div className="col-lg-6">
          <h1 className="display-5 fw-bold lh-1 mb-3 text-center">About</h1>
          <p className="lead" style={{ fontSize: "15px" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            luctus nunc laoreet viverra lacinia. In tincidunt aliquam lacus a
            laoreet. Aliquam finibus, nunc ac suscipit pretium, ex massa maximus
            nisl, ut rutrum ante nunc non elit. Morbi bibendum quam vel ipsum
            molestie, ut euismod lacus auctor. Nulla non augue augue. Quisque
            eget ante in augue ultrices elementum. Proin rhoncus vulputate
            euismod. Pellentesque tempor mi arcu, at sodales dolor dictum eu.
            Praesent dolor sem, ornare sed purus vitae, interdum venenatis
            lacus. Nam in erat at felis consectetur dictum non ut leo. Sed
            iaculis arcu a diam eleifend suscipit.
          </p>
          <p className="lead" style={{ fontSize: "15px" }}>
            Vivamus pharetra, elit eget venenatis ullamcorper, eros tortor
            ullamcorper magna, in gravida nulla tellus ullamcorper massa. In a
            ligula ut dui imperdiet vestibulum. Fusce vehicula enim quis mauris
            interdum, non tristique risus venenatis. Suspendisse nisl lacus,
            congue id malesuada vitae, hendrerit a nunc. Curabitur ut
            ullamcorper turpis. Nunc ultrices sem turpis, fermentum vehicula
            risus tincidunt vitae. Proin fringilla elit a odio interdum, eget
            pharetra mi viverra. In vestibulum sit amet nisi eu condimentum.
            Aliquam erat volutpat. Duis non sem est. Sed quis mi eu ipsum
            vehicula hendrerit eget non erat. Mauris vehicula dolor non eros
            sagittis aliquam. Vestibulum volutpat elementum tincidunt. Etiam
            viverra fringilla nunc et lacinia.
          </p>
          <p className="lead" style={{ fontSize: "15px" }}>
            Curabitur congue condimentum tellus, non mattis neque finibus
            scelerisque. Nulla ac augue lectus. Nunc fermentum fringilla lacus,
            ac aliquet mi lobortis ut. Cras ac metus neque. Morbi dignissim
            metus nunc, non gravida elit sagittis sed. Integer non elementum
            diam, et accumsan lorem. Curabitur ante purus, tincidunt et sagittis
            ut, viverra ac urna. Quisque lacinia luctus auctor. Donec elementum
            vel nunc vitae accumsan. In dictum, enim et mattis dictum, velit
            ipsum aliquam ligula, vel tempus augue odio quis erat. Vestibulum
            lacus mauris, scelerisque molestie porttitor et, feugiat sit amet
            erat.
          </p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <button
              type="button"
              className="btn btn-primary btn-lg px-4 me-md-2"
            >
              Primary
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary btn-lg px-4"
            >
              Default
            </button>
          </div>
        </div>
      </div>
    </div>
    // <div className="b-example-divider"></div>
  );
};

export default HomePage;
