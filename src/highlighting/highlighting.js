
const CDN = 'https://cdn.jsdelivr.net/npm/ace-builds@1.14.0/src-min-noconflict';

// Now we tell ace to use the CDN locations to look for language-related
// files so that we don't have to include them in the bundle
ace.config.set('basePath', CDN);
ace.config.set('modePath', CDN);
ace.config.set('themePath', CDN);
ace.config.set('workerPath', CDN);
