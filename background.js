// 插件被安装时 执行的函数
chrome.runtime.onInstalled.addListener(() => {
  console.log("benjamin I'm installed!");
});

/**
 * 插件被保存到书签时 执行的函数
 * 书签需要权限，需要在清单文件中设置
 * "permissions": ["bookmarks"]
 */
chrome.bookmarks.onCreated.addListener(() => {
  alert("Bookmark saved");
});
