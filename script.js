document.addEventListener('DOMContentLoaded', function() {
    const showMoreBtn = document.querySelector('.show-more-btn');
    const moreText = document.querySelector('.more-text');
    const personalVaultBtn = document.querySelector('.personal-vault-btn');
    const modal = document.getElementById('vault-modal');
    const closeModal = document.querySelector('.close-btn');
    const submitPasswordBtn = document.getElementById('submit-password');
    const vaultPassword = document.getElementById('vault-password');
    const hint = document.getElementById('hint');
    const vaultContent = document.getElementById('vault-content');

    showMoreBtn.addEventListener('click', function() {
        if (moreText.style.display === 'none' || moreText.style.display === '') {
            moreText.style.display = 'inline';
            showMoreBtn.textContent = 'Show Less';
        } else {
            moreText.style.display = 'none';
            showMoreBtn.textContent = 'Show More';
        }
    });

    personalVaultBtn.addEventListener('click', function() {
        modal.style.display = 'flex';
    });

    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    submitPasswordBtn.addEventListener('click', function() {
        const password = vaultPassword.value;
        if (password === 'Anshu123@rahul') { // Change 'correctPassword' to your actual password
            vaultContent.style.display = 'block';
            hint.style.display = 'none';
        } else {
            hint.style.display = 'block';
        }
    });
});
