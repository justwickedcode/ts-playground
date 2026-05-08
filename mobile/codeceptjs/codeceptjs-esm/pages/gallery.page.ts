const { I } = inject()

class GalleryPage {
    open() {
        I.startActivity('com.google.android.apps.photos', '.home.HomeActivity');
    }

    // swipeDown/Up require a locator — use performSwipe for screen-level gestures
    scrollDown() {
        I.performSwipe({ x: 500, y: 1500 }, { x: 500, y: 500 });
    }

    scrollUp() {
        I.performSwipe({ x: 500, y: 500 }, { x: 500, y: 1500 });
    }

    swipeLeft() {
        I.performSwipe({ x: 900, y: 800 }, { x: 100, y: 800 });
    }

    swipeRight() {
        I.performSwipe({ x: 100, y: 800 }, { x: 900, y: 800 });
    }

    tap(locator: CodeceptJS.LocatorOrString) {
        I.tap(locator);
    }

    goBack() {
        I.executeScript('mobile: pressKey', { keycode: 4 }); // 4 = Android Back key
    }

    goHome() {
        I.executeScript('mobile: pressKey', { keycode: 3 }); // 3 = Android Home key
    }
}

export = new GalleryPage();
