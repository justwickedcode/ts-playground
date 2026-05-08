Feature('Gallery');

Before(({ galleryPage }) => {
    galleryPage.open();
});

After(({ galleryPage }) => {
    galleryPage.goHome();
});

Scenario('scroll down and back up', ({ galleryPage }) => {
    galleryPage.scrollDown();
    galleryPage.scrollUp();
});

Scenario('swipe through photos', ({ galleryPage }) => {
    galleryPage.swipeLeft();
    galleryPage.swipeLeft();
    galleryPage.swipeRight();
});

Scenario('go back from gallery', ({ galleryPage }) => {
    galleryPage.goBack();
});

Scenario('scroll down multiple times', ({ galleryPage }) => {
    galleryPage.scrollDown();
    galleryPage.scrollDown();
    galleryPage.scrollDown();
    galleryPage.scrollUp();
});