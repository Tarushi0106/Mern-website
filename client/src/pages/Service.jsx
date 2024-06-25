import { useAuth } from "../store/auth";  // Make sure to import useAuth

export const Service = () => {
  const { services = [] } = useAuth(); // Provide a default empty array

  return (
    <section className="section-services">
      <div className="container">
        <h1 className="heading">Services</h1>
      </div>

      <div className="grid grid-three-cols">
        {services.length > 0 ? (
          services.map((service, index) => (
            <div className="card-container" key={index}>
              <div className="card">
                <img src="/images/design.png" alt="designer" width="200" />
              </div>

              <div className="card-details grid grid-two-cols">
                <div className="grid-lane">
                  <p>{service.price}</p>
                  <p>{service.provider}</p>
                </div>

                <h2>{service.service}</h2>
                <p>{service.description}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No services available</p> // Fallback content if no services
        )}
      </div>
    </section>
  );
};
