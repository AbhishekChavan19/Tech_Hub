/**
 * resume-builder-simple.js – Simple Resume Builder with PDF download
 * Uses html2pdf.js for PDF generation
 */

(function() {
  'use strict';

  // Get DOM elements
  const generateBtn = document.getElementById('generate-resume-btn');
  const downloadBtn = document.getElementById('download-pdf-btn');
  const clearBtn = document.getElementById('clear-form-btn');
  const previewDiv = document.getElementById('resume-preview');
  
  // Form inputs
  const fullname = document.getElementById('fullname');
  const gmail = document.getElementById('gmail');
  const contact = document.getElementById('contact');
  const education = document.getElementById('education');
  const skills = document.getElementById('skills');
  const projects = document.getElementById('projects');
  const achievements = document.getElementById('achievements');
  const github = document.getElementById('github');
  const linkedin = document.getElementById('linkedin');

  // Generate Resume Preview
  function generateResume() {
    // Validate required fields
    if (!fullname.value.trim()) {
      alert('Please enter your full name');
      fullname.focus();
      return;
    }
    
    if (!gmail.value.trim()) {
      alert('Please enter your Gmail address');
      gmail.focus();
      return;
    }
    
    if (!isValidEmail(gmail.value)) {
      alert('Please enter a valid Gmail address');
      gmail.focus();
      return;
    }

    // Create preview HTML
    const previewHTML = createPreviewHTML();
    previewDiv.innerHTML = previewHTML;
  }

  // Create Preview HTML
  function createPreviewHTML() {
    const name = fullname.value.trim() || 'Not Provided';
    const email = gmail.value.trim() || 'Not Provided';
    const phone = contact.value.trim() || 'Not Provided';
    const edu = education.value.trim() || 'Not Provided';
    const techSkills = skills.value.trim() || 'Not Provided';
    const proj = projects.value.trim() || 'Not Provided';
    const achieve = achievements.value.trim() || 'Not Provided';
    const gitLink = github.value.trim() || '#';
    const linkedinLink = linkedin.value.trim() || '#';

    return `
      <div class="resume-preview-content" id="pdf-resume">
        <div class="preview-name">${name}</div>
        
        <div class="preview-contact">
          <span><i class="fas fa-envelope"></i> ${email}</span>
          <span><i class="fas fa-phone"></i> ${phone}</span>
        </div>
        
        <div class="preview-section">
          <h4><i class="fas fa-graduation-cap"></i> Education</h4>
          <p>${edu.replace(/\n/g, '<br>')}</p>
        </div>
        
        <div class="preview-section">
          <h4><i class="fas fa-code"></i> Technical Skills</h4>
          <p>${techSkills.replace(/\n/g, '<br>')}</p>
        </div>
        
        <div class="preview-section">
          <h4><i class="fas fa-project-diagram"></i> Projects</h4>
          <p>${proj.replace(/\n/g, '<br>')}</p>
        </div>
        
        <div class="preview-section">
          <h4><i class="fas fa-trophy"></i> Achievements</h4>
          <p>${achieve.replace(/\n/g, '<br>')}</p>
        </div>
        
        <div class="preview-links">
          ${gitLink !== '#' ? `<a href="${gitLink}" target="_blank"><i class="fab fa-github"></i> GitHub Profile</a>` : ''}
          ${linkedinLink !== '#' ? `<a href="${linkedinLink}" target="_blank"><i class="fab fa-linkedin"></i> LinkedIn Profile</a>` : ''}
        </div>
      </div>
    `;
  }

  // Email validation
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Download PDF
  function downloadPDF() {
    const previewContent = document.getElementById('pdf-resume');
    
    if (!previewContent) {
      alert('Please generate the resume preview first');
      return;
    }

    const name = fullname.value.trim() || 'resume';
    const filename = `resume_${name.replace(/\s+/g, '_').toLowerCase()}.pdf`;

    const options = {
      margin: [0.5, 0.5, 0.5, 0.5],
      filename: filename,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2, letterRendering: true },
      jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(options).from(previewContent).save();
  }

  // Clear form and preview
  function clearForm() {
    // Clear all inputs
    fullname.value = '';
    gmail.value = '';
    contact.value = '';
    education.value = '';
    skills.value = '';
    projects.value = '';
    achievements.value = '';
    github.value = '';
    linkedin.value = '';

    // Reset preview to placeholder
    previewDiv.innerHTML = `
      <div class="preview-placeholder">
        <p>Fill in the form and click "Generate Resume" to see your preview here.</p>
      </div>
    `;
  }

  // Event listeners
  if (generateBtn) {
    generateBtn.addEventListener('click', generateResume);
  }

  if (downloadBtn) {
    downloadBtn.addEventListener('click', downloadPDF);
  }

  if (clearBtn) {
    clearBtn.addEventListener('click', clearForm);
  }

  // Optional: Generate on Enter key in form fields
  const formInputs = [fullname, gmail, contact, education, skills, projects, achievements, github, linkedin];
  formInputs.forEach(input => {
    if (input) {
      input.addEventListener('keypress', function(e) {
        if (e.key === 'Enter' && !e.shiftKey) {
          e.preventDefault();
          generateResume();
        }
      });
    }
  });
})();