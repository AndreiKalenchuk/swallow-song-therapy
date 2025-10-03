import './AdultServicesPage.css'

function AdultServicesPage() {
  return (
    <div className="service-page">
      <h2>Adult Speech Pathology Services</h2>
      <div className="service-image">
        <div className="placeholder-image adult-image">
          Adult Pathology Services Image
        </div>
      </div>
      <div className="service-description">
        <h3>Comprehensive Adult Diagnostic Services</h3>
        <p>
          Our adult pathology services encompass a full range of diagnostic capabilities 
          for patients 18 years and older. We specialize in surgical pathology, 
          cytopathology, and molecular diagnostics to provide comprehensive care 
          for adult patients.
        </p>
        <h4>Services Include:</h4>
        <ul>
          <li><strong>Surgical Pathology:</strong> Comprehensive examination of tissue specimens from biopsies, resections, and surgical procedures</li>
          <li><strong>Cytopathology:</strong> Microscopic examination of cellular samples including Pap smears, fine needle aspirations, and body fluid analysis</li>
          <li><strong>Dermatopathology:</strong> Specialized diagnosis of skin conditions and dermatological disorders</li>
          <li><strong>Gastrointestinal Pathology:</strong> Expert evaluation of GI tract specimens and biopsies</li>
          <li><strong>Genitourinary Pathology:</strong> Specialized diagnosis of urological and gynecological specimens</li>
          <li><strong>Molecular Diagnostics:</strong> Advanced genetic testing for targeted therapy selection and prognostic assessment</li>
          <li><strong>Immunohistochemistry:</strong> Specialized staining techniques for accurate tumor classification and biomarker analysis</li>
        </ul>
        <p>
          Our adult services are designed to support oncology, internal medicine, 
          surgery, dermatology, and other medical specialties with rapid turnaround 
          times and detailed diagnostic reports.
        </p>
      </div>
    </div>
  )
}

export default AdultServicesPage
