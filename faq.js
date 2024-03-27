const searchBox = document.getElementById('searchBox');
const faqList = document.getElementById('faqList');

searchBox.addEventListener('input', function() {
  const query = this.value.toLowerCase();
  const faqs = faqList.querySelectorAll('.faq');
  faqs.forEach(faq => {
    const question = faq.querySelector('.question').innerText.toLowerCase();
    const answer = faq.querySelector('.answer').innerText.toLowerCase();
    if (question.includes(query) || answer.includes(query)) {
      faq.style.display = 'block';
    } else {
      faq.style.display = 'none';
    }
  });
});

const questions = document.querySelectorAll('.question');
questions.forEach(question => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling;
    answer.style.display = answer.style.display === 'none' ? 'block' : 'none';
  });
});