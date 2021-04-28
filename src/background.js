let contextMenuItem = {
  id: "quick-search-on-youtube",
  title: ` Search on youtube "%s"`,
  contexts: ["selection"],
};

chrome.contextMenus.create(contextMenuItem);

chrome.contextMenus.onClicked.addListener((clickData) => {
  query = clickData.selectionText;
  const newURL = `https://www.youtube.com/results?search_query=${query}`;
  chrome.tabs.create({ url: newURL });
});
