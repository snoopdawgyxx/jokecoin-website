
// Copy CA logic + meme popup
document.addEventListener('DOMContentLoaded', function(){
  const copyBtn = document.getElementById('copy-btn');
  const caText = document.getElementById('ca-text').textContent.trim();
  const popup = document.getElementById('popup');

  copyBtn.addEventListener('click', async function(){
    try{
      await navigator.clipboard.writeText(caText);
      showPopup();
    }catch(e){
      // fallback
      const ta = document.createElement('textarea');
      ta.value = caText;
      document.body.appendChild(ta);
      ta.select();
      try{ document.execCommand('copy'); showPopup(); }catch(e2){ alert('Copy failed, use manual copy.') }
      ta.remove();
    }
  });

  function showPopup(){
    popup.textContent = 'Copied like a clown 🤡';
    popup.style.opacity = '1';
    popup.style.transform = 'translateX(-50%) translateY(-6px)';
    setTimeout(()=>{
      popup.style.opacity = '0';
      popup.style.transform = 'translateX(-50%) translateY(0)';
    }, 1800);
  }
});
