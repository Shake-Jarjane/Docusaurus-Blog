module.exports = function (context, options) {
  return {
    name: 'docusaurus-plugin-baidu-tongji',
    injectHtmlTags() {
      return {
        headTags: [
          {
            tagName: 'script',
            innerHTML: `
            var _hmt = _hmt || [];
            (function() {
              var hm = document.createElement("script");
              hm.src = "https://hm.baidu.com/hm.js?2e678e7f5285209a3601eed3c1fc32f7";
              var s = document.getElementsByTagName("script")[0]; 
              s.parentNode.insertBefore(hm, s);
            })();
          `,
          },
          {
            tagName: 'meta',
            attributes: {
              name: 'baidu-site-verification',
              content: 'code-rqLUw5reVS',
            },
          },
        ],
      };
    },
  };
};
