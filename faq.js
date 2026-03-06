/**
 * faq.js – Collapsible FAQ section
 * Toggles answers when questions are clicked
 */

(function() {
  'use strict';

  document.addEventListener('DOMContentLoaded', function() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    if (faqQuestions.length === 0) return;
    
    faqQuestions.forEach(question => {
      question.addEventListener('click', function() {
        // Toggle active class on the clicked question
        this.classList.toggle('active');
        
        // Get the corresponding answer (next sibling)
        const answer = this.nextElementSibling;
        
        // Toggle active class on the answer
        if (answer.classList.contains('active')) {
          answer.classList.remove('active');
        } else {
          answer.classList.add('active');
        }
        
        // Optional: Close other open FAQs (accordion behavior)
        // Uncomment below if you want only one FAQ open at a time
        
        // faqQuestions.forEach(otherQuestion => {
        //   if (otherQuestion !== this && otherQuestion.classList.contains('active')) {
        //     otherQuestion.classList.remove('active');
        //     otherQuestion.nextElementSibling.classList.remove('active');
        //   }
        // });
      });
    });
    
    // Optional: Open first FAQ by default
    // const firstQuestion = document.querySelector('.faq-question');
    // if (firstQuestion) {
    //   firstQuestion.classList.add('active');
    //   firstQuestion.nextElementSibling.classList.add('active');
    // }
  });
})();