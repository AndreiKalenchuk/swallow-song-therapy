import { useState } from 'react'
import './ContactsPage.css'

function ContactsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Create mailto link with form data
    const subject = encodeURIComponent('Contact from Swallow Song Pathology Website')
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n\n` +
      `Message:\n${formData.message}`
    )
    
    // Open email client
    window.location.href = `mailto:swallowsongtherapy@gmail.com?subject=${subject}&body=${body}`
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: ''
    })
    
    alert('Your email client will open with the message. Please send the email to complete your inquiry.')
  }

  return (
    <div className="contacts-page">
      <h2>Contact Us</h2>
      
      <div className="contacts-content">
        <div className="contact-description">
          <h3>Get in Touch</h3>
          <p>
            We're here to help you with all your pathology service needs. Whether you're a healthcare 
            provider looking for diagnostic services or a patient seeking information about our 
            capabilities, our experienced team is ready to assist you.
          </p>
          <p>
            Please use the contact form below to reach out to us, or feel free to call us directly 
            at (509) 507-0153. We typically respond to all inquiries within 24 hours during 
            business days.
          </p>
          <div className="contact-info-section">
            <h4>Office Information</h4>
            <p><strong>Address:</strong> 707 West 7th Ave, Suite 240, Spokane, WA 99204</p>
            <p><strong>Phone:</strong> (509) 507-0153</p>
            <p><strong>Business Hours:</strong> Monday - Friday, 8:00 AM - 5:00 PM</p>
          </div>
        </div>

        <div className="contact-form-section">
          <h3>Send us a Message</h3>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                placeholder="Enter your full name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="Enter your email address"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows="6"
                placeholder="Please describe your inquiry or question..."
              />
            </div>

            <button type="submit" className="submit-button">
              Send Message
            </button>
          </form>
        </div>
      </div>

      <div className="map-section">
        <h3>Find Us</h3>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2689.1234567890123!2d-117.4234567890123!3d47.6543210987654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDfCsDM5JzE1LjYiTiAxMTfCsDI1JzI0LjQiVw!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Swallow Song Pathology Location"
          />
        </div>
        <p className="map-note">
          Located in the heart of Spokane, we're easily accessible from all major highways 
          and public transportation routes.
        </p>
      </div>
    </div>
  )
}

export default ContactsPage
