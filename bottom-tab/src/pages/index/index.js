Page({
  data: {
    ready: false,
    activeTab: 0,
    tabs: [
      {
        name: "Tab 1",
      },
      {
        name: "Tab 2",
      },
    ],
  },
  onLoad() {
    setTimeout(() => {
      this.setData({ ready: true });
    });
  },
  onTabBarTap(e) {
    const { index } = e.target.dataset;
    this.setData({
      activeTab: index,
    });
  },
});
