const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('.main-nav');
toggle?.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle?.setAttribute('aria-expanded','false');}));
const langButtons=document.querySelectorAll('.language');
function setLanguage(lang){document.documentElement.lang=lang;document.querySelectorAll('[data-en]').forEach(el=>{const value=el.getAttribute(`data-${lang}`);if(value)el.textContent=value;});langButtons.forEach(b=>b.classList.toggle('active',b.dataset.lang===lang));localStorage.setItem('uno-lang',lang);}
langButtons.forEach(b=>b.addEventListener('click',()=>setLanguage(b.dataset.lang)));
const saved=localStorage.getItem('uno-lang');if(saved==='id')setLanguage('id');


// Contact enquiry: email UNO through FormSubmit's AJAX endpoint.
// The first real submission requires the recipient to activate the form by email.
const enquiryForm = document.getElementById('contact-enquiry-form');
const formStatus = document.getElementById('form-status');
const formSuccess = document.getElementById('form-success');
const submitButton = enquiryForm?.querySelector('button[type="submit"]');

enquiryForm?.addEventListener('submit', async (event) => {
  event.preventDefault();
  if (!enquiryForm.reportValidity()) return;

  const formData = new FormData(enquiryForm);
  const payload = {
    name: formData.get('name'),
    company: formData.get('company'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    interest: formData.get('interest'),
    message: formData.get('message'),
    _subject: `New UNO website enquiry — ${formData.get('company')}`,
    _replyto: formData.get('email'),
    _template: 'table'
  };

  if (submitButton) {
    submitButton.disabled = true;
    submitButton.dataset.originalText = submitButton.innerText;
    submitButton.innerText = 'Sending enquiry…';
  }
  if (formStatus) formStatus.textContent = 'Sending your enquiry to the UNO team. Please wait…';

  try {
    const response = await fetch('https://formsubmit.co/ajax/sales@uno-digitek.com', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify(payload)
    });
    const result = await response.json();

    // FormSubmit can return HTTP 200 for a rejected/unactivated form; check its success value.
    if (!response.ok || String(result.success) !== 'true') {
      throw new Error(result.message || 'The enquiry could not be sent. Please try again or email sales@uno-digitek.com.');
    }

    enquiryForm.hidden = true;
    if (formStatus) formStatus.hidden = true;
    if (formSuccess) {
      formSuccess.hidden = false;
      formSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  } catch (error) {
    if (formStatus) {
      formStatus.hidden = false;
      formStatus.textContent = `${error.message} You can also contact us at sales@uno-digitek.com or WhatsApp +62 815 825 3333.`;
    }
    if (submitButton) {
      submitButton.disabled = false;
      submitButton.innerText = submitButton.dataset.originalText || 'Send Enquiry';
    }
  }
});
