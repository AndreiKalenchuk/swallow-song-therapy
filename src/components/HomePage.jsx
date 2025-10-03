import './HomePage.css'
import { NavLink } from 'react-router-dom'

function HomePage() {
  return (
    <div className="home-page">
      <div className="hero-section">
        <div className="hero-text">
          <h2>About Swallow Song Therapy</h2>
          <p>
            Swallow Song Therapy has been serving the Spokane community with 
            comprehensive speech pathology services for over two decades. Our experienced 
            team of licensed speech-language pathologists is dedicated to providing 
            compassionate, evidence-based care for both adult and pediatric patients.
          </p>
          <p>
            We specialize in swallowing disorders, speech therapy, and communication 
            challenges, helping our patients achieve their highest potential for 
            improved quality of life. Our practice is committed to delivering 
            personalized treatment plans with quick turnaround times and exceptional 
            patient care.
          </p>
          <p>
            Located in the heart of Spokane, we maintain the highest standards of 
            quality assurance and participate in continuous education programs. Our 
            team consists of experienced pathologists, medical technologists, and 
            support staff who work together to ensure accurate diagnoses and 
            exceptional service.
          </p>
        </div>


      {/* Services Overview Section */}
      <section className="services-overview">
        <h3>Our Specialized Services</h3>
        <div className="service-cards">
          <div className="service-card">
            <div className="service-card-image adult-service-image-placeholder">
              Adult Services Image
            </div>
            <h4>Adult Services</h4>
            <p>
              We provide comprehensive diagnostic pathology services for adult patients,
              covering a wide range of conditions and specialties. Our expertise ensures
              precise and reliable results for effective treatment planning.
            </p>
            <NavLink to="/adult-speech-pathology-services" className="service-link">Learn More</NavLink>
          </div>
          <div className="service-card">
            <div className="service-card-image pediatric-service-image-placeholder">
              Pediatric Services Image
            </div>
            <h4>Pediatric Services</h4>
            <p>
              Specialized pathology services tailored for infants, children, and adolescents,
              focusing on unique pediatric diagnostic needs. We offer sensitive and accurate
              diagnoses for the youngest patients.
            </p>
            <NavLink to="/pediatric-speech-pathology-services" className="service-link">Learn More</NavLink>
          </div>
        </div>
      </section>
      </div>
    </div>
  )
}

export default HomePage
