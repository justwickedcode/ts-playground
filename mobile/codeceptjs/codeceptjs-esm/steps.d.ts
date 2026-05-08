/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file');
type galleryPage = InstanceType<typeof import('./pages/gallery.page').default>;

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, galleryPage: galleryPage }
  interface Methods extends Appium {}
  interface I extends ReturnType<steps_file>, Methods {}
  namespace Translation {
    interface Actions {}
  }
}