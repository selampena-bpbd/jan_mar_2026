document.addEventListener('DOMContentLoaded', function() {
    const pageFlip = new St.PageFlip(document.getElementById('book'), {
        width: 500, // lebar satu halaman
        height: 700, // tinggi satu halaman
        size: "stretch",
        minWidth: 315,
        maxWidth: 1000,
        minHeight: 420,
        maxHeight: 1350,
        maxShadowOpacity: 0.5, // ketebalan bayangan saat melipat
        showCover: true,
        mobileScrollSupport: false
    });

    // Memuat halaman yang ada di HTML
    pageFlip.loadFromHTML(document.querySelectorAll('.page'));
});