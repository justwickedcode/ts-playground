export const config: CodeceptJS.MainConfig = {
  tests: './tests/**/*_test.ts',
  output: './output',
  helpers: {
    Appium: {
      appiumV2: true,
      platform: 'Android',
      port: 4723,
      path:'/',
      desiredCapabilities: {
        platformName: 'Android',
        'appium:automationName': 'UiAutomator2',
        'appium:noReset': true,
        'appium:remoteAdbHost': 'host.docker.internal',
      }
    }
  },
  include: {
    I: './steps_file.ts',
    galleryPage: './pages/gallery.page.ts'
  },
  plugins: {
    retryFailedStep: { enabled: true },
    screenshotOnFail: { enabled: true },
    htmlReporter: { enabled: true }
  },
  name: 'codeceptjs-esm'
}