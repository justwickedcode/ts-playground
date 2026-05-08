describe('Gallery', () => {
    before(async () => {
        await driver.execute('mobile: startActivity', {
            component: 'com.google.android.apps.photos/.home.HomeActivity'
        });
    });

    after(async () => {
        await driver.execute('mobile: pressKey', { keycode: 3 });
    });

    it('should scroll down', async () => {
        await driver.performActions([{
            type: 'pointer',
            id: 'finger1',
            parameters: { pointerType: 'touch' },
            actions: [
                { type: 'pointerMove', duration: 0, x: 500, y: 1500 },
                { type: 'pointerDown', button: 0 },
                { type: 'pause', duration: 100 },
                { type: 'pointerMove', duration: 500, x: 500, y: 500 },
                { type: 'pointerUp', button: 0 }
            ]
        }]);
    });

    it('should swipe left', async () => {
        await driver.performActions([{
            type: 'pointer',
            id: 'finger1',
            parameters: { pointerType: 'touch' },
            actions: [
                { type: 'pointerMove', duration: 0, x: 900, y: 800 },
                { type: 'pointerDown', button: 0 },
                { type: 'pause', duration: 100 },
                { type: 'pointerMove', duration: 500, x: 100, y: 800 },
                { type: 'pointerUp', button: 0 }
            ]
        }]);
    });
});

