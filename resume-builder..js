/**
 * resume-builder.js – Modal validation, preview generation, download PDF, clear form
 */

(function() {
  const generateBtn = document.getElementById('generate-resume');
  const downloadBtn = document.getElementById('download-pdf');
  const clearBtn = document.getElementById('clear-form');
  const previewDiv = document.getElementById('preview-content');
  
  // ---------- GENERATE PREVIEW ----------
  function generateResumePreview() {
    const fullName = document.getElementById('full-name')?.value.trim();
    const email = document.getElementById('email')?.value.trim();
    const phone = document.getElementById('phone')?.value.trim() || 'Not provided';
    const year = document.getElementById('current-year')?.value || 'N/A';
    const education = document.getElementById('education')?.value.trim() || 'N/A';
    const skills = document.getElementById('skills')?.value.trim() || 'N/A';
    const projects = document.getElementById('projects')?.value.trim() || 'N/A';
    
    if (!fullName) {
      alert('Full Name is required.');
      return;
    }
    if (!email) {
      alert('Email is required.');
      return;
    }
    if (!email.includes('@') || !email.includes('.')) {
      alert('Please enter a valid email address.');
      return;
    }
    
    const yearNames = {
      '1': 'First Year',
      '2': 'Second Year', 
      '3': 'Third Year',
      '4': 'Fourth Year'
    };
    
    const previewHTML = `
      <div style="background: white; padding: 24px; border-radius: 16px; font-family: 'Roboto', sans-serif; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
        <h2 style="color: #1e293b; border-bottom: 3px solid #3b82f6; padding-bottom: 12px; margin-bottom: 16px; font-family: 'Poppins', sans-serif;">${fullName}</h2>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
          <p style="margin: 0;"><i class="fas fa-envelope" style="color: #3b82f6;"></i> ${email}</p>
          <p style="margin: 0;"><i class="fas fa-phone" style="color: #3b82f6;"></i> ${phone}</p>
          <p style="margin: 0;"><i class="fas fa-graduation-cap" style="color: #3b82f6;"></i> ${yearNames[year] || year}</p>
        </div>
        <div style="margin-bottom: 16px;">
          <h3 style="color: #1e293b; font-size: 1.2rem; margin-bottom: 8px; font-family: 'Poppins', sans-serif;">🎓 Education</h3>
          <p style="margin: 0; padding-left: 8px; border-left: 3px solid #3b82f6;">${education}</p>
        </div>
        <div style="margin-bottom: 16px;">
          <h3 style="color: #1e293b; font-size: 1.2rem; margin-bottom: 8px; font-family: 'Poppins', sans-serif;">⚙️ Skills</h3>
          <p style="margin: 0; padding-left: 8px; border-left: 3px solid #3b82f6;">${skills}</p>
        </div>
        <div style="margin-bottom: 16px;">
          <h3 style="color: #1e293b; font-size: 1.2rem; margin-bottom: 8px; font-family: 'Poppins', sans-serif;">🚀 Projects</h3>
          <p style="margin: 0; padding-left: 8px; border-left: 3px solid #3b82f6; white-space: pre-line;">${projects}</p>
        </div>
        <p style="color: #64748b; font-style: italic; margin-top: 24px; padding-top: 16px; border-top: 1px solid #e2e8f0;">
          <i class="fas fa-robot"></i> Generated via AI Roadmap Resume Builder
        </p>
      </div>
    `;
    
    previewDiv.innerHTML = previewHTML;
  }
  
  if (generateBtn) {
    generateBtn.addEventListener('click', generateResumePreview);
  }
  
  // ---------- DOWNLOAD PDF ----------
  function downloadResumePDF() {
    const previewContent = previewDiv?.innerHTML;
    if (!previewContent || previewContent.trim() === '' || previewContent.includes('Your resume preview will appear here')) {
      alert('Please generate the resume preview first.');
      return;
    }
    
    const printWindow = window.open('', '_blank', 'width=800,height=600');
    printWindow.document.write(`
      <html>
        <head>
          <title>AI Roadmap Resume</title>
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet">
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
          <style>
            body { font-family: 'Roboto', sans-serif; padding: 40px; background: #f8fafc; }
            .preview-card { max-width: 800px; margin: 0 auto; }
          </style>
        </head>
        <body>
          <div class="preview-card">${previewContent}</div>
          <script>
            window.onload = function() { window.print(); }
          <\/script>
        </body>
      </html>
    `);
    printWindow.document.close();
  }
  
  if (downloadBtn) {
    downloadBtn.addEventListener('click', downloadResumePDF);
  }
  
  // ---------- CLEAR FORM ----------
  function clearResumeForm() {
    const form = document.getElementById('resume-form');
    if (form) form.reset();
    if (previewDiv) {
      previewDiv.innerHTML = '<p style="color: gray; text-align: center; padding: 40px;">Your resume preview will appear here after you click "Generate Preview".</p>';
    }
  }
  
  if (clearBtn) {
    clearBtn.addEventListener('click', clearResumeForm);
  }
  
  // Initialize preview placeholder
  if (previewDiv) {
    previewDiv.innerHTML = '<p style="color: gray; text-align: center; padding: 40px;">Your resume preview will appear here after you click "Generate Preview".</p>';
  }
})();