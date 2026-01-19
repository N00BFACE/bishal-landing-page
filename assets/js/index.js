// Video Modal Functionality
(function() {
    'use strict';

    // DOM Elements
    const playButton = document.querySelector('.video-card__play');
    const modal = document.getElementById('videoModal');
    const iframe = document.getElementById('youtubePlayer');
    const closeButton = document.querySelector('.video-modal__close');
    const overlay = document.querySelector('.video-modal__overlay');

    // Check if all elements exist
    if (!playButton || !modal || !iframe || !closeButton || !overlay) {
        console.warn('Video modal elements not found');
        return;
    }

    // Check if running from file:// protocol (YouTube embeds don't work locally)
    const isFileProtocol = window.location.protocol === 'file:';

    // Open modal and load video
    function openModal() {
        const videoId = playButton.getAttribute('data-video-id');
        if (!videoId) return;

        // YouTube embeds don't work with file:// protocol due to security restrictions
        // Open video in new tab instead
        if (isFileProtocol) {
            window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
            return;
        }

        iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
        modal.classList.add('is-active');
        document.body.style.overflow = 'hidden'; // Prevent scroll
    }

    // Close modal and stop video
    function closeModal() {
        modal.classList.remove('is-active');
        iframe.src = ''; // Stop video
        document.body.style.overflow = ''; // Restore scroll
    }

    // Event listeners
    playButton.addEventListener('click', openModal);
    closeButton.addEventListener('click', closeModal);
    overlay.addEventListener('click', closeModal);

    // Close on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('is-active')) {
            closeModal();
        }
    });
})();
