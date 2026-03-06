/**
 * certificates.js – Inject exactly 3 free + 3 paid certificates per subject card
 * Free: Updated with specific course links per subject
 * Paid: NPTEL, Coursera, Udemy (unchanged)
 */

window.showCertificates = function(subjectName) {
  // Mapping certificate placeholder IDs
  const idMap = {
    // First Year
    'C Programming': 'cert-CProgramming',
    'Data Science': 'cert-DataScience',
    'OOP using C++': 'cert-OOPCpp',
    'Software Engineering': 'cert-SoftwareEngineering',
    
    // Second Year
    'Machine Learning': 'cert-MachineLearning',
    'Data Structures & Algorithms': 'cert-DSA',
    'Java Programming': 'cert-Java',
    'TOC': 'cert-TOC',
    'DBMS': 'cert-DBMS',
    'Advanced DSA': 'cert-AdvancedDSA',
    'Full Stack Development-1': 'cert-FullStack1',
    
    // Third Year
    'Artificial Intelligence': 'cert-AI',
    'Computer Networks': 'cert-CN',
    'Embedded AI': 'cert-EmbeddedAI',
    'DAA': 'cert-DAA',
    'Computer Vision': 'cert-CV',
    'Deep Learning': 'cert-DL',
    'Full Stack Development-2': 'cert-FS2'
  };
  
  const containerId = idMap[subjectName];
  if (!containerId) {
    console.warn(`No container ID found for subject: ${subjectName}`);
    return;
  }
  
  const container = document.getElementById(containerId);
  if (!container) {
    console.warn(`Container element not found: ${containerId}`);
    return;
  }
  
  // Clear any existing content
  container.innerHTML = '';
  
  // ========== FREE CERTIFICATES (UPDATED WITH YOUR LINKS) ==========
  const freeCerts = [];
  
  // First Year Subjects
  if (subjectName === 'C Programming') {
    freeCerts.push(
      { platform: 'Great Learning', url: 'https://www.mygreatlearning.com/academy/learn-for-free/courses/c-for-beginners1', title: 'C for Beginners' },
      { platform: 'Simplilearn', url: 'https://www.simplilearn.com/free-c-course-skillup?tag=Intermediate%20C', title: 'Intermediate C Programming' },
      { platform: 'Codegnan', url: 'https://academy.codegnan.com/learn/C-Programming', title: 'C Programming Fundamentals' }
    );
  }
  else if (subjectName === 'Data Science') {
    freeCerts.push(
      { platform: 'Scaler', url: 'https://www.scaler.com/topics/course/python-sql-data-science/', title: 'Python SQL for Data Science' },
      { platform: 'Great Learning', url: 'https://www.mygreatlearning.com/academy/learn-for-free/courses/python-for-data-science3', title: 'Python for Data Science' },
      { platform: 'Simplilearn', url: 'https://www.simplilearn.com/statistics-for-data-science-free-course-skillup?tag=Data%20science', title: 'Statistics for Data Science' }
    );
  }
  else if (subjectName === 'OOP using C++') {
    freeCerts.push(
      { platform: 'Great Learning', url: 'https://www.mygreatlearning.com/academy/learn-for-free/courses/oops-concepts-in-c', title: 'OOPS Concepts in C++' },
      { platform: 'Simplilearn', url: 'https://www.simplilearn.com/free-course-to-learn-cpp-basics-skillup?tag=OOPS', title: 'C++ Basics with OOP' },
      { platform: 'Scaler', url: 'https://www.scaler.com/topics/course/cpp-data-structures/', title: 'C++ Data Structures' }
    );
  }
  else if (subjectName === 'Software Engineering') {
    freeCerts.push(
      { platform: 'Scaler', url: 'https://www.scaler.com/topics/software-engineering/', title: 'Software Engineering Fundamentals' },
      { platform: 'Great Learning', url: 'https://www.mygreatlearning.com/academy/learn-for-free/courses/software-engineering', title: 'Software Engineering Basics' },
      { platform: 'Simplilearn', url: 'https://www.simplilearn.com/free-software-engineering-course-skillup', title: 'Software Engineering Essentials' }
    );
  }
  
  // Second Year Subjects
  else if (subjectName === 'Machine Learning') {
    freeCerts.push(
      { platform: 'Scaler', url: 'https://www.scaler.com/topics/machine-learning/', title: 'Machine Learning Fundamentals' },
      { platform: 'Great Learning', url: 'https://www.mygreatlearning.com/academy/learn-for-free/courses/basics-of-machine-learning-1', title: 'Basics of Machine Learning' },
      { platform: 'Simplilearn', url: 'https://www.simplilearn.com/learn-machine-learning-basics-skillup?tag=Machine%20learning', title: 'Machine Learning Basics' }
    );
  }
  else if (subjectName === 'Data Structures & Algorithms') {
    freeCerts.push(
      { platform: 'Scaler', url: 'https://www.scaler.com/topics/course/cpp-data-structures/', title: 'C++ Data Structures' },
      { platform: 'Great Learning', url: 'https://www.mygreatlearning.com/academy/learn-for-free/courses/data-structures-and-algorithms-in-java', title: 'DSA in Java' },
      { platform: 'Simplilearn', url: 'https://www.simplilearn.com/skillup-search?sortBy=Relevance&tag=Data+structures', title: 'Data Structures Masterclass' }
    );
  }
  else if (subjectName === 'Java Programming') {
    freeCerts.push(
      { platform: 'Scaler', url: 'https://www.scaler.com/topics/courses/', title: 'Java Programming Course' },
      { platform: 'Great Learning', url: 'https://www.mygreatlearning.com/academy/learn-for-free/courses/java-programming', title: 'Java Programming Basics' },
      { platform: 'Simplilearn', url: 'https://www.simplilearn.com/free-java-beginners-course-skillup?tag=Java', title: 'Java for Beginners' }
    );
  }
  else if (subjectName === 'TOC') {
    freeCerts.push(
      { platform: 'Scaler', url: 'https://www.scaler.com/topics/theory-of-computation/', title: 'Theory of Computation' },
      { platform: 'Great Learning', url: 'https://www.mygreatlearning.com/academy/learn-for-free/courses/automata-theory', title: 'Automata Theory' },
      { platform: 'Simplilearn', url: 'https://www.simplilearn.com/skillup-search?tag=Theory+of+computation', title: 'TOC Fundamentals' }
    );
  }
  else if (subjectName === 'DBMS') {
    freeCerts.push(
      { platform: 'Scaler', url: 'https://www.scaler.com/topics/dbms/', title: 'Database Management Systems' },
      { platform: 'Great Learning', url: 'https://www.mygreatlearning.com/academy/learn-for-free/courses/my-sql-basics', title: 'MySQL Basics' },
      { platform: 'Simplilearn', url: 'https://www.simplilearn.com/free-mongodb-course-skillup?tag=SQL,%20Mongo%20db', title: 'MongoDB & SQL' }
    );
  }
  else if (subjectName === 'Full Stack Development-1') {
    freeCerts.push(
      { platform: 'Simplilearn', url: 'https://www.simplilearn.com/front-end-developer-free-course-skillup?term=HTML', title: 'Front-End Development' },
      { platform: 'Great Learning', url: 'https://www.mygreatlearning.com/academy/search?keyword=Full%20Stack%20Development', title: 'Full Stack Fundamentals' },
      { platform: 'Scaler', url: 'https://www.scaler.com/topics/full-stack-development/', title: 'Full Stack Developer Course' }
    );
  }
  else if (subjectName === 'Advanced DSA') {
    freeCerts.push(
      { platform: 'Scaler', url: 'https://www.scaler.com/topics/advanced-data-structures/', title: 'Advanced Data Structures' },
      { platform: 'Great Learning', url: 'https://www.mygreatlearning.com/academy/learn-for-free/courses/advanced-data-structures', title: 'Advanced DSA' },
      { platform: 'Simplilearn', url: 'https://www.simplilearn.com/skillup-search?tag=Advanced+DSA', title: 'Advanced Algorithms' }
    );
  }
  
  // Third Year Subjects
  else if (subjectName === 'Artificial Intelligence') {
    freeCerts.push(
      { platform: 'Life Global', url: 'https://www.life-global.org/course/391-ai-for-beginners', title: 'AI for Beginners' },
      { platform: 'Simplilearn', url: 'https://www.simplilearn.com/learn-ai-basics-skillup?tag=Artificial%20intelligence', title: 'AI Basics' },
      { platform: 'Great Learning', url: 'https://www.mygreatlearning.com/academy/learn-for-free/courses/artificial-intelligence-projects', title: 'AI Projects' }
    );
  }
  else if (subjectName === 'Computer Networks') {
    freeCerts.push(
      { platform: 'Great Learning', url: 'https://www.mygreatlearning.com/academy/learn-for-free/courses/basics-of-computer-networking', title: 'Basics of Computer Networking' },
      { platform: 'Simplilearn', url: 'https://www.simplilearn.com/free-computer-networking-course-skillup', title: 'Computer Networking Course' },
      { platform: 'Alison', url: 'https://alison.com/tag/computer-networking', title: 'Computer Networking - Alison' }
    );
  }
  else if (subjectName === 'Embedded AI') {
    freeCerts.push(
      { platform: 'Coursera', url: 'https://www.coursera.org/learn/computer-vision-with-embedded-machine-learning', title: 'Computer Vision + Embedded ML' },
      { platform: 'Swayam', url: 'https://swayam.gov.in', title: 'SWAYAM - AI/ML Courses' },
      { platform: 'freeCodeCamp', url: 'https://freecodecamp.org', title: 'freeCodeCamp - AI Related' }
    );
  }
  else if (subjectName === 'DAA') {
    freeCerts.push(
      { platform: 'UpGrad', url: 'https://www.upgrad.com/free-courses/it-technology/data-structures-and-algorithm-course-free', title: 'DSA Free Course' },
      { platform: 'freeCodeCamp', url: 'https://freecodecamp.org', title: 'freeCodeCamp - Algorithms' },
      { platform: 'Alison', url: 'https://alison.com/tag/algorithms', title: 'Algorithms - Alison' }
    );
  }
  else if (subjectName === 'Computer Vision') {
    freeCerts.push(
      { platform: 'Great Learning', url: 'https://www.mygreatlearning.com/academy/learn-for-free/courses/computer-vision-essentials', title: 'Computer Vision Essentials' },
      { platform: 'Coursera', url: 'https://www.coursera.org/specializations/deep-learning-computer-vision', title: 'Deep Learning for CV' },
      { platform: 'freeCodeCamp', url: 'https://freecodecamp.org', title: 'freeCodeCamp - AI Stack' }
    );
  }
  else if (subjectName === 'Deep Learning') {
    freeCerts.push(
      { platform: 'Coursera', url: 'https://www.coursera.org/specializations/deep-learning', title: 'Deep Learning Specialization' },
      { platform: 'Great Learning', url: 'https://www.mygreatlearning.com/academy/learn-for-free/courses/deep-learning', title: 'Deep Learning Course' },
      { platform: 'Simplilearn', url: 'https://www.simplilearn.com/free-deep-learning-course-skillup', title: 'Deep Learning Basics' }
    );
  }
  else if (subjectName === 'Full Stack Development-2') {
    freeCerts.push(
      { platform: 'freeCodeCamp', url: 'https://freecodecamp.org', title: 'Backend/APIs Certification' },
      { platform: 'Great Learning', url: 'https://www.mygreatlearning.com/academy/learn-for-free/courses/become-full-stack-developer', title: 'Full Stack Developer' },
      { platform: 'Simplilearn', url: 'https://www.simplilearn.com/free-full-stack-developer-course-skillup?tag=Backend', title: 'Full Stack with Backend' }
    );
  }
  
  // Default fallback for any subject not specifically mapped
  else {
    freeCerts.push(
      { platform: 'Scaler', url: `https://www.scaler.com/topics/${subjectName.toLowerCase().replace(/\s+/g, '-')}/`, title: `${subjectName} Course` },
      { platform: 'Great Learning', url: `https://www.mygreatlearning.com/academy/learn-for-free/courses/${subjectName.toLowerCase().replace(/\s+/g, '-')}`, title: `${subjectName} Free Course` },
      { platform: 'Simplilearn', url: `https://www.simplilearn.com/skillup-search?tag=${encodeURIComponent(subjectName)}`, title: `${subjectName} SkillUp` }
    );
  }
  
  // ========== PAID CERTIFICATES (UNCHANGED) ==========
  const paidCerts = [
    {
      platform: 'NPTEL',
      url: `https://nptel.ac.in/courses/${getNPTELCode(subjectName)}`,
      title: `${subjectName} - NPTEL Elite Certification`
    },
    {
      platform: 'Coursera',
      url: `https://www.coursera.org/search?query=${encodeURIComponent(subjectName)}`,
      title: `${subjectName} Specialization`
    },
    {
      platform: 'Udemy',
      url: `https://www.udemy.com/courses/search/?q=${encodeURIComponent(subjectName)}`,
      title: `${subjectName} Masterclass`
    }
  ];
  
  // Helper function to get NPTEL course codes (unchanged)
  function getNPTELCode(subject) {
    const codes = {
      'C Programming': '106105171',
      'Data Science': '110107092',
      'OOP using C++': '106105165',
      'Software Engineering': '106105191',
      'Machine Learning': '106105152',
      'Data Structures & Algorithms': '106102064',
      'Java Programming': '106105191',
      'TOC': '106104148',
      'DBMS': '106105175',
      'Advanced DSA': '106106168',
      'Full Stack Development-1': '106106189',
      'Artificial Intelligence': '106105077',
      'Computer Networks': '106105183',
      'Embedded AI': '108108113',
      'DAA': '106106131',
      'Computer Vision': '106105216',
      'Deep Learning': '106105215',
      'Full Stack Development-2': '106106190'
    };
    return codes[subject] || '106105000';
  }
  
  // Add Free Certificates section
  const freeHeading = document.createElement('p');
  freeHeading.className = 'cert-heading free-heading';
  freeHeading.innerHTML = '<strong><i class="fas fa-graduation-cap"></i> Free Certificates:</strong>';
  container.appendChild(freeHeading);
  
  freeCerts.forEach(cert => {
    const certDiv = document.createElement('div');
    certDiv.className = 'cert-item free-cert';
    certDiv.innerHTML = `<i class="fas fa-certificate" style="color: #10b981;"></i> <a href="${cert.url}" target="_blank" rel="noopener">${cert.platform}: ${cert.title}</a>`;
    container.appendChild(certDiv);
  });
  
  // Add Paid Certificates section
  const paidHeading = document.createElement('p');
  paidHeading.className = 'cert-heading paid-heading';
  paidHeading.innerHTML = '<strong><i class="fas fa-award"></i> Paid Certificates:</strong>';
  container.appendChild(paidHeading);
  
  paidCerts.forEach(cert => {
    const certDiv = document.createElement('div');
    certDiv.className = 'cert-item paid-cert';
    certDiv.innerHTML = `<i class="fas fa-medal" style="color: #f59e0b;"></i> <a href="${cert.url}" target="_blank" rel="noopener">${cert.platform}: ${cert.title}</a>`;
    container.appendChild(certDiv);
  });
};