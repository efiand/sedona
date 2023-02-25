import FocusLock from './common/utils/focus-lock.js';
import createApp from './apps/page.js';

window.focusLock = new FocusLock();

createApp({ appData: window.appData.page }).$mount('#page');
