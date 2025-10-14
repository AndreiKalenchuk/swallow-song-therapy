import './HomePage.css'
import { NavLink } from 'react-router-dom'

function HomePage() {
  return (
    <div className="home-page">
      <div className="hero-section">
        <div className="hero-text">
          <div>
            <h4>About Me</h4>
            <p>
              Hi, I’m Anastasiya, a passionate speech-language pathologist dedicated to helping people communicate, connect, and thrive. My journey began at Deaconess Hospital and local rehabilitation centers, where I saw firsthand that many patients weren’t receiving the level of care they truly needed. Hospitals often rely on outdated approaches, and the system itself doesn’t always prioritize individualized patient outcomes. Watching patients struggle motivated me to make a change.
              I founded this clinic to bring modern, evidence-based speech therapy to Spokane and the surrounding communities — therapy that focuses on results, independence, and quality of life. My mission is simple: to help every patient, from infants to seniors, regain communication, confidence, and control over their daily life.
              I believe everyone deserves access to care that is personalized, research-driven, and effective. Whether a child is developing foundational language skills or an adult is recovering from a stroke or neurological condition, my goal is to empower patients with strategies and support that truly make a difference.
            </p>
            <p>
              We specialize in swallowing disorders, speech therapy, and communication
              challenges, helping our patients achieve their highest potential for
              improved quality of life. Our practice is committed to delivering
              personalized treatment plans with quick turnaround times and exceptional
              patient care.
            </p>
            <h4>My Approach</h4>
            <p> Having worked in hospitals and rehabilitation centers, I’ve seen the limitations of traditional speech therapy firsthand. Conservative, outdated approaches often dominate, slowing recovery and leaving patients frustrated. Here, we do things differently.
              I use only research-proven, evidence-based strategies designed to maximize progress and achieve the fastest functional outcomes. Each therapy plan is individualized — guided by assessment, informed by science, and shaped by the patient’s personal goals and daily life.
              We also value collaboration. Families, caregivers, and other professionals play a key role in every patient’s journey. By working together, we create a supportive environment that accelerates progress and encourages lasting results.
            </p>
            <h4>Experience You Can Trust</h4>
            <p>
              With years of hands-on experience and a commitment to evidence-based care, I help patients of all ages achieve meaningful improvements in speech, language, and swallowing. Every plan is personalized to ensure fast, effective, and lasting results.
            </p>
            <h4>Take the Next Step Today</h4>
            <p>
              If you or a loved one could benefit from speech therapy, schedule a free 15-minute consultation to explore a personalized plan and begin your journey toward improved communication and confidence.
            </p>
          </div>
        </div>

        {/* Services Overview Section */}
        <section className="services-overview">
          <h3>Our speech pathology services</h3>
          <div className="service-cards">
            <div className="service-card">
              <div className="service-card-image adult-service-image-placeholder">
                Speech pathology for Adult
              </div>
              <h4>Adult Services</h4>
              Our adult therapy addresses challenges such as:
              <ul>
                <li>Aphasia and apraxia following stroke or brain injury</li>
                <li>Cognitive-communication deficits (memory, attention, planning)</li>
                <li>Fluency and voice disorders</li>
                <li>Swallowing disorders (dysphagia)</li>
                <li>Dysphagia (swallowing disorders)</li>
                <li>Communication difficulties related to Parkinson’s, ALS, and other neurological conditions</li>
              </ul>
              <p>
                We focus on functional recovery, helping adults regain independence, confidence, and everyday communication skills. Therapy targets real-world goals such as returning to work, improving social interaction, and managing daily activities.
              </p>
              <NavLink to="/adult-speech-pathology-services" className="service-link">Learn More</NavLink>
            </div>
            <div className="service-card">
              <div className="service-card-image pediatric-service-image-placeholder">
                Pediatric speech pathology services
              </div>
              <h4>Pediatric Services</h4>
              <ul>
                <li>Speech sound and articulation disorders</li>
                <li>Expressive and receptive language delays</li>
                <li>Fluency (stuttering) and voice concerns</li>
                <li>Social/pragmatic language difficulties</li>
                <li>Oral feeding and swallowing challenges</li>
                <li>Developmental or neurodivergent communication needs</li>
                <li>Auditory processing and literacy-related difficulties</li>
              </ul>
              <p>
                Therapy is fun, functional, and individualized, incorporating play-based learning and real-life practice. Parents and caregivers are active partners in therapy, receiving guidance and support to reinforce skills at home.
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
