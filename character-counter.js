/**
 * character-counter.js – Live character counter for textareas
 * Updates in real-time as user types
 */

(function() {
  'use strict';

  // Education textarea counter
  const educationTextarea = document.getElementById('education');
  const educationCounter = document.getElementById('education-counter');
  
  if (educationTextarea && educationCounter) {
    educationTextarea.addEventListener('input', function() {
      const currentLength = this.value.length;
      const maxLength = this.getAttribute('maxlength') || 200;
      
      educationCounter.textContent = currentLength;
      
      // Visual feedback based on remaining characters
      const counterContainer = this.nextElementSibling;
      const remaining = maxLength - currentLength;
      
      counterContainer.classList.remove('warning', 'danger');
      
      if (remaining <= 20 && remaining > 5) {
        counterContainer.classList.add('warning');
      } else if (remaining <= 5) {
        counterContainer.classList.add('danger');
      }
    });
  }
  
  // Projects textarea counter
  const projectsTextarea = document.getElementById('projects');
  const projectsCounter = document.getElementById('projects-counter');
  
  if (projectsTextarea && projectsCounter) {
    projectsTextarea.addEventListener('input', function() {
      const currentLength = this.value.length;
      const maxLength = this.getAttribute('maxlength') || 300;
      
      projectsCounter.textContent = currentLength;
      
      // Visual feedback based on remaining characters
      const counterContainer = this.nextElementSibling;
      const remaining = maxLength - currentLength;
      
      counterContainer.classList.remove('warning', 'danger');
      
      if (remaining <= 30 && remaining > 10) {
        counterContainer.classList.add('warning');
      } else if (remaining <= 10) {
        counterContainer.classList.add('danger');
      }
    });
  }
  
  // Initialize counters with default values
  if (educationTextarea && educationCounter) {
    educationCounter.textContent = educationTextarea.value.length;
  }
  
  if (projectsTextarea && projectsCounter) {
    projectsCounter.textContent = projectsTextarea.value.length;
  }
})();